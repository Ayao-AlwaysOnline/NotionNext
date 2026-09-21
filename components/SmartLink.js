import Link from 'next/link'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'

// 过滤 <a> 标签不能识别的 props
const filterDOMProps = props => {
  const {
    passHref,
    legacyBehavior,
    placeholderSrc,
    fallbackSrc,
    ...rest
  } = props
  return rest
}

// 过滤不应该透传给 next/link 的非链接属性
const filterLinkProps = props => {
  const {
    placeholderSrc,
    fallbackSrc,
    src,
    alt,
    width,
    height,
    loading,
    decoding,
    onLoad,
    onError,
    ...rest
  } = props
  return rest
}

/* ------------------------------------------------------------------
  站点前缀切换必须整页加载
  ------------------------------------------------------------------
  NOTION_PAGE_ID 形如：主站ID,en:xxx,ja:xxx,packaging:xxx,packaging-en:xxx…
  冒号前那段就是一个「站点前缀」，同时也是 next.config.js 里注册的 i18n locale。

  为什么必须整页加载：/studios-en、/packaging-ja 这类是 pages/[prefix] 的自定义路由，
  **不是** Next i18n 的标准 locale 路由 —— 客户端路由切过去时 router.locale 不会变，
  而 lib/global.js 只在 router.locale 变化时才重算译文：
      useEffect(() => { initLocale(router.locale, changeLang, updateLocale) }, [router.locale, ...])
  结果就是：语言/站点切了，译文没切；浏览器回退也回不来。
  走 <a> 整页加载后，服务端会按新前缀渲染，译文与站点数据都正确；
  回退/前进由浏览器原生处理，同样正确。

  只对「第一段路径是站点前缀、且与当前不同」的链接生效；
  文章、归档、分类等普通链接（第一段不是站点前缀）仍走客户端路由，不受影响。
*/
let cachedPageId = null
let cachedPrefixes = null

const collectSitePrefixes = pageId => {
  const set = new Set()
  String(pageId || '')
    .split(',')
    .forEach(segment => {
      const i = segment.indexOf(':')
      if (i > 0) set.add(segment.slice(0, i).trim())
    })
  return set
}

const getSitePrefixes = pageId => {
  if (cachedPageId !== pageId) {
    cachedPageId = pageId
    cachedPrefixes = collectSitePrefixes(pageId)
  }
  return cachedPrefixes
}

/** 取路径的第一段（忽略 query / hash / 结尾斜杠） */
const firstSegment = path => {
  const clean = String(path || '')
    .split('?')[0]
    .split('#')[0]
  const parts = clean.split('/').filter(Boolean)
  return parts[0] || ''
}

/** 把内部链接对象拼成可直接用于 <a href> 的字符串 */
const hrefToString = value => {
  if (typeof value === 'string') return value
  if (!value || typeof value !== 'object') return ''
  const pathname = value.pathname || ''
  const query = value.query
  if (!query || Object.keys(query).length === 0) return pathname
  const search = new URLSearchParams()
  Object.entries(query).forEach(([key, val]) => {
    if (val !== undefined && val !== null) search.set(key, String(val))
  })
  const qs = search.toString()
  return qs ? pathname + '?' + qs : pathname
}

const SmartLink = ({ href, children, ...rest }) => {
  const router = useRouter()
  const LINK = siteConfig('LINK')

  // 获取 URL 字符串用于判断是否是外链
  let urlString = ''

  if (typeof href === 'string') {
    urlString = href
  } else if (
    typeof href === 'object' &&
    href !== null &&
    typeof href.pathname === 'string'
  ) {
    urlString = href.pathname
  }

  const isExternal = urlString.startsWith('http') && !urlString.startsWith(LINK)

  const getPersistedQuery = () => {
    if (typeof window === 'undefined') return {}
    const queryString = window.location.search?.slice(1) || ''
    const params = new URLSearchParams(queryString)
    const preserved = {}
    for (const [key, value] of params.entries()) {
      if (value !== '') preserved[key] = value
    }
    return preserved
  }

  const mergePreservedQueryForStringHref = value => {
    if (typeof value !== 'string' || !value || value.startsWith('#')) return value
    const preservedQuery = getPersistedQuery()
    if (Object.keys(preservedQuery).length === 0) return value

    const isAbsolute = value.startsWith('http://') || value.startsWith('https://')
    const url = new URL(value, LINK)
    Object.entries(preservedQuery).forEach(([key, paramValue]) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, paramValue)
      }
    })

    if (isAbsolute) return url.toString()
    return `${url.pathname}${url.search}${url.hash}`
  }

  const mergePreservedQueryForObjectHref = value => {
    if (!value || typeof value !== 'object') return value
    const preservedQuery = getPersistedQuery()
    if (Object.keys(preservedQuery).length === 0) return value
    return {
      ...value,
      query: {
        ...preservedQuery,
        ...(value.query || {})
      }
    }
  }

  if (isExternal) {
    // 对于外部链接，必须是 string 类型
    const externalUrl =
      typeof href === 'string' ? href : new URL(href.pathname, LINK).toString()

    return (
      <a
        href={externalUrl}
        target='_blank'
        rel='noopener noreferrer'
        {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  // 内部链接（可为对象形式）
  const mergedHref =
    typeof href === 'string'
      ? mergePreservedQueryForStringHref(href)
      : mergePreservedQueryForObjectHref(href)

  // —— 站点前缀切换：走整页加载，保证译文与站点数据正确 ——
  const targetPath =
    typeof mergedHref === 'string' ? mergedHref : mergedHref?.pathname
  const currentPath =
    router?.asPath ||
    (typeof window !== 'undefined' ? window.location.pathname : '')
  const pageId = siteConfig('NOTION_PAGE_ID', BLOG.NOTION_PAGE_ID)
  const prefixes = getSitePrefixes(pageId)
  const targetPrefix = firstSegment(targetPath)
  // 当前页若第一段不是站点前缀，说明它属于「默认语言站」（无前缀），当前前缀记为空串。
  // 这样 /en -> / （切回中文站）也能被识别成切换，而 /archive -> / 不会误判。
  const rawCurrentPrefix = firstSegment(currentPath)
  const currentPrefix = prefixes.has(rawCurrentPrefix) ? rawCurrentPrefix : ''
  const switchesSite =
    targetPrefix !== currentPrefix &&
    (targetPrefix === '' || prefixes.has(targetPrefix))

  if (switchesSite) {
    return (
      <a href={hrefToString(mergedHref)} {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  return (
    <Link href={mergedHref} {...filterLinkProps(rest)}>
      {children}
    </Link>
  )
}

export default SmartLink