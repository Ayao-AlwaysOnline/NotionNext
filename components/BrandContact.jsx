/* eslint-disable @next/next/no-img-element */
/**
 * 三站共享 · 联系面板（照搬工业地面页效果）
 * ------------------------------------------------------------
 * 用法：各站自行放置触发按钮
 *     <button className='bc-fab' type='button'>联系我们<span className='bc-ic'>↗</span></button>
 *
 * 经验教训（踩过的坑，别再犯）：
 *   1. .bc-fab 的样式**不能依赖 #bc-root 上的 CSS 变量** —— 按钮在 #bc-root 外面，
 *      变量取不到会导致背景失效（表现为一个黑胶囊）。所以这里用字面量渐变。
 *   2. 触发绑定**不能只硬编码 custom.js 的选择器** —— 三站的「联系我们」按钮
 *      类名各不相同。改为**按可见文字匹配**，最稳。
 *   3. Packaging 的 PROXIO_FOOTER_LINKS 来自 siteConfig（Notion 数据库覆盖本地
 *      config），改本地文件无效 —— 所以页脚残留的「联系方式」列用运行时隐藏处理。
 *   4. 面板收起时 pointer-events:none，否则 opacity:0 的面板会盖住触发按钮。
 */
import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  { k: '邮箱 · Email', v: 'seaportcy.info@gmail.com', href: 'mailto:seaportcy.info@gmail.com' },
  { k: '网站 · Website', v: 'seaportcy.com', href: 'https://seaportcy.com' },
  { k: 'WhatsApp', v: '+852 9057 4053', href: 'https://wa.me/85290574053' },
  { k: '电话 · Tel', v: '+86 153 7771 8690', href: 'tel:+8615377718690' },
  { k: '微信 · WeChat', v: '15377718690', copy: '点击复制' },
  { k: '地址 · Location', v: '广东 · 东莞' }
]

/** 触发文案：可见文字里包含这些词的元素都会被接上 */
const TRIGGER_TEXT = ['联系我们', '與我們聯繫', 'Contact Us', 'Contact us']

