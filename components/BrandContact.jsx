/* eslint-disable @next/next/no-img-element */
/**
 * 三站共享 · 联系方式面板
 * ------------------------------------------------------------
 * 触发方式（**不依赖文字，天然支持任意语言**）：
 *   1. 各站源码里显式标记的按钮： <a data-bc-trigger ...>
 *      —— 用 data- 属性而不是加 class，因为 public/js/custom.js 依赖
 *         **完整 className 字符串**选元素，加 class 会打断它的功能。
 *   2. 各站页脚里就地放置的 <button className='bc-fab'>
 *   3. 外部可调用 window.bcOpen() / window.bcClose()
 *
 * 面板是 position:fixed 居中的，**不依赖页面滚动**，点击后直接展开。
 * 多语言：按 router.locale 取文案（zh / en / ja）。
 */
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

/** 面板文案（按钮文字为「联系方式」） */
const I18N = {
  zh: {
    fab: '联系方式',
    eyebrow: 'Contact',
    title: '联系方式',
    sub: '选一个最方便的方式 —— 我们通常当天回复。',
    copy: '点击复制',
    items: [
      { k: '邮箱 · Email', v: 'seaportcy.info@gmail.com', href: 'mailto:seaportcy.info@gmail.com' },
      { k: '网站 · Website', v: 'seaportcy.com', href: 'https://seaportcy.com' },
      { k: 'WhatsApp', v: '+852 9057 4053', href: 'https://wa.me/85290574053' },
      { k: '电话 · Tel', v: '+86 153 7771 8690', href: 'tel:+8615377718690' },
      { k: '微信 · WeChat', v: '15377718690', copy: true },
      { k: '地址 · Location', v: '广东 · 东莞' }
    ]
  },
  en: {
    fab: 'Contact',
    eyebrow: 'Contact',
    title: 'Get in touch',
    sub: 'Pick whichever is easiest — we usually reply the same day.',
    copy: 'Copy',
    items: [
      { k: 'Email', v: 'seaportcy.info@gmail.com', href: 'mailto:seaportcy.info@gmail.com' },
      { k: 'Website', v: 'seaportcy.com', href: 'https://seaportcy.com' },
      { k: 'WhatsApp', v: '+852 9057 4053', href: 'https://wa.me/85290574053' },
      { k: 'Tel', v: '+86 153 7771 8690', href: 'tel:+8615377718690' },
      { k: 'WeChat', v: '15377718690', copy: true },
      { k: 'Location', v: 'Dongguan, Guangdong, China' }
    ]
  },
  ja: {
    fab: 'お問い合わせ',
    eyebrow: 'Contact',
    title: 'お問い合わせ',
    sub: 'ご都合のよい方法をお選びください。通常、当日中にご返信いたします。',
    copy: 'コピー',
    items: [
      { k: 'メール', v: 'seaportcy.info@gmail.com', href: 'mailto:seaportcy.info@gmail.com' },
      { k: 'ウェブサイト', v: 'seaportcy.com', href: 'https://seaportcy.com' },
      { k: 'WhatsApp', v: '+852 9057 4053', href: 'https://wa.me/85290574053' },
      { k: '電話', v: '+86 153 7771 8690', href: 'tel:+8615377718690' },
      { k: 'WeChat', v: '15377718690', copy: true },
      { k: '所在地', v: '中国 広東省 東莞' }
    ]
  }
}

/**
 * 语言检测（本站实际只用了中/英/日三种）。
 * 注意：/studios-en、/studios-ja、/packaging-en 这类是 pages/[prefix] 自定义路由，
 * **不是** Next i18n 的标准 locale 路由，所以 router.locale 取不到，
 * 必须回退到从 URL 路径解析 -en / -ja 后缀。
 */
