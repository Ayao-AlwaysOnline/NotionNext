/* eslint-disable @next/next/no-img-element */
/**
 * 三站共享 · 底部中间「联系我们」悬浮按钮 + 展开面板
 * ------------------------------------------------------------
 * 照搬工业地面页（/industrial-flooring）的联系面板：
 *   点击按钮 → 玻璃面板从按钮的位置/尺寸展开到屏幕 80% 居中
 *   关闭 → 反向收缩回按钮
 *
 * 设计原则（重要）：
 *   1. 全新增元素，**不改任何现有类名** —— public/js/custom.js 用完整类名
 *      选择并改写站内元素，动类名会打断它的功能。
 *   2. 所有类名加 bc- 前缀（brand contact），已核对不与 custom.js 的
 *      任何选择器冲突（它用的是 .btn./.submenu/button.cursor-pointer/
 *      .mb-6.rounded-xl/.swiper-wrapper/#hide-scrollbar/.container… 等）。
 *   3. 面板样式全部限定在 #bc-root 内，不污染全站。
 *   4. 内容写死（与地板页一致），不依赖 Notion 数据。
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

const CSS = `
#bc-root{--bc-gold:#ecbc56;--bc-pink:#e74483;--bc-ink:#100e0c;--bc-ink2:#1a1a1a;
  --bc-grad:linear-gradient(135deg,#ecbc56 0%,#e74483 100%);
  --bc-grad-r:linear-gradient(to right,#ecbc56,#e74483);
  --bc-tx:#f2ede4;--bc-tx2:rgba(242,237,228,.62);--bc-tx3:rgba(242,237,228,.40);
  --bc-edge:rgba(255,255,255,.10);--bc-ease:cubic-bezier(.32,.72,0,1)}
#bc-root,#bc-root *{box-sizing:border-box}

/* ---------- 底部中间悬浮按钮 ---------- */
#bc-root .bc-fab{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:120;
  display:inline-flex;align-items:center;gap:12px;padding:11px 11px 11px 24px;
  border:0;border-radius:999px;cursor:pointer;font-family:inherit;
  background:var(--bc-grad);color:#17130c;font-weight:600;font-size:14.5px;letter-spacing:.01em;
  box-shadow:0 20px 46px -20px rgba(236,188,86,.55),0 8px 24px -12px rgba(0,0,0,.8);
  transition:transform .5s var(--bc-ease),box-shadow .5s var(--bc-ease),opacity .4s var(--bc-ease)}
#bc-root .bc-fab:hover{transform:translateX(-50%) translateY(-3px);
  box-shadow:0 26px 58px -22px rgba(236,188,86,.72),0 0 28px rgba(236,188,86,.45),0 10px 28px -12px rgba(0,0,0,.85)}
#bc-root .bc-fab:active{transform:translateX(-50%) scale(.97)}
#bc-root .bc-fab .bc-ic{width:32px;height:32px;border-radius:999px;flex:none;
  display:inline-flex;align-items:center;justify-content:center;
  background:rgba(23,19,12,.16);font-size:15px;
  transition:transform .5s var(--bc-ease)}
#bc-root .bc-fab:hover .bc-ic{transform:translate(3px,-2px) scale(1.06)}
@media(max-width:520px){#bc-root .bc-fab{font-size:13.5px;padding:9px 9px 9px 18px;bottom:18px}
  #bc-root .bc-fab .bc-ic{width:28px;height:28px}}

/* ---------- 遮罩 ---------- */
#bc-root .bc-veil{position:fixed;inset:0;z-index:130;background:rgba(8,7,6,.52);
  -webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);
  opacity:0;visibility:hidden;transition:opacity .55s var(--bc-ease),visibility .55s}
#bc-root.bc-on .bc-veil{opacity:1;visibility:visible}

/* ---------- 玻璃面板 ---------- */
#bc-root .bc-panel{position:fixed;z-index:140;overflow:hidden;opacity:0;
  background:linear-gradient(135deg,rgba(236,188,86,.90) 0%,rgba(231,68,131,.90) 100%);
  -webkit-backdrop-filter:blur(40px) saturate(190%);backdrop-filter:blur(40px) saturate(190%);
  border:1px solid rgba(255,255,255,.30);
  box-shadow:0 60px 140px -50px rgba(0,0,0,.9),inset 0 1px 1px rgba(255,255,255,.42);
  transition:left .78s var(--bc-ease),top .78s var(--bc-ease),width .78s var(--bc-ease),
             height .78s var(--bc-ease),border-radius .78s var(--bc-ease),opacity .5s var(--bc-ease)}