const CSS = `
/* ---------- 触发按钮 ----------
   注意：这里**不能**用 var(--bc-grad)，按钮在 #bc-root 之外取不到变量。 */
.bc-fab{display:inline-flex;align-items:center;gap:12px;margin-top:16px;
  padding:12px 12px 12px 26px;border:0;border-radius:999px;cursor:pointer;
  font-family:inherit;font-size:14.5px;font-weight:600;letter-spacing:.01em;
  background:linear-gradient(135deg,#ecbc56 0%,#e74483 100%) !important;
  color:#17130c !important;text-decoration:none;
  box-shadow:0 20px 46px -20px rgba(236,188,86,.55),0 8px 24px -12px rgba(0,0,0,.8);
  transition:transform .5s cubic-bezier(.32,.72,0,1),box-shadow .5s cubic-bezier(.32,.72,0,1)}
.bc-fab:hover{transform:translateY(-3px);
  box-shadow:0 26px 58px -22px rgba(236,188,86,.72),0 0 28px rgba(236,188,86,.45),0 10px 28px -12px rgba(0,0,0,.85)}
.bc-fab:active{transform:scale(.97)}
.bc-fab .bc-ic{width:32px;height:32px;border-radius:999px;flex:none;
  display:inline-flex;align-items:center;justify-content:center;
  background:rgba(23,19,12,.16);font-size:15px;font-style:normal;
  transition:transform .5s cubic-bezier(.32,.72,0,1)}
.bc-fab:hover .bc-ic{transform:translate(3px,-2px) scale(1.06)}
@media(max-width:520px){.bc-fab{font-size:13.5px;padding:10px 10px 10px 18px}
  .bc-fab .bc-ic{width:28px;height:28px}}

#bc-root .bc-veil{position:fixed;inset:0;z-index:130;background:rgba(8,7,6,.55);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  opacity:0;visibility:hidden;pointer-events:none;
  transition:opacity .55s cubic-bezier(.32,.72,0,1),visibility .55s}
#bc-root.bc-on .bc-veil{opacity:1;visibility:visible;pointer-events:auto}

#bc-root .bc-panel{position:fixed;z-index:140;overflow:hidden;opacity:0;pointer-events:none;
  background:linear-gradient(135deg,rgba(236,188,86,.94) 0%,rgba(231,68,131,.94) 100%) !important;
  -webkit-backdrop-filter:blur(40px) saturate(190%);backdrop-filter:blur(40px) saturate(190%);
  border:1px solid rgba(255,255,255,.30);
  box-shadow:0 60px 140px -50px rgba(0,0,0,.9),inset 0 1px 1px rgba(255,255,255,.42);
  transition:left .78s cubic-bezier(.32,.72,0,1),top .78s cubic-bezier(.32,.72,0,1),
             width .78s cubic-bezier(.32,.72,0,1),height .78s cubic-bezier(.32,.72,0,1),
             border-radius .78s cubic-bezier(.32,.72,0,1),opacity .5s cubic-bezier(.32,.72,0,1)}
#bc-root.bc-on .bc-panel{pointer-events:auto}
#bc-root .bc-panel::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(150deg,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 42%)}
#bc-root .bc-in{position:relative;z-index:2;height:100%;overflow-y:auto;
  padding:clamp(26px,4.4vw,64px) clamp(24px,4vw,68px);scrollbar-width:none}
#bc-root .bc-in::-webkit-scrollbar{display:none}
#bc-root .bc-eyebrow{display:inline-flex;align-items:center;gap:9px;
  font:500 10px/1 Poppins,"Noto Sans SC",sans-serif;text-transform:uppercase;letter-spacing:.24em;
  color:rgba(23,19,12,.62);background:rgba(23,19,12,.12);
  border:1px solid rgba(23,19,12,.18);padding:8px 15px;border-radius:999px;margin-bottom:20px}
#bc-root .bc-eyebrow::before{content:"";width:5px;height:5px;border-radius:50%;background:rgba(23,19,12,.7)}
#bc-root .bc-title{margin:0 0 12px;font:700 clamp(26px,4vw,46px)/1.1 Poppins,"Noto Sans SC",sans-serif;
  color:#17130c;letter-spacing:-.02em}
#bc-root .bc-sub{margin:0 0 34px;font-size:15px;line-height:1.7;color:rgba(23,19,12,.66)}
#bc-root .bc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
@media(max-width:720px){#bc-root .bc-grid{grid-template-columns:1fr}}
#bc-root .bc-item{background:rgba(255,255,255,.30);border:1px solid rgba(255,255,255,.45);
  border-radius:18px;padding:16px 20px;
  transition:background .45s cubic-bezier(.32,.72,0,1),transform .45s cubic-bezier(.32,.72,0,1),
             box-shadow .45s cubic-bezier(.32,.72,0,1)}
#bc-root .bc-item:hover{background:rgba(255,255,255,.44);transform:translateY(-2px);
  box-shadow:0 18px 40px -22px rgba(0,0,0,.55)}
#bc-root .bc-k{display:block;font:500 10.5px/1 Poppins,"Noto Sans SC",sans-serif;
  text-transform:uppercase;letter-spacing:.18em;color:rgba(23,19,12,.52);margin-bottom:9px}
#bc-root .bc-v{display:flex;align-items:center;gap:10px;flex-wrap:wrap;
  font:600 16px/1.4 Poppins,"Noto Sans SC",sans-serif;color:#17130c;text-decoration:none}
#bc-root a.bc-v:hover{text-decoration:underline}
#bc-root .bc-copy{font:500 11px/1 Poppins,"Noto Sans SC",sans-serif;
  color:rgba(23,19,12,.62);background:rgba(23,19,12,.10);
  border:1px solid rgba(23,19,12,.16);padding:5px 10px;border-radius:999px;cursor:pointer;
  font-style:normal;transition:background .4s cubic-bezier(.32,.72,0,1)}
#bc-root .bc-copy:hover{background:rgba(23,19,12,.18)}
#bc-root .bc-close{position:absolute;top:18px;right:18px;z-index:5;width:46px;height:46px;
  border-radius:999px;cursor:pointer;display:flex;align-items:center;justify-content:center;
  background:rgba(23,19,12,.12);border:1px solid rgba(23,19,12,.20);color:#17130c;font-size:19px;
  transition:transform .5s cubic-bezier(.32,.72,0,1),background .4s cubic-bezier(.32,.72,0,1)}
#bc-root .bc-close:hover{transform:rotate(90deg);background:rgba(23,19,12,.22)}
`

