/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

    .test {
      text-color: red;
    }



  /* ===== Seaportcy 品牌色兜底（视觉优化）=====
     金 #ecbc56 是亮色，bg-primary 上原本的 text-white 会看不清。
     这里把金底上的文字统一压成深色。选择器带 #theme- 前缀，
     只影响当前主题；不碰结构类名、不碰任何逻辑。 ===== */
  .bg-primary { color: #17130c; }
  .bg-primary.text-white,
  .bg-primary .text-white,
  .bg-primary h1, .bg-primary h2, .bg-primary h3,
  .bg-primary p, .bg-primary span, .bg-primary a { color: #17130c; }
  .bg-primary svg { fill: currentColor; }

      ${themeConsoleStyle('landing', CONFIG)}
  

  
  /* ============================================================
     Seaportcy 品牌视觉层 v2
     ------------------------------------------------------------
     依据：哥在地板站确立的玻璃/辉光语言 + high-end-visual-design 技能
     全部限定在 #theme-landing 内，不碰全局、不碰逻辑、不碰 public/js/custom.js
     依赖的任何类名。
     ============================================================ */
  #theme-landing {
    --b-gold: #ecbc56;
    --b-pink: #e74483;
    --b-ink: #100e0c;
    --b-ink2: #1a1a1a;
    --b-grad: linear-gradient(135deg, #ecbc56 0%, #e74483 100%);
    --b-grad-r: linear-gradient(to right, #ecbc56, #e74483);
    --b-tx: #f2ede4;
    --b-tx2: rgba(242, 237, 228, .62);
    --b-tx3: rgba(242, 237, 228, .40);
    --b-edge: rgba(255, 255, 255, .10);
    --b-glass: rgba(16, 14, 12, .60);
    --b-ease: cubic-bezier(.32, .72, 0, 1);
  }

  /* ---------- ① 全站背景：品牌墨底 + 径向网格光 ----------
     用 background-attachment:fixed 让光固定在视口，滚动时稳定，
     同时天然覆盖所有页面（含案例归档等二级页面）。 */
  #theme-landing {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .15) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .13) 0%, transparent 60%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  /* 让区块底透明，光才能透出来 */
  #theme-landing #main-wrapper,
  #theme-landing #content-wrapper,
  #theme-landing section,
  #theme-landing main,
  #theme-landing article { background-color: transparent !important; }

  /* ---------- ② 悬浮玻璃导航（脱离顶部） ---------- */
  #theme-landing .ud-header {
    top: 20px !important; left: 50% !important; right: auto !important;
    transform: translateX(-50%);
    width: auto !important; max-width: calc(100vw - 32px);
    border-radius: 999px;
    background: var(--b-glass);
    -webkit-backdrop-filter: blur(26px) saturate(180%);
    backdrop-filter: blur(26px) saturate(180%);
    border: 1px solid var(--b-edge);
    box-shadow: 0 20px 54px -24px rgba(0, 0, 0, .95);
    transition: background .5s var(--b-ease), box-shadow .5s var(--b-ease),
                border-color .5s var(--b-ease), top .5s var(--b-ease);
  }
  /* 滚动后：玻璃加深但要透 —— 用 .72 而不是接近不透明 */
  #theme-landing .ud-header.sticky {
    top: 14px !important;
    background-color: rgba(16, 14, 12, .68) !important;
    --tw-bg-opacity: 0 !important;
    -webkit-backdrop-filter: blur(30px) saturate(190%) !important;
    backdrop-filter: blur(30px) saturate(190%) !important;
    border-color: rgba(255, 255, 255, .12) !important;
    box-shadow: 0 26px 64px -28px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .07) !important;
  }
  #theme-landing .ud-header .container { width: auto !important; max-width: none !important; }

  /* ---------- ③ 徽标与字标：触摸辉光 ---------- */
  #theme-landing .navbar-logo .header-logo {
    transition: filter .45s var(--b-ease), transform .45s var(--b-ease);
  }
  #theme-landing .navbar-logo:hover .header-logo,
  #theme-landing .navbar-logo:active .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85));
    transform: scale(1.04);
  }
  #theme-landing .navbar-logo .header-logo-text {
    transition: color .45s var(--b-ease), text-shadow .45s var(--b-ease);
  }
  #theme-landing .navbar-logo:hover .header-logo-text,
  #theme-landing .navbar-logo:active .header-logo-text {
    color: var(--b-gold) !important;
    text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }

  /* ---------- ④ 导航项 ---------- */
  #theme-landing .ud-header #navbarCollapse li > a,
  #theme-landing .ud-header #navbarCollapse li > button {
    color: var(--b-tx2) !important;
    border-radius: 999px; padding: 9px 14px;
    transition: color .4s var(--b-ease), background .4s var(--b-ease);
  }
  #theme-landing .ud-header #navbarCollapse li > a:hover,
  #theme-landing .ud-header #navbarCollapse li > button:hover {
    color: var(--b-gold) !important;
    background: rgba(255, 255, 255, .055);
  }

  /* ---------- ⑤ 二级菜单（下拉）：与导航同一套玻璃语言 ----------
     ⚠️ 只加样式，绝不改 .submenu / .cursor-pointer 这些类名 ——
        public/js/custom.js 依赖它们做二级菜单的展开逻辑。 */
  #theme-landing #navbarCollapse .submenu {
    margin-top: 12px;
    padding: 10px;
    border-radius: 20px;
    background: rgba(16, 14, 12, .72) !important;
    -webkit-backdrop-filter: blur(28px) saturate(185%);
    backdrop-filter: blur(28px) saturate(185%);
    border: 1px solid var(--b-edge);
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08);
    overflow: hidden;
  }
  #theme-landing #navbarCollapse .submenu a {
    display: block;
    border-radius: 12px;
    padding: 11px 14px !important;
    color: var(--b-tx2) !important;
    white-space: nowrap;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-landing #navbarCollapse .submenu a:hover,
  #theme-landing #navbarCollapse .submenu a:active {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }
  #theme-landing #navbarCollapse .submenu-item > button.cursor-pointer:hover {
    color: var(--b-gold) !important;
  }

  /* ---------- ⑥ 眉标微胶囊 ---------- */
  #theme-landing .eb {
    display: inline-flex; align-items: center; gap: 9px;
    font: 500 10px/1 Poppins, "Noto Sans SC", sans-serif;
    text-transform: uppercase; letter-spacing: .24em;
    color: #e6cf9b;
    background: rgba(236, 188, 86, .10);
    border: 1px solid rgba(236, 188, 86, .24);
    padding: 8px 15px; border-radius: 999px; margin-bottom: 22px;
  }
  #theme-landing .eb::before {
    content: ""; width: 5px; height: 5px; border-radius: 50%;
    background: var(--b-grad-r); box-shadow: 0 0 10px rgba(236, 188, 86, .75);
    transition: box-shadow .4s var(--b-ease), transform .4s var(--b-ease);
  }
  #theme-landing .eb:hover::before { transform: scale(1.35); box-shadow: 0 0 16px rgba(236, 188, 86, 1); }

  /* ---------- ⑦ 通用玻璃面 ---------- */
  #theme-landing .gl {
    background: var(--b-glass);
    -webkit-backdrop-filter: blur(26px) saturate(180%);
    backdrop-filter: blur(26px) saturate(180%);
    border: 1px solid var(--b-edge);
    border-radius: 1.5rem;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08);
  }

  /* ---------- ⑧ 双层包边 ---------- */
  #theme-landing .bz {
    padding: 6px; border-radius: 2rem;
    background: rgba(255, 255, 255, .045);
    border: 1px solid var(--b-edge);
    box-shadow: 0 30px 70px -40px rgba(0, 0, 0, .9);
    transition: border-color .6s var(--b-ease), transform .6s var(--b-ease);
  }
  #theme-landing .bz:hover { border-color: rgba(236, 188, 86, .28); transform: translateY(-4px); }
  #theme-landing .bz > * {
    border-radius: calc(2rem - 6px);
    background: var(--b-ink2);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, .10);
    height: 100%;
  }

  /* ---------- ⑨ 滚动进入动画 ---------- */
  #theme-landing .rv2 {
    opacity: 0; transform: translateY(48px);
    transition: opacity .9s var(--b-ease), transform .9s var(--b-ease);
    will-change: transform;
  }
  #theme-landing .rv2.rv2-on { opacity: 1; transform: none; }

  /* ---------- ⑩ 标题排版 ---------- */
  #theme-landing h1, #theme-landing h2 { letter-spacing: -.028em; }
  #theme-landing h1 { line-height: 1.06; }
  #theme-landing h2 { line-height: 1.12; }

  
  /* Hero 容器透明 —— 与全站共用同一层背景光，避免实心底把光挡住 */
  #theme-landing #home,
  #theme-landing #hero,
  #theme-landing header[class*="relative"] { background-color: transparent !important; }
  `}</style>
}

export { Style }