#bc-root .bc-panel::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(150deg,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 42%)}
#bc-root .bc-in{position:relative;z-index:2;height:100%;overflow-y:auto;
  padding:clamp(26px,4.4vw,64px) clamp(24px,4vw,68px);
  scrollbar-width:none}
#bc-root .bc-in::-webkit-scrollbar{display:none}

#bc-root .bc-eyebrow{display:inline-flex;align-items:center;gap:9px;
  font:500 10px/1 Poppins,"Noto Sans SC",sans-serif;text-transform:uppercase;letter-spacing:.24em;
  color:rgba(23,19,12,.62);background:rgba(23,19,12,.12);
  border:1px solid rgba(23,19,12,.18);padding:8px 15px;border-radius:999px;margin-bottom:20px}
#bc-root .bc-eyebrow::before{content:"";width:5px;height:5px;border-radius:50%;
  background:rgba(23,19,12,.7)}
#bc-root .bc-title{margin:0 0 12px;font:700 clamp(26px,4vw,46px)/1.1 Poppins,"Noto Sans SC",sans-serif;
  color:#17130c;letter-spacing:-.02em}
#bc-root .bc-sub{margin:0 0 34px;font-size:15px;line-height:1.7;color:rgba(23,19,12,.66)}
#bc-root .bc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
@media(max-width:720px){#bc-root .bc-grid{grid-template-columns:1fr}}
#bc-root .bc-item{background:rgba(255,255,255,.30);border:1px solid rgba(255,255,255,.45);
  border-radius:18px;padding:16px 20px;
  transition:background .45s var(--bc-ease),transform .45s var(--bc-ease),box-shadow .45s var(--bc-ease)}
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
  transition:background .4s var(--bc-ease)}
#bc-root .bc-copy:hover{background:rgba(23,19,12,.18)}
#bc-root .bc-close{position:absolute;top:18px;right:18px;z-index:5;width:46px;height:46px;
  border-radius:999px;cursor:pointer;display:flex;align-items:center;justify-content:center;
  background:rgba(23,19,12,.12);border:1px solid rgba(23,19,12,.20);color:#17130c;font-size:19px;
  transition:transform .5s var(--bc-ease),background .4s var(--bc-ease)}
#bc-root .bc-close:hover{transform:rotate(90deg);background:rgba(23,19,12,.22)}
`

export default function BrandContact({ enabled = true }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const fabRef = useRef(null)
  const panelRef = useRef(null)

  /* 展开 / 收起：从按钮的位置与尺寸开始，过渡到屏幕 80% 居中 */
  useEffect(() => {
    const g = panelRef.current
    if (!g) return
    if (open) {
      const b = fabRef.current
      const r = b ? b.getBoundingClientRect() : null
      const W = window.innerWidth
      const H = window.innerHeight
      const tw = Math.min(W * 0.8, 1360)
      const th = H * 0.8
      g.style.transition = 'none'
      g.style.left = (r ? r.left : W * 0.1) + 'px'
      g.style.top = (r ? r.top : H * 0.1) + 'px'
      g.style.width = (r ? r.width : tw) + 'px'
      g.style.height = (r ? r.height : th) + 'px'
      g.style.borderRadius = (r ? r.height / 2 : 40) + 'px'
      g.style.opacity = '0'
      void g.offsetWidth
      g.style.transition = ''
      requestAnimationFrame(() => {
        g.style.left = (W - tw) / 2 + 'px'
        g.style.top = (H - th) / 2 + 'px'
        g.style.width = tw + 'px'
        g.style.height = th + 'px'
        g.style.borderRadius = '62px'
        g.style.opacity = '1'
      })
    } else {
      const b = fabRef.current
      const r = b ? b.getBoundingClientRect() : null
      const W = window.innerWidth
      g.style.opacity = '0'
      g.style.borderRadius = (r ? r.height / 2 : 34) + 'px'
      g.style.left = (r ? r.left : W / 2) + 'px'
      g.style.top = (r ? r.top : window.innerHeight - 70) + 'px'
      g.style.width = (r ? r.width : 160) + 'px'
      g.style.height = (r ? r.height : 52) + 'px'
    }
  }, [open])

  /* Esc 关闭 */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!enabled) return null

  return (
    <div id='bc-root' className={open ? 'bc-on' : ''}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <button className='bc-fab' ref={fabRef} aria-label='联系我们'
        onClick={() => { setMounted(true); setOpen(true) }}>
        联系我们
        <span className='bc-ic'>↗</span>
      </button>

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
                  <a className='bc-v' href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>{it.v}</a>
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