export default function BrandContact({ enabled = true }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const anchorRef = useRef(null)
  const panelRef = useRef(null)

  /* 从触发按钮的位置与尺寸展开到屏幕 80% 居中 */
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

  /* ---------- 触发绑定 ----------
     不硬编码类名（三站按钮类名不同），改为：
       a) 页面里任意 .bc-fab
       b) 可见文字包含「联系我们」的可点击元素（a / button / [role=button]）
     事件委托 + capture，不覆盖页面已有监听；custom.js 的滚动照常执行。 */
  useEffect(() => {
    if (typeof document === 'undefined') return
    let pending = null
    const fire = (el) => {
      anchorRef.current = el || null
      if (pending) clearTimeout(pending)
      pending = setTimeout(() => { setMounted(true); setOpen(true) }, 340)
    }
    const matchByText = (t) => {
      if (!t || !t.closest) return null
      const el = t.closest('a,button,[role="button"]')
      if (!el) return null
      if (el.closest('#bc-root')) return null
      const txt = (el.textContent || '').trim()
      if (!txt || txt.length > 40) return null
      for (const k of TRIGGER_TEXT) if (txt.indexOf(k) >= 0) return el
      return null
    }
    const onClick = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      const fab = t.closest('.bc-fab')
      if (fab) { e.preventDefault(); fire(fab); return }
      const hit = matchByText(t)
      if (hit) fire(hit)
    }
    document.addEventListener('click', onClick, true)

    /* Packaging 的 PROXIO_FOOTER_LINKS 来自 siteConfig（Notion 会覆盖本地 config），
       改本地文件无效 —— 这里在运行时把页脚里残留的「联系方式」分组隐藏掉。 */
    const hideLegacy = () => {
      try {
        document.querySelectorAll('footer div').forEach((d) => {
          const h = d.querySelector(':scope > div, :scope > h6, :scope > h5, :scope > span')
          if (!h) return
          const t = (h.textContent || '').trim()
          if (t === '联系方式' || t === '聯系方式') d.style.display = 'none'
        })
      } catch (err) {}
    }
    hideLegacy()
    const t1 = setTimeout(hideLegacy, 1200)
    const t2 = setTimeout(hideLegacy, 2800)

    const api = () => fire(document.querySelector('.bc-fab'))
    window.bcOpen = api
    window.bcClose = () => setOpen(false)
    return () => {
      document.removeEventListener('click', onClick, true)
      if (pending) clearTimeout(pending)
      clearTimeout(t1); clearTimeout(t2)
      try { delete window.bcOpen; delete window.bcClose } catch (e) {}
    }
  }, [])

  if (!enabled) return null

  return (
    <div id='bc-root' className={open ? 'bc-on' : ''}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className='bc-veil' onClick={() => setOpen(false)} />
      <div className='bc-panel' ref={panelRef}
        style={{ display: mounted ? 'block' : 'none' }}
        onClick={(e) => { if (e.target.closest('[data-bcclose]')) setOpen(false) }}>
        <button className='bc-close' data-bcclose aria-label='关闭'><span>✕</span></button>
        <div className='bc-in'>
          <span className='bc-eyebrow'>Contact</span>
          <h2 className='bc-title'>联系我们</h2>
          <p className='bc-sub'>选一个最方便的方式 —— 我们通常当天回复。</p>
          <div className='bc-grid'>
            {ITEMS.map((it) => (
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
                      }}>{it.copy}</em>
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
