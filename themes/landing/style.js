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
     v4 · 修正
     ============================================================ */

  /* ① 去掉导航里多余的框
     原因：v3 里那条用子串匹配的玻璃规则（[class*="rounded-xl"][class*="bg-white"]
     等）会命中导航内部的元素（语言按钮/搜索框之类），在其上画出了第二个圆角框。
     这里明确排除导航内部，只保留 v3.2 的精确复合类规则。 */
  #theme-landing .ud-header [class*="rounded-xl"],
  #theme-landing .ud-header [class*="rounded-lg"],
  #theme-landing .ud-header [class*="shadow-testimonial"],
  #theme-landing .ud-header [class*="shadow-pricing"],
  #theme-landing .ud-header [class*="rounded-\\[5px\\]"],
  #theme-landing .ud-header [class*="rounded-\\[14px\\]"] {
    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 导航内部只有胶囊项需要底色，其余一律透明 */
  #theme-landing .ud-header .container,
  #theme-landing .ud-header .container > div,
  #theme-landing .ud-header .container > div > div { background-color: transparent !important; }

  /* ② 评论卡上浮导致被父容器裁剪 —— 去掉位移，只用描边与辉光表达 */
  #theme-landing .rounded-xl.bg-white.shadow-testimonial:hover,
  #theme-landing [class*="shadow-testimonial"]:hover {
    transform: none !important;
    border-color: rgba(236, 188, 86, .45) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                0 0 28px rgba(236, 188, 86, .26),
                inset 0 1px 0 0 rgba(255, 255, 255, .20) !important;
  }

  /* ③ 移动端二级菜单：与桌面同一套玻璃语言 */
  #theme-landing [class*="fixed"][class*="top-0"] [class*="rounded"],
  #theme-landing [class*="md:hidden"] [class*="absolute"],
  #theme-landing .submenu,
  
  #theme-landing [class*="fixed top-0"] ul,
  #theme-landing [class*="fixed top-0"] .submenu,
  #theme-landing body > div[class*="fixed"] > div[class*="bg-white"],
  #theme-landing [class*="top-full"][class*="w-full"] {
    background-color: rgba(16, 14, 12, .92) !important;
    -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
    backdrop-filter: blur(30px) saturate(185%) !important;
    border: 1px solid rgba(255, 255, 255, .10) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
  }
  #theme-landing [class*="top-full"] a,
  #theme-landing [class*="top-full"] button {
    border-radius: 12px !important;
    color: rgba(242, 237, 228, .72) !important;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-landing [class*="top-full"] a:hover,
  #theme-landing [class*="top-full"] button:hover {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ============================================================
     Studios v4：复刻 hero 背景到全部区块 + 指定区块玻璃化
     ============================================================ */
  /* 页面整体已经是品牌墨底 + 径向光；这里确保所有区块都透明以透出同一层光 */
  #theme-landing > div,
  #theme-landing > section,
  #theme-landing [class*="bg-gray-1"],
  #theme-landing [class*="bg-gray-900"] {
    background-color: transparent !important;
  }
  /* 保留 hero 里那两处文字的原有高亮：不被品牌层的通用文字色规则覆盖 */
  #theme-landing .bg-primary,
  #theme-landing .bg-primary .text-white,
  #theme-landing .bg-primary span,
  #theme-landing .bg-primary p { color: inherit; }

  /* 区块玻璃化：解决「解决方案」与「数字资产与品牌策略解决方案」三块 */
  #theme-landing [class*="rounded"][class*="bg-gray-1"],
  #theme-landing [class*="rounded"][class*="bg-white"][class*="p-"]:not(header *) {
    background-color: rgba(30, 27, 23, .70) !important;
    background-image: linear-gradient(140deg, rgba(255, 255, 255, .10) 0%, rgba(255, 255, 255, 0) 46%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%);
    backdrop-filter: blur(24px) saturate(185%);
    border: 1px solid rgba(255, 255, 255, .14) !important;
    border-radius: 1.35rem !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .14) !important;
  }
  /* 解决 FeaturesBlocks（数字资产/品牌策略三块）的白底卡 */
  #theme-landing [class*="bg-white"][class*="rounded"][class*="shadow"]:not(header *) {
    background-color: rgba(30, 27, 23, .70) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%);
    backdrop-filter: blur(24px) saturate(185%);
    border: 1px solid rgba(255, 255, 255, .14) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .14) !important;
  }

  
  /* ============================================================
     v4.1 · 关键修正：导航里多余的框
     ------------------------------------------------------------
     v4 里我写了 #theme-landing #navbarCollapse { 玻璃底 }，但桌面端的
     #navbarCollapse 正是包裹菜单项的那个容器 —— 于是它被画成了
     第二个胶囊，就是哥看到的"多余的框"。
     它本来就只该在移动端作为下拉面板时才有底色。
     改为仅在移动端断点内生效。
     ============================================================ */
  #theme-landing .ud-header #navbarCollapse,
  #theme-landing .ud-header #navbarCollapse > ul,
  #theme-landing .ud-header #navbarCollapse > div {
    background-color: transparent !important;
    background-image: none !important;
    border: 0 !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 桌面端：菜单项自身保持胶囊高亮即可 */
  #theme-landing .ud-header #navbarCollapse li > a,
  #theme-landing .ud-header #navbarCollapse li > button {
    background-color: transparent;
  }

  /* 移动端才把它做成玻璃面板（960px 是本站 lg 断点） */
  @media (max-width: 959px) {
    #theme-landing .ud-header #navbarCollapse {
      background-color: rgba(16, 14, 12, .92) !important;
      -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
      backdrop-filter: blur(30px) saturate(185%) !important;
      border: 1px solid rgba(255, 255, 255, .10) !important;
      border-radius: 20px !important;
      box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                  inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    }
    #theme-landing .ud-header #navbarCollapse li > a,
    #theme-landing .ud-header #navbarCollapse li > button,
    #theme-landing .ud-header #navbarCollapse .submenu a {
      border-radius: 12px !important;
    }
  }

  
  /* ============================================================
     Studios · 完整玻璃与辉光系统（正面定位真实类名）
     ------------------------------------------------------------
     依据：high-end-visual-design 技能 + 哥确立的玻璃/辉光语言
       · 质感：Ethereal Glass（玻璃面 + 发丝描边 + 内高光 + 金色辉光）
       · 手法：Double-Bezel 同心圆角、Island 按钮、Macro Whitespace
     说明：这些卡片原本是 bg-white 且**没有 dark: 变体**，
           在深色站上就渲染成白盒子。这里统一改为液态玻璃。
     ============================================================ */

  /* ---------- ① 区块级的整片背景层改透明，透出全站品牌光 ---------- */
  #theme-landing section > div.absolute.inset-0,
  #theme-landing section > div[class*="bg-gray-100"],
  #theme-landing section > div[class*="bg-gray-900"] {
    background-color: transparent !important;
    background-image: none !important;
  }
  /* 那两条装饰性细线也去掉，避免在纯光背景上显得脏 */
  #theme-landing section > div[class*="w-px"] { background-color: rgba(255,255,255,.08) !important; }

  /* ---------- ② 卡片：液态玻璃（Double-Bezel 外层） ---------- */
  #theme-landing .flex.items-center.text-lg.p-5.rounded.border,
  #theme-landing .relative.flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl,
  #theme-landing .flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl,
  #theme-landing .relative.flex.flex-col.p-6.bg-white.rounded-md.shadow-xl {
    background-color: rgba(30, 27, 23, .70) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,.01) 46%, rgba(255,255,255,0) 100%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%) !important;
    backdrop-filter: blur(24px) saturate(185%) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: 1.5rem !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                inset 0 1px 0 0 rgba(255,255,255,.14) !important;
    transition: border-color .55s var(--b-ease), transform .55s var(--b-ease),
                box-shadow .55s var(--b-ease), background-color .55s var(--b-ease) !important;
  }
  /* 悬停/点击响应：金边 + 辉光 + 轻微上浮（父容器无 overflow-hidden，不会裁） */
  #theme-landing .flex.items-center.text-lg.p-5.rounded.border:hover,
  #theme-landing .relative.flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl:hover,
  #theme-landing .flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl:hover,
  #theme-landing .flex.items-center.text-lg.p-5.rounded.border:active,
  #theme-landing .relative.flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl:active {
    border-color: rgba(236,188,86,.48) !important;
    background-color: rgba(38, 33, 27, .82) !important;
    transform: translateY(-3px);
    box-shadow: 0 36px 74px -34px rgba(0,0,0,.97),
                0 0 30px rgba(236,188,86,.26),
                inset 0 1px 0 0 rgba(255,255,255,.18) !important;
  }
  /* 选中态（tab 切换）—— 金色描边 + 常亮辉光 */
  #theme-landing .flex.items-center.text-lg.p-5.rounded.border.bg-white,
  #theme-landing .flex.items-center.text-lg.p-5.rounded.border.shadow-md {
    border-color: rgba(236,188,86,.55) !important;
    background-color: rgba(44, 37, 28, .86) !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                0 0 26px rgba(236,188,86,.28),
                inset 0 1px 0 0 rgba(255,255,255,.18) !important;
  }

  /* ---------- ③ 卡内小图标圆：改为品牌金渐变 ---------- */
  #theme-landing .w-8.h-8.bg-white.rounded-full.shadow {
    background: var(--b-grad) !important;
    border: 0 !important;
    box-shadow: 0 6px 18px -8px rgba(236,188,86,.8) !important;
    color: #17130c;
  }
  #theme-landing .w-8.h-8.bg-white.rounded-full.shadow svg { fill: #17130c !important; }

  /* ---------- ④ 卡片文字：暖白系，替代灰 ---------- */
  #theme-landing .text-gray-600,
  #theme-landing .text-gray-600.dark\:text-gray-400,
  #theme-landing .text-gray-600.text-center {
    color: rgba(242, 237, 228, .66) !important;
  }
  #theme-landing .font-bold.leading-snug.tracking-tight,
  #theme-landing .text-xl.font-bold.leading-snug.tracking-tight,
  #theme-landing h4.text-xl.font-bold { color: #f2ede4 !important; }

  /* ---------- ⑤ 正文里的高亮（<strong>/<em>/<span> 等）统一品牌金 ----------
     哥要求：text-xl text-gray-600 dark:text-gray-400 leading-relaxed 里的高亮用 #ecbc56 */
  #theme-landing p.text-xl.text-gray-600.leading-relaxed strong,
  #theme-landing p.text-xl.text-gray-600.leading-relaxed em,
  #theme-landing p.text-xl.text-gray-600.leading-relaxed b,
  #theme-landing p.text-xl.text-gray-600.leading-relaxed span,
  #theme-landing p.text-xl.text-gray-600 strong,
  #theme-landing p.text-xl.text-gray-600 em,
  #theme-landing p.text-xl.text-gray-600 b,
  #theme-landing p.text-xl.text-gray-600 span,
  #theme-landing .text-xl.text-gray-600.dark\:text-gray-400 strong,
  #theme-landing .text-xl.text-gray-600.dark\:text-gray-400 em,
  #theme-landing .text-xl.text-gray-600.dark\:text-gray-400 b,
  #theme-landing .text-xl.text-gray-600.dark\:text-gray-400 span {
    color: #ecbc56 !important;
    font-weight: 600;
  }

  /* ---------- ⑥ 「一对一固定对接专员」那类整条白底块 ---------- */
  #theme-landing .text-center.px-12.py-8,
  #theme-landing [class*="px-12"][class*="py-8"] {
    background-color: rgba(30, 27, 23, .72) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 46%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%) !important;
    backdrop-filter: blur(24px) saturate(185%) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: 1.5rem !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                inset 0 1px 0 0 rgba(255,255,255,.14) !important;
    color: rgba(242,237,228,.72) !important;
  }

  /* ---------- ⑦ Island 按钮：主 CTA 统一品牌金渐变 ---------- */
  #theme-landing .btn.bg-primary,
  #theme-landing a[class*="bg-primary"] {
    background: var(--b-grad) !important;
    color: #17130c !important;
    font-weight: 600;
    border: 0 !important;
    border-radius: 999px !important;
    box-shadow: 0 18px 40px -18px rgba(236,188,86,.55) !important;
    transition: transform .5s var(--b-ease), box-shadow .5s var(--b-ease) !important;
  }
  #theme-landing .btn.bg-primary:hover,
  #theme-landing a[class*="bg-primary"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 52px -20px rgba(236,188,86,.72),
                0 0 26px rgba(236,188,86,.42) !important;
  }
  #theme-landing .btn.bg-primary:active { transform: scale(.98); }

  /* ---------- ⑧ 评论区卡片 ---------- */
  #theme-landing .rounded-xl.bg-white,
  #theme-landing [class*="shadow-testimonial"],
  #theme-landing blockquote {
    background-color: rgba(30, 27, 23, .70) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 46%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%) !important;
    backdrop-filter: blur(24px) saturate(185%) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: 1.5rem !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                inset 0 1px 0 0 rgba(255,255,255,.14) !important;
  }
  #theme-landing .rounded-xl.bg-white:hover {
    border-color: rgba(236,188,86,.45) !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                0 0 28px rgba(236,188,86,.26),
                inset 0 1px 0 0 rgba(255,255,255,.18) !important;
  }

  
  /* ============================================================
     v5 · Studios 按钮品牌化 + 主站二级页面玻璃
     ============================================================ */

  /* ---------- ① Studios：卡片内的按钮改为品牌 Island 按钮 ----------
     ⚠️ 只改背景与形态，**类名一律不动** ——
        public/js/custom.js 用完整类名字符串选 Hero 按钮与 Newsletter 按钮，
        改类名会打断它们的功能。这里用 CSS 覆盖外观。
     排除 Hero 按钮（它在 .max-w-3xl 之外、且带 w-full mb-4）。 */
  #theme-landing .relative.flex.flex-col .btn.bg-blue-600,
  #theme-landing .flex.flex-col.items-center .btn.bg-blue-600,
  #theme-landing .relative.flex.flex-col.items-center .btn.bg-blue-600,
  #theme-landing button.btn.bg-blue-600 {
    background: var(--b-grad) !important;
    color: #17130c !important;
    font-weight: 600 !important;
    border: 0 !important;
    border-radius: 999px !important;
    box-shadow: 0 18px 40px -18px rgba(236,188,86,.55) !important;
    transition: transform .5s var(--b-ease), box-shadow .5s var(--b-ease) !important;
  }
  #theme-landing .relative.flex.flex-col .btn.bg-blue-600:hover,
  #theme-landing .flex.flex-col.items-center .btn.bg-blue-600:hover,
  #theme-landing .relative.flex.flex-col.items-center .btn.bg-blue-600:hover,
  #theme-landing button.btn.bg-blue-600:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 52px -20px rgba(236,188,86,.72),
                0 0 26px rgba(236,188,86,.42) !important;
  }
  #theme-landing .relative.flex.flex-col .btn.bg-blue-600:active,
  #theme-landing button.btn.bg-blue-600:active { transform: scale(.98); }

  /* ---------- ② 主站二级页面（案例归档 / 文章）玻璃卡 ----------
     文章列表与详情页的卡片同样是 bg-white 无 dark 变体，会渲染成白块。 */
  #theme-starter article,
  #theme-starter .notion-page-content { background-color: transparent !important; }

  #theme-starter .mb-8.overflow-hidden.rounded-\[5px\],
  #theme-starter .rounded-xl.bg-white.shadow-testimonial,
  #theme-starter .rounded-xl.bg-white.shadow-pricing {
    background-color: rgba(30, 27, 23, .70) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 46%) !important;
    -webkit-backdrop-filter: blur(24px) saturate(185%) !important;
    backdrop-filter: blur(24px) saturate(185%) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: 1.5rem !important;
    box-shadow: 0 30px 66px -34px rgba(0,0,0,.96),
                inset 0 1px 0 0 rgba(255,255,255,.14) !important;
    transition: border-color .55s var(--b-ease), transform .55s var(--b-ease),
                box-shadow .55s var(--b-ease) !important;
  }
  #theme-starter .mb-8.overflow-hidden.rounded-\[5px\]:hover,
  #theme-starter .rounded-xl.bg-white.shadow-testimonial:hover {
    border-color: rgba(236,188,86,.45) !important;
    transform: translateY(-3px);
    box-shadow: 0 36px 74px -34px rgba(0,0,0,.97),
                0 0 28px rgba(236,188,86,.26),
                inset 0 1px 0 0 rgba(255,255,255,.18) !important;
  }
  /* 文章正文容器：玻璃面板 */
  #theme-starter .notion-page,
  #theme-starter #article-wrapper,
  #theme-starter .mx-auto.max-w-\[\] { background-color: transparent !important; }
  #theme-starter .notion-page-content,
  #theme-starter .notion-text,
  #theme-starter .notion-h { color: rgba(242, 237, 228, .86) !important; }
  #theme-starter .notion-h { color: #f2ede4 !important; }
  /* 文章内链接金色 */
  #theme-starter .notion-page-content a { color: var(--b-gold) !important; }

  
  /* ============================================================
     v6 · 修正选中逻辑 + 重做评论卡
     ============================================================ */

  /* ---------- ① 「数字资产与品牌策略解决方案」三块：选中/未选中逻辑对调 ----------
     组件里的判断是：
       tab !== N ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'   ← 未选中
                 : 'bg-gray-200 border-transparent'                       ← 选中
     我上一版写反了（给未选中加了常亮金边）。这里按真实逻辑重写。 */

  /* 未选中：玻璃底 + 中性描边；悬停才出金边 */
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-white {
    background-color: rgba(30, 27, 23, .60) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,0) 46%) !important;
    -webkit-backdrop-filter: blur(22px) saturate(180%) !important;
    backdrop-filter: blur(22px) saturate(180%) !important;
    border: 1px solid rgba(255,255,255,.10) !important;
    border-radius: 1.25rem !important;
    box-shadow: 0 22px 50px -30px rgba(0,0,0,.9),
                inset 0 1px 0 0 rgba(255,255,255,.08) !important;
    transition: border-color .5s var(--b-ease), background-color .5s var(--b-ease),
                box-shadow .5s var(--b-ease), transform .5s var(--b-ease) !important;
  }
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-white:hover {
    border-color: rgba(236,188,86,.45) !important;
    background-color: rgba(38, 33, 27, .74) !important;
    box-shadow: 0 26px 58px -30px rgba(0,0,0,.94),
                0 0 24px rgba(236,188,86,.22),
                inset 0 1px 0 0 rgba(255,255,255,.12) !important;
  }

  /* ★ 选中：金色描边 + 常亮辉光 + 更亮的底（这才是哥要的"选中才有辉光"） */
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-gray-200,
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.border-transparent {
    background-color: rgba(48, 40, 29, .88) !important;
    background-image: linear-gradient(140deg, rgba(236,188,86,.14) 0%, rgba(236,188,86,.02) 52%, rgba(255,255,255,0) 100%) !important;
    -webkit-backdrop-filter: blur(22px) saturate(185%) !important;
    backdrop-filter: blur(22px) saturate(185%) !important;
    border: 1px solid rgba(236,188,86,.62) !important;
    border-radius: 1.25rem !important;
    box-shadow: 0 26px 58px -30px rgba(0,0,0,.94),
                0 0 30px rgba(236,188,86,.30),
                inset 0 1px 0 0 rgba(236,188,86,.22) !important;
  }
  /* 选中态里的图标圆：金渐变实心；未选中：低调玻璃 */
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-white .w-8.h-8.bg-white.rounded-full {
    background: rgba(255,255,255,.08) !important;
    box-shadow: inset 0 1px 0 0 rgba(255,255,255,.14) !important;
    color: rgba(242,237,228,.72) !important;
  }
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-gray-200 .w-8.h-8.bg-white.rounded-full,
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.border-transparent .w-8.h-8.bg-white.rounded-full {
    background: var(--b-grad) !important;
    box-shadow: 0 8px 22px -10px rgba(236,188,86,.9) !important;
    color: #17130c !important;
  }
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border .w-8.h-8 svg { fill: currentColor !important; }

  /* ---------- ② 评论卡：内层恢复正常，外层做玻璃 ----------
     组件结构：
       <div class="relative flex items-start border-2 border-gray-200 rounded bg-white">  ← 外层卡
         <div class="text-center px-12 py-8 pt-20 mx-4 md:mx-0">                          ← 内层内容
     上一版我错把「内层」做成了玻璃，于是出现那个难看的深色内嵌胶囊。
     现在：内层透明，外层玻璃。 */

  /* 撤销我上一版对内层的错误处理 */
  #theme-landing .text-center.px-12.py-8,
  #theme-landing [class*="px-12"][class*="py-8"] {
    background-color: transparent !important;
    background-image: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }

  /* 外层评论卡：液态玻璃 */
  #theme-landing .relative.flex.items-start.border-2.border-gray-200,
  #theme-landing .relative.flex.items-start.rounded.bg-white {
    background-color: rgba(30, 27, 23, .66) !important;
    background-image: linear-gradient(140deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,.01) 46%, rgba(255,255,255,0) 100%) !important;
    -webkit-backdrop-filter: blur(26px) saturate(185%) !important;
    backdrop-filter: blur(26px) saturate(185%) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: 1.75rem !important;
    box-shadow: 0 34px 74px -36px rgba(0,0,0,.96),
                inset 0 1px 0 0 rgba(255,255,255,.14) !important;
    transition: border-color .55s var(--b-ease), box-shadow .55s var(--b-ease) !important;
  }
  #theme-landing .relative.flex.items-start.border-2.border-gray-200:hover {
    border-color: rgba(236,188,86,.40) !important;
    box-shadow: 0 38px 82px -36px rgba(0,0,0,.97),
                0 0 30px rgba(236,188,86,.20),
                inset 0 1px 0 0 rgba(255,255,255,.18) !important;
  }
  /* 引文与署名 */
  #theme-landing blockquote {
    background: none !important; border: 0 !important; box-shadow: none !important;
    -webkit-backdrop-filter: none !important; backdrop-filter: none !important;
    color: #f2ede4 !important; font-weight: 500 !important; line-height: 1.7 !important;
  }
  #theme-landing cite { color: #ecbc56 !important; }
  #theme-landing .text-center.px-12 .text-gray-600 { color: rgba(242,237,228,.55) !important; }
  /* 署名后的社交链接：金色 */
  #theme-landing .text-center.px-12 a.text-blue-600,
  #theme-landing a.text-blue-600.hover\:underline {
    color: #ecbc56 !important;
    transition: text-shadow .4s var(--b-ease);
  }
  #theme-landing a.text-blue-600.hover\:underline:hover {
    text-shadow: 0 0 14px rgba(236,188,86,.8);
  }

  
  
  /* ============================================================
     v7 · 背景连续性 + 让玻璃真正"读得出来"
     ------------------------------------------------------------
     两个问题同源：
       ① 背景出现硬接缝 —— 某些区块/其内部绝对定位的背景层还在，
          与全站的 fixed 背景光对不上；
       ② 玻璃读不出来 —— backdrop-filter 在纯黑上没有东西可模糊，
          卡片看起来就是实心暗盒。
     解决：把光铺满（连续），并提高卡片的明度对比与内高光，
          让玻璃有"面"可读。
     ============================================================ */

  /* ---------- ① 背景连续：区块及其所有内部背景层一律透明 ---------- */
  #theme-landing,
  #theme-landing > div,
  #theme-landing > section,
  #theme-landing section,
  #theme-landing section > div,
  #theme-landing #content-wrapper,
  #theme-landing #content-wrapper > * {
    background-color: transparent !important;
  }
  /* 但保留根节点的品牌底与光 */
  #theme-landing {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .18) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .15) 0%, transparent 60%) !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
  /* 装饰性 SVG 插画（白/浅灰圆）在深色站上是脏的，压暗掉 */
  #theme-landing section > div[aria-hidden="true"] svg,
  #theme-landing section > div.pointer-events-none svg {
    opacity: .14;
    filter: grayscale(1);
  }

  /* ---------- ② 玻璃要读得出来：提高明度与描边对比 ---------- */
  #theme-landing .relative.flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl,
  #theme-landing .flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl,
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-white,
  #theme-landing .relative.flex.items-start.border-2.border-gray-200.rounded,
  #theme-landing .rounded-xl.bg-white {
    background-color: rgba(255, 255, 255, .055) !important;
    background-image: linear-gradient(150deg,
      rgba(255, 255, 255, .14) 0%,
      rgba(255, 255, 255, .05) 34%,
      rgba(255, 255, 255, .015) 62%,
      rgba(255, 255, 255, 0) 100%) !important;
    -webkit-backdrop-filter: blur(26px) saturate(190%) !important;
    backdrop-filter: blur(26px) saturate(190%) !important;
    border: 1px solid rgba(255, 255, 255, .17) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .22),
                inset 0 -1px 0 0 rgba(0, 0, 0, .22) !important;
  }
  /* 悬停：金边 + 辉光 */
  #theme-landing .relative.flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl:hover,
  #theme-landing .flex.flex-col.items-center.p-6.bg-white.rounded-md.shadow-xl:hover,
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-white:hover {
    background-color: rgba(255, 255, 255, .085) !important;
    border-color: rgba(236, 188, 86, .48) !important;
    transform: translateY(-3px);
    box-shadow: 0 36px 74px -34px rgba(0, 0, 0, .97),
                0 0 30px rgba(236, 188, 86, .26),
                inset 0 1px 0 0 rgba(255, 255, 255, .28) !important;
  }
  /* 选中态保持金边常亮，但底色仍用亮玻璃 */
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.bg-gray-200,
  #theme-landing a.flex.items-center.text-lg.p-5.rounded.border.border-transparent {
    background-color: rgba(236, 188, 86, .10) !important;
    background-image: linear-gradient(150deg, rgba(236,188,86,.18) 0%, rgba(255,255,255,.03) 58%, rgba(255,255,255,0) 100%) !important;
    border: 1px solid rgba(236, 188, 86, .62) !important;
    box-shadow: 0 26px 58px -30px rgba(0, 0, 0, .94),
                0 0 32px rgba(236, 188, 86, .30),
                inset 0 1px 0 0 rgba(236, 188, 86, .26) !important;
  }

  /* ---------- ③ 卡片内文字对比度 ---------- */
  #theme-landing .text-gray-600,
  #theme-landing .text-gray-600.dark\:text-gray-400,
  #theme-landing .text-gray-600.text-center,
  #theme-landing .text-gray-600.text-center:not(.eyebrow) {
    color: rgba(242, 237, 228, .68) !important;
  }
  #theme-landing h4.text-xl.font-bold,
  #theme-landing .font-bold.leading-snug.tracking-tight,
  #theme-landing .text-xl.font-bold.leading-snug.tracking-tight { color: #f2ede4 !important; }
  /* 卡片里的点列表：暖白，前面加金色圆点 */
  #theme-landing .text-gray-600 + ul li,
  #theme-landing ul li { color: rgba(242, 237, 228, .62) !important; }

  /* ---------- ④ 区块之间不要硬边：给每段加柔和过渡 ---------- */
  #theme-landing section + section::before {
    content: ""; position: absolute; left: 0; right: 0; top: 0; height: 140px;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(16,14,12,.55) 0%, rgba(16,14,12,0) 100%);
  }
  #theme-landing section { position: relative; }

  
  /* ============================================================
     v8 · Studios 按钮品牌化（严格避开 custom.js 依赖的两个按钮）
     ------------------------------------------------------------
     custom.js 依赖：
       · 第180行 Hero 主按钮  .btn.text-white.bg-blue-600.hover\:bg-blue-700.w-full.mb-4…
         → 哥要求保持原样，且它是点击滚动触发器，绝不能动
       · 第205行 Pricing 按钮 .font-bold.bg-blue-600…rounded-md.px-10.py-2…w-full
         → 是"滚动到底"触发器，同样不能改类名，这里只覆盖外观
     ============================================================ */

  /* ---------- Pricing 三张卡的按钮：品牌 Island 形态 ---------- */
  #theme-landing button.font-bold.bg-blue-600.text-white.rounded-md {
    background: var(--b-grad) !important;
    color: #17130c !important;
    font-weight: 700 !important;
    border: 0 !important;
    border-radius: 999px !important;
    padding: 12px 30px !important;
    box-shadow: 0 18px 40px -18px rgba(236, 188, 86, .55) !important;
    transition: transform .5s var(--b-ease), box-shadow .5s var(--b-ease) !important;
  }
  #theme-landing button.font-bold.bg-blue-600.text-white.rounded-md:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 52px -20px rgba(236, 188, 86, .72),
                0 0 28px rgba(236, 188, 86, .45) !important;
  }
  #theme-landing button.font-bold.bg-blue-600.text-white.rounded-md:active {
    transform: scale(.98);
  }

  /* ---------- Newsletter 提交按钮 ---------- */
  #theme-landing button.btn.bg-blue-600 {
    background: var(--b-grad) !important;
    color: #17130c !important;
    font-weight: 600 !important;
    border: 0 !important;
    border-radius: 999px !important;
    box-shadow: 0 18px 40px -18px rgba(236, 188, 86, .55) !important;
    transition: transform .5s var(--b-ease), box-shadow .5s var(--b-ease) !important;
  }
  #theme-landing button.btn.bg-blue-600:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 52px -20px rgba(236, 188, 86, .72),
                0 0 28px rgba(236, 188, 86, .45) !important;
  }

  /* ---------- 显式保护 Hero 主按钮：保持原样，不做任何改动 ----------
     （它由 custom.js 第180行绑定点击滚动，且哥要求还原为动手前状态） */
  #theme-landing .btn.text-white.bg-blue-600.w-full.mb-4 {
    background-color: #2563eb !important;
    background-image: none !important;
    color: #fff !important;
    border-radius: .375rem !important;
    box-shadow: none !important;
    transform: none !important;
  }

  
  /* ============================================================
     v9 · 修正 v7 引入的两个错误
     ============================================================ */

  /* ---------- ① 撤销对装饰元素的 grayscale 误伤 ----------
     v7 我写了：
       section > div[aria-hidden] svg, section > div.pointer-events-none svg {
         opacity:.14; filter:grayscale(1) }
     这条把**金粉渐变的装饰圆**也一起灰掉了（哥截图里那个灰圆）。
     装饰圆是品牌资产，必须保留原色。改为只压暗、绝不改色。 */
  #theme-landing section > div[aria-hidden="true"] svg,
  #theme-landing section > div.pointer-events-none svg {
    opacity: 1 !important;
    filter: none !important;
  }
  /* 只对「白/浅灰的插画线稿」压暗 —— 用 data 属性或特定 gradient id 精确命中，
     这里改用更保守的做法：把带 illustration- 渐变的那类 svg 保持原样。 */
  #theme-landing svg [fill^="url(#illustration"] { opacity: .10; }

  /* ---------- ② 正文高亮统一品牌金（覆盖所有内联标记）----------
     正文由 dangerouslySetInnerHTML 注入，高亮可能是 span/strong/em/b，
     并带 text-primary / text-blue-* 之类的类名。
     这里对 landing 正文区内的一切内联标记统一上金色。 */
  #theme-landing p span,
  #theme-landing p strong,
  #theme-landing p em,
  #theme-landing p b,
  #theme-landing p i,
  #theme-landing [class*="leading-relaxed"] span,
  #theme-landing [class*="leading-relaxed"] strong,
  #theme-landing [class*="leading-relaxed"] em,
  #theme-landing [class*="leading-relaxed"] b,
  #theme-landing [class*="leading-relaxed"] i,
  #theme-landing .h2 + p span,
  #theme-landing .h2 + p strong {
    color: #ecbc56 !important;
    font-weight: 600;
  }
  /* 蓝色的内联高亮也一并压成金色 */
  #theme-landing p span[class*="text-blue"],
  #theme-landing p span[class*="text-primary"],
  #theme-landing p strong[class*="text-blue"],
  #theme-landing p strong[class*="text-primary"],
  #theme-landing [class*="leading-relaxed"] span[class*="text-blue"],
  #theme-landing [class*="leading-relaxed"] span[class*="text-primary"] {
    color: #ecbc56 !important;
  }
  /* 但页脚/导航里的链接不动 */
  #theme-landing footer p span,
  #theme-landing header p span { color: inherit !important; }

  
  /* ============================================================
     v11 · 三处修正
     ============================================================ */

  /* ---------- ① 装饰渐变圆：撤销压暗 ----------
     custom.js 用 svg g[fill*='illustration'] 选中父 g 元素，
     再给里面的两个 circle 设成品牌渐变 fill=url(#left-gradient-N)。
     我 v9 写的那条 svg [fill^='url(#illustration'] { opacity:.10 }
     命中的正是这个父 g，于是把整组圆压暗了。这里彻底撤销。 */
  #theme-landing svg [fill^='url(#illustration'],
  #theme-landing g[fill*='illustration'] {
    opacity: 1 !important;
    filter: none !important;
    visibility: visible !important;
  }
  #theme-landing svg circle { opacity: 1 !important; filter: none !important; }
  #theme-landing section > div[aria-hidden='true'],
  #theme-landing section > div.pointer-events-none {
    opacity: 1 !important;
    filter: none !important;
  }

  /* ---------- ② 默认即主题色，触摸只出辉光 ----------
     不要「本来白色、触摸才变金」。导航与字标默认就用品牌金，
     悬停只加辉光、不改色。 */
  #theme-landing .ud-header #navbarCollapse li > a,
  #theme-landing .ud-header #navbarCollapse li > button,
  #theme-landing header.fixed .btn-sm {
    color: #ecbc56 !important;
    transition: text-shadow .45s var(--b-ease), background .45s var(--b-ease) !important;
  }
  #theme-landing .ud-header #navbarCollapse li > a:hover,
  #theme-landing .ud-header #navbarCollapse li > button:hover,
  #theme-landing header.fixed .btn-sm:hover {
    color: #ecbc56 !important;
    text-shadow: 0 0 14px rgba(236, 188, 86, .85);
    background: rgba(236, 188, 86, .08) !important;
  }
  #theme-landing .navbar-logo .header-logo-text,
  #theme-landing .navbar-logo .logo { color: #ecbc56 !important; }
  #theme-landing .navbar-logo:hover .header-logo-text,
  #theme-landing .navbar-logo:hover .logo {
    color: #ecbc56 !important;
    text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }
  #theme-landing .navbar-logo:hover .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85)) !important;
  }
  #theme-landing .submenu a { color: #ecbc56 !important; }
  #theme-landing .submenu a:hover {
    color: #ecbc56 !important;
    text-shadow: 0 0 12px rgba(236, 188, 86, .8);
    background: rgba(236, 188, 86, .10) !important;
  }
  
  /* 页脚「旗下其他业务」靠右 —— 用 data 属性而非改类名，
     因为 public/js/custom.js 用 .sm\:col-span-6.md\:col-span-3.lg\:col-span-2:last-child
     选它做多语言替换，改类名会让翻译失效。 */
  @media (min-width: 960px) {
    #theme-landing footer [data-bc-align='right'] { text-align: right; }
  }
  
  /* ---------- 联系面板（三站共用，由 BrandContact 渲染）---------- */
/* 触发按钮：用字面量渐变，**不依赖任何 CSS 变量**（按钮在 #bc-root 之外）。 */
.bc-fab{display:inline-flex;align-items:center;gap:12px;
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

  `}</style>
}

export { Style }