function detectLocale(pathOrRouter) {
  let p = ''
  if (typeof pathOrRouter === 'string') {
    p = pathOrRouter
  } else {
    const r = pathOrRouter || {}
    p = r.asPath || r.pathname || r.route || ''
  }
  p = String(p).toLowerCase().split('?')[0].split('#')[0]
  // 本站在用的三条语言路径（其余一律中文）：
  //   主站      /en           /ja
  //   Studios   /studios-en   /studios-ja
  //   Packaging /packaging-en /packaging-ja
  // 语言作为独立路径段（/ja、/ja/page/2）或作为后缀（/studios-ja、/packaging-ja）
  if (/(^|\/)ja(\/|$)/.test(p) || /-ja\/?$/.test(p)) return 'ja'
  if (/(^|\/)en(\/|$)/.test(p) || /-en\/?$/.test(p)) return 'en'
  return 'zh'
}



export default function BrandContact({ enabled = true }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const anchorRef = useRef(null)
  const panelRef = useRef(null)
  const router = useRouter()

  // 语言在客户端 effect 里检测：SSR 一律输出中文，挂载后按路径切换。
  // 这样服务端与客户端首帧一致，不会出现 hydration mismatch。
  const [loc, setLoc] = useState('zh')
  useEffect(() => {
    const path = (typeof window !== 'undefined' ? window.location.pathname : '') || (router && router.asPath)
    setLoc(detectLocale(path))
  }, [router && router.asPath])
  const T = I18N[loc] || I18N.zh

  useEffect(() => {
    const g = panelRef.current
    if (!g) return
    const W = window.innerWidth
    const H = window.innerHeight
    const a = anchorRef.current
    let r = null
    try { r = a && a.getBoundingClientRect ? a.getBoundingClientRect() : null } catch (e) {}
    const hasR = r && r.width > 0 && r.height > 0
    if (open) {
      const tw = Math.min(W * 0.8, 1360)
      const th = Math.min(H * 0.8, 900)
      const tl = (W - tw) / 2
      const tt = (H - th) / 2
      g.style.transition = 'none'
      g.style.left = (hasR ? r.left : tl) + 'px'
      g.style.top = (hasR ? r.top : tt) + 'px'
      g.style.width = (hasR ? Math.max(r.width, 140) : tw) + 'px'
      g.style.height = (hasR ? Math.max(r.height, 48) : th) + 'px'
      g.style.borderRadius = (hasR ? r.height / 2 : 40) + 'px'
      g.style.opacity = '0'
      void g.offsetWidth
      g.style.transition = ''
      requestAnimationFrame(() => {
        g.style.left = tl + 'px'
        g.style.top = tt + 'px'
        g.style.width = tw + 'px'
        g.style.height = th + 'px'
        g.style.borderRadius = '62px'
        g.style.opacity = '1'
      })
    } else {
      g.style.opacity = '0'
      g.style.borderRadius = (hasR ? r.height / 2 : 34) + 'px'
      g.style.left = (hasR ? r.left : W / 2) + 'px'
      g.style.top = (hasR ? r.top : H - 70) + 'px'
      g.style.width = (hasR ? Math.max(r.width, 140) : 170) + 'px'
      g.style.height = (hasR ? Math.max(r.height, 48) : 54) + 'px'
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  /* 触发绑定：只认显式标记，不看文字 —— 天然支持任意语言。
       · .bc-fab            各站页脚就地放置的按钮
       · [data-bc-trigger]  各站源码里显式标记的 CTA
     用事件委托 + capture；对这些元素 preventDefault，
     因为其中不少是 <a href=''> 或未指定 type 的 <button>（默认 submit），
     不阻止会刷新/提交整页，导致面板永远弹不出来。
     custom.js 自己的滚动监听不受影响（capture 阶段不阻断传播）。 */
  useEffect(() => {
    if (typeof document === 'undefined') return
    let pending = null
    const fire = (el) => {
      anchorRef.current = el || null
      if (pending) clearTimeout(pending)
      pending = setTimeout(() => { setMounted(true); setOpen(true) }, 30)
    }
    const onClick = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      const hit = t.closest('.bc-fab') || t.closest('[data-bc-trigger]')
      if (!hit) return
      if (hit.closest('#bc-root')) return
      e.preventDefault()
      fire(hit)
    }
    document.addEventListener('click', onClick, true)

    /* Packaging 的 PROXIO_FOOTER_LINKS 来自 siteConfig（Notion 覆盖本地 config），
       改本地文件无效 —— 运行时把页脚里残留的「联系方式」分组隐藏。 */
    const hideLegacy = () => {
      try {
        document.querySelectorAll('footer div').forEach((d) => {
          const h = d.querySelector(':scope > div, :scope > h6, :scope > h5, :scope > span')
          if (!h) return
          const t = (h.textContent || '').trim()
          if (t === '联系方式' || t === '聯系方式' || t === 'Contact' || t === 'お問い合わせ') {
            if (!d.querySelector('[data-bc-trigger], .bc-fab')) d.style.display = 'none'
          }
        })
      } catch (err) {}
    }
    hideLegacy()
    const t1 = setTimeout(hideLegacy, 1200)
    const t2 = setTimeout(hideLegacy, 2800)

    window.bcOpen = () => fire(document.querySelector('.bc-fab'))
    window.bcClose = () => setOpen(false)
    return () => {
      document.removeEventListener('click', onClick, true)
      if (pending) clearTimeout(pending)
      clearTimeout(t1); clearTimeout(t2)
      try { delete window.bcOpen; delete window.bcClose } catch (e) {}
    }
  }, [])

  /* 纯客户端渲染：面板是纯交互元素，不需要 SSR。
     服务端与客户端首帧都返回 null，挂载后才渲染 —— 彻底避免 hydration 不一致。
     （触发按钮 .bc-fab 由各站页脚渲染，不受影响，SSR 正常输出。） */
  const [clientReady, setClientReady] = useState(false)
  useEffect(() => { setClientReady(true) }, [])

  if (!enabled || !clientReady) return null

  return (
    <div id='bc-root' className={open ? 'bc-on' : ''}>
      <div className='bc-veil' onClick={() => setOpen(false)} />
      <div className='bc-panel' ref={panelRef}
        style={{ display: mounted ? 'block' : 'none' }}
        onClick={(e) => { if (e.target.closest('[data-bcclose]')) setOpen(false) }}>
        <button className='bc-close' data-bcclose aria-label='close'><span>✕</span></button>
        <div className='bc-in'>
          <span className='bc-eyebrow'>{T.eyebrow}</span>
          <h2 className='bc-title'>{T.title}</h2>
          <p className='bc-sub'>{T.sub}</p>
          <div className='bc-grid'>
            {T.items.map((it) => (
              <div className='bc-item' key={it.k}>
                <span className='bc-k'>{it.k}</span>
                {it.href ? (
                  <a className='bc-v' href={it.href}
                    target={it.href.startsWith('http') ? '_blank' : undefined}
                    rel='noreferrer'>{it.v}</a>
                ) : (
                  <span className='bc-v'>
                    {it.v}
                    {it.copy && (
                      <em className='bc-copy' onClick={() => {
                        try { navigator.clipboard.writeText(it.v) } catch (err) {}
                      }}>{T.copy}</em>
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** 多语言的「联系方式」按钮 —— 各站页脚就地引用，文字随 locale 变化 */
export function BrandContactFab() {
  const router = useRouter()
  // 同主组件：客户端检测，SSR 先输出中文，挂载后切换 —— 避免 hydration mismatch。
  const [loc, setLoc] = useState('zh')
  useEffect(() => {
    const path = (typeof window !== 'undefined' ? window.location.pathname : '') || (router && router.asPath)
    setLoc(detectLocale(path))
  }, [router && router.asPath])
  const T = I18N[loc] || I18N.zh
  return (
    <button className='bc-fab' type='button'>
      {T.fab}
      <span className='bc-ic'>↗</span>
    </button>
  )
}
