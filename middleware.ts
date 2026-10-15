import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { checkStrIsNotionId, getLastPartOfUrl } from '@/lib/utils'
import { idToUuid } from 'notion-utils'
import BLOG from './blog.config'

/**
 * Clerk 身份验证中间件
 */
export const config = {
  // 这里设置白名单，防止静态资源被拦截
  matcher: ['/((?!.*\\..*|_next|/sign-in|/auth).*)', '/', '/(api|trpc)(.*)']
}

// 限制登录访问的路由
const isTenantRoute = createRouteMatcher([
  '/user/organization-selector(.*)',
  '/user/orgid/(.*)',
  '/dashboard',
  '/dashboard/(.*)'
])

// 限制权限访问的路由
const isTenantAdminRoute = createRouteMatcher([
  '/admin/(.*)/memberships',
  '/admin/(.*)/domain'
])

/* ------------------------------------------------------------------
   主站语言自动跳转（接管 Next 的 localeDetection，见 next.config.js）
   ------------------------------------------------------------------
   ⚠️ 绝不能用 req.nextUrl.pathname 判断"当前是不是首页"：
   NextURL 会把 locale 前缀剥掉 —— 请求 /en、/studios 时它给出的都是 '/'，
   于是这些页面会被误判成首页：/en 变成跳向自身的**死循环**
   （英文站在 en-US 语言头下直接 ERR_TOO_MANY_REDIRECTS），/studios 被跳成 /studios/en。
   这是线上实测到的真实事故。这里一律用「原始请求 URL」判断路径与构造跳转目标。

   与线上实测行为逐条对齐（20/20）：
   - 只有根路径 '/' 会跳；其他任何路径一律不动（实测：非根路径从不跳转）；
   - 语言标签必须与 locale 列表「完全相等」并按 q 值降序取（en-US ≠ en，
     所以只发 "en-US" 不跳；发 "en-US,en;q=0.9" 才跳 /en）；
   - NEXT_LOCALE cookie 优先于 Accept-Language；
   - 307，且保留 query（实测 /?lite=1 → /en?lite=1）。

   唯一有意的区别：命中搜索引擎/AI 爬虫 UA 时不跳转，让它们拿到 200 的中文主站。

   本文件跑在 Edge runtime：只用 Web API，不引 Node 模块。
*/
const DEFAULT_LOCALE = String(BLOG.LANG || 'zh-CN')

/** 与 lib/utils/pageId.js 的 extractLangPrefix 同规则：从 'en:xxxx' 取 'en' */
const collectLocales = () => {
  const list: string[] = [DEFAULT_LOCALE]
  const raw = String(BLOG.NOTION_PAGE_ID || '')
  if (raw.includes(',')) {
    for (const segment of raw.split(',')) {
      const prefix = segment.match(/^(.+?):/)?.[1]
      if (prefix && !list.includes(prefix)) list.push(prefix)
    }
  }
  return list
}
const LOCALES: string[] = collectLocales()

/** 搜索引擎 / AI 爬虫：命中则不跳转 */
const CRAWLER_RX =
  /(googlebot|google-extended|bingbot|msnbot|adidxbot|baiduspider|yandex|sogou|360spider|duckduckbot|applebot|petalbot|bytespider|amazonbot|gptbot|oai-searchbot|chatgpt-user|ccbot|claudebot|anthropic-ai|perplexitybot|diffbot|facebookexternalhit|twitterbot|linkedinbot|telegrambot|whatsapp|slackbot|discordbot|pinterest|redditbot|ahrefsbot|semrushbot|mj12bot|dotbot|exabot|seznambot|ia_archiver|crawler|spider|bot[/\s;)])/i

/** 选出要跳转的目标语言；选不出、或就是默认语言时返回 null */
const resolveLocale = (req: NextRequest): string | null => {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && LOCALES.includes(cookieLocale)) return cookieLocale
  const header = req.headers.get('accept-language')
  if (!header) return null
  const tags = header
    .split(',')
    .map(part => {
      const segments = part.trim().split(';')
      // noUncheckedIndexedAccess 下 segments[0] 可能是 undefined
      const tag = (segments[0] ?? '').trim().toLowerCase()
      const qParam = segments
        .slice(1)
        .map(x => x.trim())
        .find(x => x.startsWith('q='))
      return { tag, q: qParam ? Number(qParam.slice(2)) : 1 }
    })
    .filter(item => item.tag && item.tag !== '*' && !Number.isNaN(item.q))
    .sort((a, b) => b.q - a.q)
  for (const item of tags) {
    const hit = LOCALES.find(l => l.toLowerCase() === item.tag)
    if (hit) return hit
  }
  return null
}

