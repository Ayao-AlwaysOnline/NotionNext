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
     Seaportcy 品牌视觉层 v3
     ------------------------------------------------------------
     全部限定在 #theme-landing 内；**只用 CSS 定位既有选择器，绝不改 className**
     —— public/js/custom.js 依赖大量完整类名字符串，改类名会打断功能。
     ============================================================ */
  #theme-landing {
    --b-gold: #ecbc56; --b-pink: #e74483;
    --b-ink: #100e0c; --b-ink2: #1a1a1a;
    --b-grad: linear-gradient(135deg, #ecbc56 0%, #e74483 100%);
    --b-grad-r: linear-gradient(to right, #ecbc56, #e74483);
    --b-tx: #f2ede4; --b-tx2: rgba(242, 237, 228, .62); --b-tx3: rgba(242, 237, 228, .40);
    --b-edge: rgba(255, 255, 255, .10);
    --b-glass: rgba(16, 14, 12, .58);
    --b-ease: cubic-bezier(.32, .72, 0, 1);
  }

  /* ---------- ① 全站背景：品牌墨底 + 径向网格光 ---------- */
  #theme-landing {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .15) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .13) 0%, transparent 60%);
    background-attachment: fixed; background-repeat: no-repeat; background-size: cover;
  }
  /* 区块底透明让光透出 —— 含二级页面 */
  #theme-landing #main-wrapper, #theme-landing #content-wrapper,
  #theme-landing section, #theme-landing main, #theme-landing article,
  #theme-landing #home, #theme-landing #hero,
  #theme-landing .wrapper { background-color: transparent !important; }

  /* ---------- ② 页脚：去掉原来的深蓝色底 ---------- */
  #theme-landing .bg-\[\#090E34\] { background-color: transparent !important; }

  /* ---------- ③ 液态玻璃：卡片统一处理 ----------
     用属性选择器定位既有的 rounded-xl / shadow-testimonial 卡片，
     不改任何 className。 */
  #theme-landing [class*="rounded-xl"][class*="bg-white"],
  #theme-landing [class*="rounded-xl"][class*="bg-dark"],
  #theme-landing [class*="shadow-testimonial"],
  #theme-landing [class*="rounded-\[5px\]"][class*="bg-white"],
  #theme-landing [class*="rounded-lg"][class*="bg-white"] {
    background-color: var(--b-glass) !important;
    background-image: linear-gradient(140deg, rgba(255, 255, 255, .07) 0%, rgba(255, 255, 255, 0) 42%) !important;
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    backdrop-filter: blur(22px) saturate(180%);
    border: 1px solid var(--b-edge) !important;
    box-shadow: 0 26px 60px -34px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .09) !important;
    border-radius: 1.25rem !important;
    transition: border-color .55s var(--b-ease), transform .55s var(--b-ease),
                box-shadow .55s var(--b-ease);
  }
  #theme-landing [class*="rounded-xl"][class*="bg-white"]:hover,
  #theme-landing [class*="shadow-testimonial"]:hover {
    border-color: rgba(236, 188, 86, .34) !important;
    transform: translateY(-4px);
    box-shadow: 0 34px 74px -34px rgba(0, 0, 0, .96),
                0 0 24px rgba(236, 188, 86, .18),
                inset 0 1px 0 0 rgba(255, 255, 255, .12) !important;
  }
  /* 卡片里的次级白底块也一起玻璃化（例如内层小节） */
  #theme-landing [class*="rounded-lg"][class*="bg-gray-1"],
  #theme-landing [class*="rounded-md"][class*="bg-gray-1"] {
    background-color: rgba(255, 255, 255, .045) !important;
    border: 1px solid var(--b-edge) !important;
  }

  /* ---------- ④ 二级菜单（桌面 + 移动端）---------- */
  #theme-landing #navbarCollapse .submenu,
  #theme-landing .submenu {
    margin-top: 12px; padding: 10px; border-radius: 20px;
    background: rgba(16, 14, 12, .72) !important;
    -webkit-backdrop-filter: blur(28px) saturate(185%);
    backdrop-filter: blur(28px) saturate(185%);
    border: 1px solid var(--b-edge) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    overflow: hidden;
  }
  #theme-landing .submenu a, #theme-landing .submenu li > a {
    display: block; border-radius: 12px;
    padding: 11px 14px !important;
    color: var(--b-tx2) !important; white-space: nowrap;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-landing .submenu a:hover, #theme-landing .submenu a:active {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ---------- ⑤ 导航（starter/proxio 用 .ud-header）---------- */
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
  #theme-landing .ud-header.sticky {
    top: 14px !important;
    background-color: rgba(16, 14, 12, .62) !important;
    --tw-bg-opacity: 0 !important;
    -webkit-backdrop-filter: blur(30px) saturate(190%) !important;
    backdrop-filter: blur(30px) saturate(190%) !important;
    border-color: rgba(255, 255, 255, .12) !important;
    box-shadow: 0 26px 64px -28px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .07) !important;
  }
  #theme-landing .ud-header .container { width: auto !important; max-width: none !important; }

  /* ---------- ⑥ 徽标与字标辉光 ---------- */
  #theme-landing .navbar-logo .header-logo { transition: filter .45s var(--b-ease), transform .45s var(--b-ease); }
  #theme-landing .navbar-logo:hover .header-logo, #theme-landing .navbar-logo:active .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85)); transform: scale(1.04);
  }
  #theme-landing .navbar-logo .header-logo-text { transition: color .45s var(--b-ease), text-shadow .45s var(--b-ease); }
  #theme-landing .navbar-logo:hover .header-logo-text, #theme-landing .navbar-logo:active .header-logo-text {
    color: var(--b-gold) !important; text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }

  /* ---------- ⑦ 导航项 ---------- */
  #theme-landing .ud-header #navbarCollapse li > a,
  #theme-landing .ud-header #navbarCollapse li > button {
    color: var(--b-tx2) !important; border-radius: 999px; padding: 9px 14px;
    transition: color .4s var(--b-ease), background .4s var(--b-ease);
  }
  #theme-landing .ud-header #navbarCollapse li > a:hover,
  #theme-landing .ud-header #navbarCollapse li > button:hover {
    color: var(--b-gold) !important; background: rgba(255, 255, 255, .055);
  }

  /* ---------- ⑧ 金底深字兜底：改用品牌金 ---------- */
  #theme-landing .bg-primary { color: #ecbc56; }
  #theme-landing .bg-primary.text-white,
  #theme-landing .bg-primary .text-white,
  #theme-landing .bg-primary h1, #theme-landing .bg-primary h2, #theme-landing .bg-primary h3,
  #theme-landing .bg-primary p, #theme-landing .bg-primary span, #theme-landing .bg-primary a { color: #ecbc56; }
  #theme-landing .bg-primary svg { fill: currentColor; }

  /* ---------- ⑨ 眉标 ---------- */
  #theme-landing .eb {
    display: inline-flex; align-items: center; gap: 9px;
    font: 500 10px/1 Poppins, "Noto Sans SC", sans-serif;
    text-transform: uppercase; letter-spacing: .24em; color: #e6cf9b;
    background: rgba(236, 188, 86, .10); border: 1px solid rgba(236, 188, 86, .24);
    padding: 8px 15px; border-radius: 999px; margin-bottom: 22px;
  }
  #theme-landing .eb::before {
    content: ""; width: 5px; height: 5px; border-radius: 50%;
    background: var(--b-grad-r); box-shadow: 0 0 10px rgba(236, 188, 86, .75);
    transition: box-shadow .4s var(--b-ease), transform .4s var(--b-ease);
  }
  #theme-landing .eb:hover::before { transform: scale(1.35); box-shadow: 0 0 16px rgba(236, 188, 86, 1); }

  /* ---------- ⑩ 滚动进入动画 ---------- */
  #theme-landing .rv2 {
    opacity: 0; transform: translateY(48px);
    transition: opacity .9s var(--b-ease), transform .9s var(--b-ease);
    will-change: transform;
  }
  #theme-landing .rv2.rv2-on { opacity: 1; transform: none; }

  /* ---------- ⑪ 标题 ---------- */
  #theme-landing h1, #theme-landing h2 { letter-spacing: -.028em; }
  #theme-landing h1 { line-height: 1.06; }
  #theme-landing h2 { line-height: 1.12; }

  /* ============================================================
     Studios 专属：导航与移动端菜单
     ------------------------------------------------------------
     landing 的导航**不是 .ud-header**，而是 <header class="fixed w-full">
     滚动后加 bg-white dark:bg-hexo-black-gray backdrop-blur-sm ——
     blur 仅 4px 且底色接近不透明，所以看起来"太实"。
     ============================================================ */
  #theme-landing header.fixed {
    background-color: transparent !important;
    transition: background-color .55s var(--b-ease), backdrop-filter .55s var(--b-ease),
                box-shadow .55s var(--b-ease), border-color .55s var(--b-ease) !important;
  }
  /* 滚动后（组件会挂上 bg-white / dark:bg-hexo-black-gray 等类） */
  #theme-landing header.fixed[class*="bg-white"],
  #theme-landing header.fixed[class*="hexo-black-gray"] {
    background-color: rgba(16, 14, 12, .55) !important;
    -webkit-backdrop-filter: blur(28px) saturate(190%) !important;
    backdrop-filter: blur(28px) saturate(190%) !important;
    border-bottom: 1px solid var(--b-edge) !important;
    box-shadow: 0 22px 54px -30px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .07) !important;
  }
  #theme-landing header.fixed .btn-sm {
    color: var(--b-tx2) !important;
    border-radius: 999px;
    transition: color .4s var(--b-ease), background .4s var(--b-ease);
  }
  #theme-landing header.fixed .btn-sm:hover {
    color: var(--b-gold) !important;
    background: rgba(255, 255, 255, .06) !important;
  }

  /* 移动端菜单：玻璃面板 */
  #theme-landing .hamburger span { transition: transform .4s var(--b-ease), opacity .4s var(--b-ease); }
  #theme-landing [class*="absolute top-full"][class*="h-screen"] {
    background-color: rgba(16, 14, 12, .86) !important;
    -webkit-backdrop-filter: blur(30px) saturate(185%);
    backdrop-filter: blur(30px) saturate(185%);
    border-top: 1px solid var(--b-edge) !important;
  }
  #theme-landing [class*="absolute top-full"] .btn-sm {
    background-color: rgba(255, 255, 255, .055) !important;
    color: var(--b-tx) !important;
    border: 1px solid var(--b-edge) !important;
    border-radius: 1rem !important;
    padding: 12px 18px !important;
    transition: border-color .45s var(--b-ease), color .45s var(--b-ease),
                box-shadow .45s var(--b-ease);
  }
  #theme-landing [class*="absolute top-full"] .btn-sm:hover,
  #theme-landing [class*="absolute top-full"] .btn-sm:active {
    border-color: rgba(236, 188, 86, .5) !important;
    color: var(--b-gold) !important;
    box-shadow: 0 0 22px rgba(236, 188, 86, .45);
  }

  
  
  /* ============================================================
     v3.2 · 液态玻璃（精确选择器版）
     ------------------------------------------------------------
     v3.1 用了 [class*="bg-gray-2"] 这种子串匹配，把按钮上的
     hover:bg-gray-2 / hover:bg-white 也匹配进去了，导致 Hero 按钮变透明。
     改为「精确复合类选择器」—— 元素必须同时拥有这些确切的类名才命中。
     ============================================================ */
  #theme-landing .rounded-xl.bg-white.shadow-pricing,
  #theme-landing .rounded-xl.bg-white.shadow-testimonial,
  #theme-landing .rounded-xl.bg-white.overflow-hidden,
  #theme-landing .mb-8.overflow-hidden.rounded-\[5px\],
  #theme-landing .rounded-xl.dark\:bg-dark,
  #theme-landing .rounded-xl.dark\:bg-dark-2 {
    background-color: rgba(30, 27, 23, .72) !important;
    background-image: linear-gradient(140deg, rgba(255, 255, 255, .10) 0%, rgba(255, 255, 255, .01) 46%, rgba(255, 255, 255, 0) 100%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%);
    backdrop-filter: blur(24px) saturate(185%);
    border: 1px solid rgba(255, 255, 255, .14) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .14) !important;
    border-radius: 1.35rem !important;
    transition: border-color .55s var(--b-ease), transform .55s var(--b-ease),
                box-shadow .55s var(--b-ease);
  }
  #theme-landing .rounded-xl.bg-white.shadow-pricing:hover,
  #theme-landing .rounded-xl.bg-white.shadow-testimonial:hover,
  #theme-landing .mb-8.overflow-hidden.rounded-\[5px\]:hover {
    border-color: rgba(236, 188, 86, .42) !important;
    transform: translateY(-4px);
    box-shadow: 0 38px 78px -34px rgba(0, 0, 0, .97),
                0 0 26px rgba(236, 188, 86, .22),
                inset 0 1px 0 0 rgba(255, 255, 255, .18) !important;
  }
  /* 区块级白底容器透明 —— 用精确的复合类，不用子串 */
  #theme-landing .bg-white.pb-12.pt-20,
  #theme-landing .bg-white.pb-10.pt-20,
  #theme-landing .bg-gray-1.py-20,
  #theme-landing .bg-gray-1.pb-12.pt-20 {
    background-color: transparent !important;
  }

  `}</style>
}

export { Style }
