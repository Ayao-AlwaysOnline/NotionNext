import Link from 'next/link'
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
   主站语言切换必须整页加载
   ------------------------------------------------------------------
   主站语言菜单（Language → 日本語 / English）的实际链接是绝对地址：
       https://seaportcy.com/ja    https://seaportcy.com/en
   走客户端路由切过去时，URL 虽然从 / 变成 /en，但主站这两个路径是
   Next 的 locale 路径（同一个页面组件），React 不会重挂载，
   页脚联系面板等纯客户端文案不会重算；浏览器回退同理。
   实测：/ 纯客户端切到 /en 后，面板文案仍是中文；整页加载才正确。

   这里只对主站语言根路径生效（/en、/ja）。
   其他站点的路径（/studios-en、/packaging-ja …）、文章/归档/分类等
   普通链接一律不受影响，仍走客户端路由。
   主站目前只有中/英/日，以后新增语种要同步这里的清单。
*/
const MAIN_SITE_LANG_ROOTS = ['en', 'ja']

/** 取出链接的路径部分：绝对内链（https://seaportcy.com/en）要还原成 /en */
const toPathname = value => {
  const raw = typeof value === 'string' ? value : value?.pathname || ''
  if (!raw) return ''
  if (/^https?:\/\//i.test(raw)) {
    try {
      return new URL(raw).pathname
    } catch (e) {
      return raw
    }
  }
  return raw.split('?')[0].split('#')[0]
}

/** 恰好一个路径段、且是主站语言根才成立（/en/archive 不算） */
const isMainSiteLangRoot = pathname => {
  const parts = String(pathname || '').split('/').filter(Boolean)
  return (
    parts.length === 1 && MAIN_SITE_LANG_ROOTS.includes(parts[0].toLowerCase())
  )
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

  // —— 主站语言切换：整页加载，保证译文（含联系面板）与回退都正确 ——
  // 只按「目标链接」判断，不比较当前路径：SSR 阶段拿不到 window.location，
  // 一旦判断依赖当前路径，客户端首帧就可能与服务端渲染成不同标签
  // （<a> vs <Link>）→ hydration 不一致（本仓有 #418 的历史）。
  // 代价仅是：已经在某语言站时再点该语言，会整页刷新同一地址（无害）。
  if (isMainSiteLangRoot(toPathname(mergedHref))) {
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