/** 需要跳转就返回 307 响应，否则返回 null —— 对不跳转的请求零改动 */
const maybeRedirectLocale = (req: NextRequest): NextResponse | null => {
  try {
    if (process.env.EXPORT) return null
    // 用原始 URL 取路径（nextUrl.pathname 会剥掉 locale 前缀，/en 会变成 /）
    const requestUrl = new URL(req.url)
    if (requestUrl.pathname !== '/') return null
    // 保险 1：NextURL 若已解析出「非默认语言」的 locale，说明请求本来就带语言前缀 —— 绝不跳
    const activeLocale = req.nextUrl?.locale
    if (
      activeLocale &&
      activeLocale !== DEFAULT_LOCALE &&
      LOCALES.includes(activeLocale)
    ) {
      return null
    }
    if (CRAWLER_RX.test(req.headers.get('user-agent') || '')) return null
    const locale = resolveLocale(req)
    if (!locale || locale === DEFAULT_LOCALE) return null
    // 保险 2：目标与请求路径相同就绝不跳（任何形式的自我重定向都不允许）
    const target = new URL(req.url)
    target.pathname = '/' + locale
    if (target.pathname === requestUrl.pathname) return null
    return NextResponse.redirect(target, 307)
  } catch {
    // fail-open：出错就当没这回事，绝不因此影响请求
    return null
  }
}

/**
 * 没有配置权限相关功能的返回
 * @param req
 * @param ev
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const noAuthMiddleware = async (req: NextRequest, ev: any) => {
  // 语言自动跳转（爬虫除外）
  const localeRedirect = maybeRedirectLocale(req)
  if (localeRedirect) return localeRedirect
  // 如果没有配置 Clerk 相关环境变量，返回一个默认响应或者继续处理请求
  if (BLOG['UUID_REDIRECT']) {
    let redirectJson: Record<string, string> = {}
    try {
      const response = await fetch(`${req.nextUrl.origin}/redirect.json`)
      if (response.ok) {
        redirectJson = (await response.json()) as Record<string, string>
      }
    } catch (err) {
      console.error('Error fetching static file:', err)
    }
    let lastPart = getLastPartOfUrl(req.nextUrl.pathname) as string
    if (checkStrIsNotionId(lastPart)) {
      lastPart = idToUuid(lastPart)
    }
    if (lastPart && redirectJson[lastPart]) {
      const redirectToUrl = req.nextUrl.clone()
      redirectToUrl.pathname = '/' + redirectJson[lastPart]
      console.log(
        `redirect from ${req.nextUrl.pathname} to ${redirectToUrl.pathname}`
      )
      return NextResponse.redirect(redirectToUrl, 308)
    }
  }
  return NextResponse.next()
}
/**
 * 鉴权中间件
 */
const authMiddleware = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  ? clerkMiddleware((auth, req) => {
      // 语言自动跳转（爬虫除外）
      const localeRedirect = maybeRedirectLocale(req)
      if (localeRedirect) return localeRedirect
      const { userId } = auth()
      // 处理 /dashboard 路由的登录保护
      if (isTenantRoute(req)) {
        if (!userId) {
          // 用户未登录，重定向到 /sign-in
          const url = new URL('/sign-in', req.url)
          url.searchParams.set('redirectTo', req.url) // 保存重定向目标
          return NextResponse.redirect(url)
        }
      }

      // 处理管理员相关权限保护
      if (isTenantAdminRoute(req)) {
        auth().protect(has => {
          return (
            has({ permission: 'org:sys_memberships:manage' }) ||
            has({ permission: 'org:sys_domains_manage' })
          )
        })
      }

      // 默认继续处理请求
      return NextResponse.next()
    })
  : noAuthMiddleware

export default authMiddleware
