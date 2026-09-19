/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

  #theme-starter .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.8);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  :is(.dark #theme-starter .sticky){
    background-color: rgb(17 25 40 / 0.8);
  }
  
  #theme-starter .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  #theme-starter .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  #theme-starter .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  }
  
  :is(.dark #theme-starter .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  #theme-starter .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-starter .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }

  #theme-starter .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-starter .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-starter .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }

  :is(.dark #theme-starter .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  #theme-starter .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  #theme-starter .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-starter .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  :is(.dark #theme-starter .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-starter .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }
  
  #theme-starter .sticky .signUpBtn{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-starter .sticky .signUpBtn:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(27 68 200 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-starter .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-starter .sticky #themeSwitcher ~ span){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  .navbarTogglerActive > span:nth-child(1){
    top: 7px;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .navbarTogglerActive > span:nth-child(2){
    opacity: 0;
  }
  
  .navbarTogglerActive > span:nth-child(3){
    top: -8px;
    --tw-rotate: 135deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .text-body-color{
    --tw-text-opacity: 1;
    color: rgb(99 115 129 / var(--tw-text-opacity));
  }
  
  .text-body-secondary{
    --tw-text-opacity: 1;
    color: rgb(136 153 168 / var(--tw-text-opacity));
  }

  
.common-carousel .swiper-button-next:after,
.common-carousel .swiper-button-prev:after{
  display: none;
}

.common-carousel .swiper-button-next,
.common-carousel .swiper-button-prev{
  position: static !important;
  margin: 0px;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(17 25 40 / var(--tw-text-opacity));
  --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
  --tw-shadow-colored: 0px 8px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.common-carousel .swiper-button-next:hover,
.common-carousel .swiper-button-prev:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(55 88 249 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

:is(.dark .common-carousel .swiper-button-next),:is(.dark 
.common-carousel .swiper-button-prev){
  --tw-bg-opacity: 1;
  background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.common-carousel .swiper-button-next svg,
.common-carousel .swiper-button-prev svg{
  height: auto;
  width: auto;
}

  /* 正文（Notion 文章 / 仪表盘页）：限制最大宽度，兼顾表格/图片与阅读行宽 */
  #theme-starter #article-wrapper {
    max-width: 64rem;
  }

  /* 全站 container：xl 及以上略窄于满屏，接近主题默认版心（1140px） */
  @media (min-width: 1140px) {
    #theme-starter .container {
      max-width: 72rem;
    }
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

  

  
  
  /* ============================================================
     Seaportcy 品牌视觉层 v3
     ------------------------------------------------------------
     全部限定在 #theme-starter 内；**只用 CSS 定位既有选择器，绝不改 className**
     —— public/js/custom.js 依赖大量完整类名字符串，改类名会打断功能。
     ============================================================ */
  #theme-starter {
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
  #theme-starter {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .15) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .13) 0%, transparent 60%);
    background-attachment: fixed; background-repeat: no-repeat; background-size: cover;
  }
  /* 区块底透明让光透出 —— 含二级页面 */
  #theme-starter #main-wrapper, #theme-starter #content-wrapper,
  #theme-starter section, #theme-starter main, #theme-starter article,
  #theme-starter #home, #theme-starter #hero,
  #theme-starter .wrapper { background-color: transparent !important; }

  /* ---------- ② 页脚：去掉原来的深蓝色底 ---------- */
  #theme-starter .bg-\[\#090E34\] { background-color: transparent !important; }

  /* ---------- ③ 液态玻璃：卡片统一处理 ----------
     用属性选择器定位既有的 rounded-xl / shadow-testimonial 卡片，
     不改任何 className。 */
  #theme-starter [class*="rounded-xl"][class*="bg-white"],
  #theme-starter [class*="rounded-xl"][class*="bg-dark"],
  #theme-starter [class*="shadow-testimonial"],
  #theme-starter [class*="rounded-\[5px\]"][class*="bg-white"],
  #theme-starter [class*="rounded-lg"][class*="bg-white"] {
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
  #theme-starter [class*="rounded-xl"][class*="bg-white"]:hover,
  #theme-starter [class*="shadow-testimonial"]:hover {
    border-color: rgba(236, 188, 86, .34) !important;
    transform: translateY(-4px);
    box-shadow: 0 34px 74px -34px rgba(0, 0, 0, .96),
                0 0 24px rgba(236, 188, 86, .18),
                inset 0 1px 0 0 rgba(255, 255, 255, .12) !important;
  }
  /* 卡片里的次级白底块也一起玻璃化（例如内层小节） */
  #theme-starter [class*="rounded-lg"][class*="bg-gray-1"],
  #theme-starter [class*="rounded-md"][class*="bg-gray-1"] {
    background-color: rgba(255, 255, 255, .045) !important;
    border: 1px solid var(--b-edge) !important;
  }

  /* ---------- ④ 二级菜单（桌面 + 移动端）---------- */
  #theme-starter #navbarCollapse .submenu,
  #theme-starter .submenu {
    margin-top: 12px; padding: 10px; border-radius: 20px;
    background: rgba(16, 14, 12, .72) !important;
    -webkit-backdrop-filter: blur(28px) saturate(185%);
    backdrop-filter: blur(28px) saturate(185%);
    border: 1px solid var(--b-edge) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    overflow: hidden;
  }
  #theme-starter .submenu a, #theme-starter .submenu li > a {
    display: block; border-radius: 12px;
    padding: 11px 14px !important;
    color: var(--b-tx2) !important; white-space: nowrap;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-starter .submenu a:hover, #theme-starter .submenu a:active {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ---------- ⑤ 导航（starter/proxio 用 .ud-header）---------- */
  #theme-starter .ud-header {
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
  #theme-starter .ud-header.sticky {
    top: 14px !important;
    background-color: rgba(16, 14, 12, .62) !important;
    --tw-bg-opacity: 0 !important;
    -webkit-backdrop-filter: blur(30px) saturate(190%) !important;
    backdrop-filter: blur(30px) saturate(190%) !important;
    border-color: rgba(255, 255, 255, .12) !important;
    box-shadow: 0 26px 64px -28px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .07) !important;
  }
  #theme-starter .ud-header .container { width: auto !important; max-width: none !important; }

  /* ---------- ⑥ 徽标与字标辉光 ---------- */
  #theme-starter .navbar-logo .header-logo { transition: filter .45s var(--b-ease), transform .45s var(--b-ease); }
  #theme-starter .navbar-logo:hover .header-logo, #theme-starter .navbar-logo:active .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85)); transform: scale(1.04);
  }
  #theme-starter .navbar-logo .header-logo-text { transition: color .45s var(--b-ease), text-shadow .45s var(--b-ease); }
  #theme-starter .navbar-logo:hover .header-logo-text, #theme-starter .navbar-logo:active .header-logo-text {
    color: var(--b-gold) !important; text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }

  /* ---------- ⑦ 导航项 ---------- */
  #theme-starter .ud-header #navbarCollapse li > a,
  #theme-starter .ud-header #navbarCollapse li > button {
    color: var(--b-tx2) !important; border-radius: 999px; padding: 9px 14px;
    transition: color .4s var(--b-ease), background .4s var(--b-ease);
  }
  #theme-starter .ud-header #navbarCollapse li > a:hover,
  #theme-starter .ud-header #navbarCollapse li > button:hover {
    color: var(--b-gold) !important; background: rgba(255, 255, 255, .055);
  }

  /* ---------- ⑧ 金底深字兜底：改用品牌金 ---------- */
  #theme-starter .bg-primary { color: #ecbc56; }
  #theme-starter .bg-primary.text-white,
  #theme-starter .bg-primary .text-white,
  #theme-starter .bg-primary h1, #theme-starter .bg-primary h2, #theme-starter .bg-primary h3,
  #theme-starter .bg-primary p, #theme-starter .bg-primary span, #theme-starter .bg-primary a { color: #ecbc56; }
  #theme-starter .bg-primary svg { fill: currentColor; }

  /* ---------- ⑨ 眉标 ---------- */
  #theme-starter .eb {
    display: inline-flex; align-items: center; gap: 9px;
    font: 500 10px/1 Poppins, "Noto Sans SC", sans-serif;
    text-transform: uppercase; letter-spacing: .24em; color: #e6cf9b;
    background: rgba(236, 188, 86, .10); border: 1px solid rgba(236, 188, 86, .24);
    padding: 8px 15px; border-radius: 999px; margin-bottom: 22px;
  }
  #theme-starter .eb::before {
    content: ""; width: 5px; height: 5px; border-radius: 50%;
    background: var(--b-grad-r); box-shadow: 0 0 10px rgba(236, 188, 86, .75);
    transition: box-shadow .4s var(--b-ease), transform .4s var(--b-ease);
  }
  #theme-starter .eb:hover::before { transform: scale(1.35); box-shadow: 0 0 16px rgba(236, 188, 86, 1); }

  /* ---------- ⑩ 滚动进入动画 ---------- */
  #theme-starter .rv2 {
    opacity: 0; transform: translateY(48px);
    transition: opacity .9s var(--b-ease), transform .9s var(--b-ease);
    will-change: transform;
  }
  #theme-starter .rv2.rv2-on { opacity: 1; transform: none; }

  /* ---------- ⑪ 标题 ---------- */
  #theme-starter h1, #theme-starter h2 { letter-spacing: -.028em; }
  #theme-starter h1 { line-height: 1.06; }
  #theme-starter h2 { line-height: 1.12; }

  /* ============================================================
     starter 专属
     ============================================================ */
  /* 页脚区块：原深蓝底已由品牌层去掉，这里补一层极淡的顶部分隔与暖光 */
  #theme-starter footer {
    position: relative;
    border-top: 1px solid var(--b-edge);
    background-image: radial-gradient(120% 100% at 50% 0%, rgba(236, 188, 86, .07) 0%, transparent 62%);
  }
  /* 移动端菜单：玻璃面板 */
  #theme-starter [class*="fixed"][class*="top-0"][class*="w-full"][class*="bg-white"],
  #theme-starter #navbarCollapse {
    background-color: rgba(16, 14, 12, .90) !important;
    -webkit-backdrop-filter: blur(30px) saturate(185%);
    backdrop-filter: blur(30px) saturate(185%);
  }

  
  
  
  /* ============================================================
     v4 · 修正
     ============================================================ */

  /* ① 去掉导航里多余的框
     原因：v3 里那条用子串匹配的玻璃规则（[class*="rounded-xl"][class*="bg-white"]
     等）会命中导航内部的元素（语言按钮/搜索框之类），在其上画出了第二个圆角框。
     这里明确排除导航内部，只保留 v3.2 的精确复合类规则。 */
  #theme-starter .ud-header [class*="rounded-xl"],
  #theme-starter .ud-header [class*="rounded-lg"],
  #theme-starter .ud-header [class*="shadow-testimonial"],
  #theme-starter .ud-header [class*="shadow-pricing"],
  #theme-starter .ud-header [class*="rounded-\\[5px\\]"],
  #theme-starter .ud-header [class*="rounded-\\[14px\\]"] {
    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 导航内部只有胶囊项需要底色，其余一律透明 */
  #theme-starter .ud-header .container,
  #theme-starter .ud-header .container > div,
  #theme-starter .ud-header .container > div > div { background-color: transparent !important; }

  /* ② 评论卡上浮导致被父容器裁剪 —— 去掉位移，只用描边与辉光表达 */
  #theme-starter .rounded-xl.bg-white.shadow-testimonial:hover,
  #theme-starter [class*="shadow-testimonial"]:hover {
    transform: none !important;
    border-color: rgba(236, 188, 86, .45) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                0 0 28px rgba(236, 188, 86, .26),
                inset 0 1px 0 0 rgba(255, 255, 255, .20) !important;
  }

  /* ③ 移动端二级菜单：与桌面同一套玻璃语言 */
  #theme-starter [class*="fixed"][class*="top-0"] [class*="rounded"],
  #theme-starter [class*="md:hidden"] [class*="absolute"],
  #theme-starter .submenu,
  
  #theme-starter [class*="fixed top-0"] ul,
  #theme-starter [class*="fixed top-0"] .submenu,
  #theme-starter body > div[class*="fixed"] > div[class*="bg-white"],
  #theme-starter [class*="top-full"][class*="w-full"] {
    background-color: rgba(16, 14, 12, .92) !important;
    -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
    backdrop-filter: blur(30px) saturate(185%) !important;
    border: 1px solid rgba(255, 255, 255, .10) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
  }
  #theme-starter [class*="top-full"] a,
  #theme-starter [class*="top-full"] button {
    border-radius: 12px !important;
    color: rgba(242, 237, 228, .72) !important;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-starter [class*="top-full"] a:hover,
  #theme-starter [class*="top-full"] button:hover {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ============================================================
     starter v4
     ============================================================ */
  /* 评论区父容器原本 overflow-hidden 会裁掉上浮，这里给它留出空间 */
  #theme-starter .overflow-hidden > .rounded-xl.bg-white.shadow-testimonial { margin: 4px 0; }

  
  /* ============================================================
     v4.1 · 关键修正：导航里多余的框
     ------------------------------------------------------------
     v4 里我写了 #theme-starter #navbarCollapse { 玻璃底 }，但桌面端的
     #navbarCollapse 正是包裹菜单项的那个容器 —— 于是它被画成了
     第二个胶囊，就是哥看到的"多余的框"。
     它本来就只该在移动端作为下拉面板时才有底色。
     改为仅在移动端断点内生效。
     ============================================================ */
  #theme-starter .ud-header #navbarCollapse,
  #theme-starter .ud-header #navbarCollapse > ul,
  #theme-starter .ud-header #navbarCollapse > div {
    background-color: transparent !important;
    background-image: none !important;
    border: 0 !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 桌面端：菜单项自身保持胶囊高亮即可 */
  #theme-starter .ud-header #navbarCollapse li > a,
  #theme-starter .ud-header #navbarCollapse li > button {
    background-color: transparent;
  }

  /* 移动端才把它做成玻璃面板（960px 是本站 lg 断点） */
  @media (max-width: 959px) {
    #theme-starter .ud-header #navbarCollapse {
      background-color: rgba(16, 14, 12, .92) !important;
      -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
      backdrop-filter: blur(30px) saturate(185%) !important;
      border: 1px solid rgba(255, 255, 255, .10) !important;
      border-radius: 20px !important;
      box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                  inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    }
    #theme-starter .ud-header #navbarCollapse li > a,
    #theme-starter .ud-header #navbarCollapse li > button,
    #theme-starter .ud-header #navbarCollapse .submenu a {
      border-radius: 12px !important;
    }
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
/* 已移除：覆盖 Notion 内容文字的规则 */

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
/* 已移除：覆盖 Notion 内容文字的规则 */

  /* 文章内链接金色 */


  
  
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
