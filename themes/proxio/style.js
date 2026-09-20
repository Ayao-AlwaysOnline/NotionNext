/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
    return <style jsx global>{`

    // 底色
    body{
        background-color: white;
    }
    .dark body{
        background-color: black;
    }

    #theme-proxio .bg-primary {
        --tw-bg-opacity: 1;
        background-color: #121212;
    }
    
    @media (min-width: 540px) {
        #theme-proxio .container {
            max-width: 540px;
        }
    }
    @media (min-width: 720px) {
        #theme-proxio .container {
            max-width: 720px;
        }
    }
    
    @media (min-width: 960px) {
        #theme-proxio .container {
            max-width: 960px;
        }
    }
    @media (min-width: 1140px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        
    @media (min-width: 1536px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        

    #theme-proxio .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 16px;
        padding-left: 16px;
    }

  #theme-proxio .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.8);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  

  .dark\:bg-dark:is(.dark *) {
    background-color: black!important;
 }

  :is(.dark #theme-proxio .sticky){
    background-color: rgb(17 25 40 / 0.8);
  }
  
  #theme-proxio .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  #theme-proxio .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  #theme-proxio .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }

  #theme-proxio .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }

  :is(.dark #theme-proxio .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  #theme-proxio .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  #theme-proxio .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(27 68 200 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #themeSwitcher ~ span){
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
     全部限定在 #theme-proxio 内；**只用 CSS 定位既有选择器，绝不改 className**
     —— public/js/custom.js 依赖大量完整类名字符串，改类名会打断功能。
     ============================================================ */
  #theme-proxio {
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
  #theme-proxio {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .15) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .13) 0%, transparent 60%);
    background-attachment: fixed; background-repeat: no-repeat; background-size: cover;
  }
  /* 区块底透明让光透出 —— 含二级页面 */
  #theme-proxio #main-wrapper, #theme-proxio #content-wrapper,
  #theme-proxio section, #theme-proxio main, #theme-proxio article,
  #theme-proxio #home, #theme-proxio #hero,
  #theme-proxio .wrapper { background-color: transparent !important; }

  /* ---------- ② 页脚：去掉原来的深蓝色底 ---------- */
  #theme-proxio .bg-\[\#090E34\] { background-color: transparent !important; }

  /* ---------- ③ 液态玻璃：卡片统一处理 ----------
     用属性选择器定位既有的 rounded-xl / shadow-testimonial 卡片，
     不改任何 className。 */
  #theme-proxio [class*="rounded-xl"][class*="bg-white"],
  #theme-proxio [class*="rounded-xl"][class*="bg-dark"],
  #theme-proxio [class*="shadow-testimonial"],
  #theme-proxio [class*="rounded-\[5px\]"][class*="bg-white"],
  #theme-proxio [class*="rounded-lg"][class*="bg-white"] {
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
  #theme-proxio [class*="rounded-xl"][class*="bg-white"]:hover,
  #theme-proxio [class*="shadow-testimonial"]:hover {
    border-color: rgba(236, 188, 86, .34) !important;
    transform: translateY(-4px);
    box-shadow: 0 34px 74px -34px rgba(0, 0, 0, .96),
                0 0 24px rgba(236, 188, 86, .18),
                inset 0 1px 0 0 rgba(255, 255, 255, .12) !important;
  }
  /* 卡片里的次级白底块也一起玻璃化（例如内层小节） */
  #theme-proxio [class*="rounded-lg"][class*="bg-gray-1"],
  #theme-proxio [class*="rounded-md"][class*="bg-gray-1"] {
    background-color: rgba(255, 255, 255, .045) !important;
    border: 1px solid var(--b-edge) !important;
  }

  /* ---------- ④ 二级菜单（桌面 + 移动端）---------- */
  #theme-proxio #navbarCollapse .submenu,
  #theme-proxio .submenu {
    margin-top: 12px; padding: 10px; border-radius: 20px;
    background: rgba(16, 14, 12, .72) !important;
    -webkit-backdrop-filter: blur(28px) saturate(185%);
    backdrop-filter: blur(28px) saturate(185%);
    border: 1px solid var(--b-edge) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    overflow: hidden;
  }
  #theme-proxio .submenu a, #theme-proxio .submenu li > a {
    display: block; border-radius: 12px;
    padding: 11px 14px !important;
    color: var(--b-tx2) !important; white-space: nowrap;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-proxio .submenu a:hover, #theme-proxio .submenu a:active {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ---------- ⑤ 导航（starter/proxio 用 .ud-header）---------- */
  #theme-proxio .ud-header {
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
  #theme-proxio .ud-header.sticky {
    top: 14px !important;
    background-color: rgba(16, 14, 12, .62) !important;
    --tw-bg-opacity: 0 !important;
    -webkit-backdrop-filter: blur(30px) saturate(190%) !important;
    backdrop-filter: blur(30px) saturate(190%) !important;
    border-color: rgba(255, 255, 255, .12) !important;
    box-shadow: 0 26px 64px -28px rgba(0, 0, 0, .95),
                inset 0 1px 0 0 rgba(255, 255, 255, .07) !important;
  }
  #theme-proxio .ud-header .container { width: auto !important; max-width: none !important; }

  /* ---------- ⑥ 徽标与字标辉光 ---------- */
  #theme-proxio .navbar-logo .header-logo { transition: filter .45s var(--b-ease), transform .45s var(--b-ease); }
  #theme-proxio .navbar-logo:hover .header-logo, #theme-proxio .navbar-logo:active .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85)); transform: scale(1.04);
  }
  #theme-proxio .navbar-logo .header-logo-text { transition: color .45s var(--b-ease), text-shadow .45s var(--b-ease); }
  #theme-proxio .navbar-logo:hover .header-logo-text, #theme-proxio .navbar-logo:active .header-logo-text {
    color: var(--b-gold) !important; text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }

  /* ---------- ⑦ 导航项 ---------- */
  #theme-proxio .ud-header #navbarCollapse li > a,
  #theme-proxio .ud-header #navbarCollapse li > button {
    color: var(--b-tx2) !important; border-radius: 999px; padding: 9px 14px;
    transition: color .4s var(--b-ease), background .4s var(--b-ease);
  }
  #theme-proxio .ud-header #navbarCollapse li > a:hover,
  #theme-proxio .ud-header #navbarCollapse li > button:hover {
    color: var(--b-gold) !important; background: rgba(255, 255, 255, .055);
  }

  /* ---------- ⑧ 金底深字兜底：改用品牌金 ---------- */
  #theme-proxio .bg-primary { color: #ecbc56; }
  #theme-proxio .bg-primary.text-white,
  #theme-proxio .bg-primary .text-white,
  #theme-proxio .bg-primary h1, #theme-proxio .bg-primary h2, #theme-proxio .bg-primary h3,
  #theme-proxio .bg-primary p, #theme-proxio .bg-primary span, #theme-proxio .bg-primary a { color: #ecbc56; }
  #theme-proxio .bg-primary svg { fill: currentColor; }

  /* ---------- ⑨ 眉标 ---------- */
  #theme-proxio .eb {
    display: inline-flex; align-items: center; gap: 9px;
    font: 500 10px/1 Poppins, "Noto Sans SC", sans-serif;
    text-transform: uppercase; letter-spacing: .24em; color: #e6cf9b;
    background: rgba(236, 188, 86, .10); border: 1px solid rgba(236, 188, 86, .24);
    padding: 8px 15px; border-radius: 999px; margin-bottom: 22px;
  }
  #theme-proxio .eb::before {
    content: ""; width: 5px; height: 5px; border-radius: 50%;
    background: var(--b-grad-r); box-shadow: 0 0 10px rgba(236, 188, 86, .75);
    transition: box-shadow .4s var(--b-ease), transform .4s var(--b-ease);
  }
  #theme-proxio .eb:hover::before { transform: scale(1.35); box-shadow: 0 0 16px rgba(236, 188, 86, 1); }

  /* ---------- ⑩ 滚动进入动画 ---------- */
  #theme-proxio .rv2 {
    opacity: 0; transform: translateY(48px);
    transition: opacity .9s var(--b-ease), transform .9s var(--b-ease);
    will-change: transform;
  }
  #theme-proxio .rv2.rv2-on { opacity: 1; transform: none; }

  /* ---------- ⑪ 标题 ---------- */
  #theme-proxio h1, #theme-proxio h2 { letter-spacing: -.028em; }
  #theme-proxio h1 { line-height: 1.06; }
  #theme-proxio h2 { line-height: 1.12; }

  /* ============================================================
     packaging 专属：恢复 Hero 底部淡出
     ------------------------------------------------------------
     原实现是 bg-gradient-to-b from-transparent to-white dark:to-black，
     淡出到纯黑；而品牌层把页面底色改成了 #100e0c + 暖色径向光，
     两者对不上，接缝就显出来了 —— 看起来像"模糊没了"。
     这里把淡出目标改成品牌墨底，并适当加高过渡带。
     ============================================================ */
  #theme-proxio [class*="bg-gradient-to-b"][class*="to-white"] {
    background-image: linear-gradient(to bottom,
      rgba(16, 14, 12, 0) 0%,
      rgba(16, 14, 12, .55) 42%,
      rgba(16, 14, 12, .92) 76%,
      #100e0c 100%) !important;
  }
  #theme-proxio [class*="h-1\/3"][class*="bottom-0"] { height: 42% !important; }

  
  
  
  /* ============================================================
     v4 · 修正
     ============================================================ */

  /* ① 去掉导航里多余的框
     原因：v3 里那条用子串匹配的玻璃规则（[class*="rounded-xl"][class*="bg-white"]
     等）会命中导航内部的元素（语言按钮/搜索框之类），在其上画出了第二个圆角框。
     这里明确排除导航内部，只保留 v3.2 的精确复合类规则。 */
  #theme-proxio .ud-header [class*="rounded-xl"],
  #theme-proxio .ud-header [class*="rounded-lg"],
  #theme-proxio .ud-header [class*="shadow-testimonial"],
  #theme-proxio .ud-header [class*="shadow-pricing"],
  #theme-proxio .ud-header [class*="rounded-\\[5px\\]"],
  #theme-proxio .ud-header [class*="rounded-\\[14px\\]"] {
    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 导航内部只有胶囊项需要底色，其余一律透明 */
  #theme-proxio .ud-header .container,
  #theme-proxio .ud-header .container > div,
  #theme-proxio .ud-header .container > div > div { background-color: transparent !important; }

  /* ② 评论卡上浮导致被父容器裁剪 —— 去掉位移，只用描边与辉光表达 */
  #theme-proxio .rounded-xl.bg-white.shadow-testimonial:hover,
  #theme-proxio [class*="shadow-testimonial"]:hover {
    transform: none !important;
    border-color: rgba(236, 188, 86, .45) !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                0 0 28px rgba(236, 188, 86, .26),
                inset 0 1px 0 0 rgba(255, 255, 255, .20) !important;
  }

  /* ③ 移动端二级菜单：与桌面同一套玻璃语言 */
  #theme-proxio [class*="fixed"][class*="top-0"] [class*="rounded"],
  #theme-proxio [class*="md:hidden"] [class*="absolute"],
  #theme-proxio .submenu,
  
  #theme-proxio [class*="fixed top-0"] ul,
  #theme-proxio [class*="fixed top-0"] .submenu,
  #theme-proxio body > div[class*="fixed"] > div[class*="bg-white"],
  #theme-proxio [class*="top-full"][class*="w-full"] {
    background-color: rgba(16, 14, 12, .92) !important;
    -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
    backdrop-filter: blur(30px) saturate(185%) !important;
    border: 1px solid rgba(255, 255, 255, .10) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
  }
  #theme-proxio [class*="top-full"] a,
  #theme-proxio [class*="top-full"] button {
    border-radius: 12px !important;
    color: rgba(242, 237, 228, .72) !important;
    transition: background .4s var(--b-ease), color .4s var(--b-ease);
  }
  #theme-proxio [class*="top-full"] a:hover,
  #theme-proxio [class*="top-full"] button:hover {
    background: rgba(255, 255, 255, .085) !important;
    color: var(--b-gold) !important;
  }

  /* ============================================================
     Packaging v4：hero 与下一区块的交界
     ============================================================ */
  #theme-proxio #home { min-height: 100dvh; }
  #theme-proxio [class*="h-1\/3"][class*="bottom-0"] {
    height: 55% !important;
    background-image: linear-gradient(to bottom,
      rgba(16, 14, 12, 0) 0%,
      rgba(16, 14, 12, .35) 30%,
      rgba(16, 14, 12, .80) 60%,
      rgba(16, 14, 12, .97) 84%,
      #100e0c 100%) !important;
  }
  /* hero 图片底部也加一层压暗，避免亮图直接顶到区块边界 */
  #theme-proxio #home::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 34%;
    z-index: 5; pointer-events: none;
    background: linear-gradient(to bottom, rgba(16, 14, 12, 0) 0%, #100e0c 100%);
  }

  
  /* ============================================================
     v4.1 · 关键修正：导航里多余的框
     ------------------------------------------------------------
     v4 里我写了 #theme-proxio #navbarCollapse { 玻璃底 }，但桌面端的
     #navbarCollapse 正是包裹菜单项的那个容器 —— 于是它被画成了
     第二个胶囊，就是哥看到的"多余的框"。
     它本来就只该在移动端作为下拉面板时才有底色。
     改为仅在移动端断点内生效。
     ============================================================ */
  #theme-proxio .ud-header #navbarCollapse,
  #theme-proxio .ud-header #navbarCollapse > ul,
  #theme-proxio .ud-header #navbarCollapse > div {
    background-color: transparent !important;
    background-image: none !important;
    border: 0 !important;
    box-shadow: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
  /* 桌面端：菜单项自身保持胶囊高亮即可 */
  #theme-proxio .ud-header #navbarCollapse li > a,
  #theme-proxio .ud-header #navbarCollapse li > button {
    background-color: transparent;
  }

  /* 移动端才把它做成玻璃面板（960px 是本站 lg 断点） */
  @media (max-width: 959px) {
    #theme-proxio .ud-header #navbarCollapse {
      background-color: rgba(16, 14, 12, .92) !important;
      -webkit-backdrop-filter: blur(30px) saturate(185%) !important;
      backdrop-filter: blur(30px) saturate(185%) !important;
      border: 1px solid rgba(255, 255, 255, .10) !important;
      border-radius: 20px !important;
      box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                  inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
    }
    #theme-proxio .ud-header #navbarCollapse li > a,
    #theme-proxio .ud-header #navbarCollapse li > button,
    #theme-proxio .ud-header #navbarCollapse .submenu a {
      border-radius: 12px !important;
    }
  }

  
  /* ============================================================
     Packaging · 玻璃与辉光系统
     ------------------------------------------------------------
     依据：high-end-visual-design 技能 + 哥确立的玻璃/辉光语言
     proxio 的卡片原本是 dark:bg-[#0E0E0E] + dark:border-[#333333] 的实心暗卡，
     这里统一改为液态玻璃（背景光可穿透，玻璃才有"面"可读）。
     全程只写 CSS，**不改任何 className** —— public/js/custom.js 依赖类名。
     ============================================================ */

  /* ---------- ① 区块背景透明，透出全站品牌光 ---------- */
  #theme-proxio section,
  #theme-proxio section[class*="bg-white"],
  #theme-proxio section[class*="bg-gray-1"],
  #theme-proxio section[class*="dark:bg-dark"],
  #theme-proxio #main-wrapper > div { background-color: transparent !important; }
  /* 根节点保留品牌底与光 */
  #theme-proxio {
    background-color: #100e0c !important;
    background-image:
      radial-gradient(120% 90% at 78% 4%, rgba(236, 188, 86, .14) 0%, transparent 58%),
      radial-gradient(110% 80% at 8% 96%, rgba(231, 68, 131, .12) 0%, transparent 60%) !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  /* ---------- ② 卡片：液态玻璃 ---------- */
  #theme-proxio .mb-6.rounded-xl.bg-white,
  #theme-proxio [class*="shadow-testimonial"],
  #theme-proxio [class*="dark:bg-[#0E0E0E]"],
  #theme-proxio .p-4.border.rounded-lg,
  #theme-proxio [class*="rounded-lg"][class*="border"][class*="bg-white"] {
    background-color: rgba(255, 255, 255, .055) !important;
    background-image: linear-gradient(150deg,
      rgba(255, 255, 255, .14) 0%,
      rgba(255, 255, 255, .05) 34%,
      rgba(255, 255, 255, .015) 62%,
      rgba(255, 255, 255, 0) 100%) !important;
    -webkit-backdrop-filter: blur(26px) saturate(190%) !important;
    backdrop-filter: blur(26px) saturate(190%) !important;
    border: 1px solid rgba(255, 255, 255, .16) !important;
    border-radius: 1.35rem !important;
    box-shadow: 0 30px 66px -34px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .22),
                inset 0 -1px 0 0 rgba(0, 0, 0, .20) !important;
    transition: border-color .55s var(--b-ease), background-color .55s var(--b-ease),
                transform .55s var(--b-ease), box-shadow .55s var(--b-ease) !important;
  }
  #theme-proxio .mb-6.rounded-xl.bg-white:hover,
  #theme-proxio [class*="shadow-testimonial"]:hover,
  #theme-proxio [class*="dark:bg-[#0E0E0E]"]:hover,
  #theme-proxio .p-4.border.rounded-lg:hover {
    background-color: rgba(255, 255, 255, .085) !important;
    border-color: rgba(236, 188, 86, .46) !important;
    transform: translateY(-3px);
    box-shadow: 0 36px 74px -34px rgba(0, 0, 0, .97),
                0 0 30px rgba(236, 188, 86, .24),
                inset 0 1px 0 0 rgba(255, 255, 255, .28) !important;
  }

  /* ---------- ③ 眉标小胶囊：品牌金 ---------- */
  #theme-proxio span[class*="px-3"][class*="py-0.5"][class*="rounded-2xl"] {
    background-color: rgba(236, 188, 86, .10) !important;
    border: 1px solid rgba(236, 188, 86, .28) !important;
    color: #e6cf9b !important;
    border-radius: 999px !important;
    letter-spacing: .16em;
    text-transform: uppercase;
    font-size: 11px !important;
    font-weight: 600 !important;
    padding: 7px 14px !important;
    transition: border-color .4s var(--b-ease), box-shadow .4s var(--b-ease) !important;
  }
  #theme-proxio span[class*="px-3"][class*="py-0.5"][class*="rounded-2xl"]:hover {
    border-color: rgba(236, 188, 86, .55) !important;
    box-shadow: 0 0 20px rgba(236, 188, 86, .40) !important;
  }

  /* ---------- ④ 胶囊按钮：金色描边 + 悬停辉光 ---------- */
  #theme-proxio a[class*="rounded-3xl"],
  #theme-proxio button[class*="rounded-3xl"],
  #theme-proxio a[class*="rounded-full"][class*="border"] {
    border: 1px solid rgba(255, 255, 255, .18) !important;
    background-color: rgba(255, 255, 255, .05) !important;
    color: #f2ede4 !important;
    border-radius: 999px !important;
    transition: border-color .5s var(--b-ease), color .5s var(--b-ease),
                box-shadow .5s var(--b-ease), transform .5s var(--b-ease) !important;
  }
  #theme-proxio a[class*="rounded-3xl"]:hover,
  #theme-proxio button[class*="rounded-3xl"]:hover,
  #theme-proxio a[class*="rounded-full"][class*="border"]:hover {
    border-color: rgba(236, 188, 86, .60) !important;
    color: #ecbc56 !important;
    transform: translateY(-2px);
    box-shadow: 0 0 26px rgba(236, 188, 86, .42) !important;
  }

  /* ---------- ⑤ 标题与正文：暖白系 ---------- */
  #theme-proxio h1, #theme-proxio h2, #theme-proxio h3,
  #theme-proxio h4, #theme-proxio [class*="dark:text-white"] { color: #f2ede4 !important; }
  #theme-proxio p, #theme-proxio [class*="dark:text-dark-6"],
  #theme-proxio [class*="text-body-color"] { color: rgba(242, 237, 228, .66) !important; }

  /* ---------- ⑥ FAQ 展开内容的过渡保持顺滑 ---------- */
  #theme-proxio [class*="max-h-screen"],
  #theme-proxio [class*="max-h-0"] { transition: max-height .6s var(--b-ease), opacity .6s var(--b-ease) !important; }

  /* ---------- ⑦ 区块之间柔和过渡，避免硬边 ---------- */
  #theme-proxio section { position: relative; }
  #theme-proxio section + section::before {
    content: ""; position: absolute; left: 0; right: 0; top: 0; height: 120px;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(16,14,12,.45) 0%, rgba(16,14,12,0) 100%);
  }

  /* ---------- ⑧ 二级菜单（与主站同一套语言）---------- */
  #theme-proxio .submenu, #theme-proxio #navbarCollapse .submenu {
    margin-top: 12px; padding: 10px; border-radius: 20px;
    background: rgba(16, 14, 12, .72) !important;
    -webkit-backdrop-filter: blur(28px) saturate(185%) !important;
    backdrop-filter: blur(28px) saturate(185%) !important;
    border: 1px solid rgba(255, 255, 255, .10) !important;
    box-shadow: 0 30px 70px -30px rgba(0, 0, 0, .96),
                inset 0 1px 0 0 rgba(255, 255, 255, .08) !important;
  }
  #theme-proxio .submenu a {
    display: block; border-radius: 12px;
    padding: 11px 14px !important;
    color: rgba(242, 237, 228, .62) !important;
    transition: background .4s var(--b-ease), color .4s var(--b-ease) !important;
  }
  #theme-proxio .submenu a:hover {
    background: rgba(255, 255, 255, .085) !important;
    color: #ecbc56 !important;
  }

  
  /* ============================================================
     v11 · Packaging：眉标胶囊不再改内距（避免压到标题）
     ============================================================ */
  #theme-proxio span[class*='px-3'][class*='py-0.5'][class*='rounded-2xl'] {
    background-color: rgba(236, 188, 86, .10) !important;
    border: 1px solid rgba(236, 188, 86, .28) !important;
    color: #e6cf9b !important;
    border-radius: 999px !important;
    /* 关键：不改 padding，保持组件原本的 px-3 py-0.5，
       否则会被撑高、压到下面的标题上 */
    transition: border-color .4s var(--b-ease), box-shadow .4s var(--b-ease) !important;
  }
  #theme-proxio span[class*='px-3'][class*='py-0.5'][class*='rounded-2xl']:hover {
    border-color: rgba(236, 188, 86, .55) !important;
    box-shadow: 0 0 20px rgba(236, 188, 86, .40) !important;
  }
  
  /* ============================================================
     v12 · Packaging 导航字标默认金色 + 隐藏 More 入口
     ============================================================ */

  /* ---------- ① 导航字标默认就是品牌金 ----------
     proxio 的 Logo.js 用 useState 驱动字色：
       const [logoTextColor, setLogoTextColor] = useState('text-white')
       <span className={logoTextColor + ' logo dark:text-white header-logo-text'}>
     暗色模式/首页顶部 → text-white，否则 text-black。
     哥的要求：默认就是主题色，触摸只出辉光。
     所以我此前只写 hover 变金是错的，这里把默认色锁成品牌金。 */
  #theme-proxio .navbar-logo .header-logo-text,
  #theme-proxio .navbar-logo .header-logo-text.text-white,
  #theme-proxio .navbar-logo .header-logo-text.text-black,
  #theme-proxio .navbar-logo .logo {
    color: #ecbc56 !important;
    transition: text-shadow .45s var(--b-ease) !important;
  }
  #theme-proxio .navbar-logo:hover .header-logo-text,
  #theme-proxio .navbar-logo:active .header-logo-text {
    color: #ecbc56 !important;
    text-shadow: 0 0 14px rgba(236, 188, 86, .85);
  }
  #theme-proxio .navbar-logo:hover img,
  #theme-proxio .navbar-logo:hover .header-logo {
    filter: drop-shadow(0 0 10px rgba(236, 188, 86, .85));
  }

  /* ---------- ② 隐藏「更多文章 →」入口 ----------
     它是 proxio/index.js 里的：
       <div class='container mx-auto flex justify-end mb-4'>
         <SmartLink href='/archive'>更多 <i class='fas fa-arrow-right' /></SmartLink>
       </div>
     注意：custom.js 也用这个选择器做隐藏（el1.style.display='none'），
     但没生效。这里用 CSS 兜底，并**不影响**该容器被 custom.js 选中
     （display:none 的元素仍在 DOM 中，querySelector 照样能找到）。 */
  #theme-proxio .container.mx-auto.flex.justify-end.mb-4 {
    display: none !important;
  }
  
  /* ============================================================
     v13 · Packaging：导航固定在窗口上沿 + 移动端显示徽标
     ------------------------------------------------------------
     ① 导航不固定
        原代码 Header.js:56 是 absolute（不是 fixed），而它自己的滚动监听
        （第 30-51 行）被整段注释掉了，所以永远不会切成 sticky。
        我的品牌样式只设了 top/left/transform，没设 position —— 于是保持 absolute。
        这里直接改用 position:fixed，纯 CSS，不动 JS、不动类名。
     ② 移动端没有徽标
        原代码 Logo.js 的图片是 hidden md:inline-block，移动端被隐藏。
        这里用 CSS 覆盖为始终显示（不改 className）。
     ============================================================ */
  #theme-proxio .ud-header {
    position: fixed !important;
    z-index: 100 !important;
  }
  /* 正文顶部留出导航高度，避免首屏内容被压 */
  #theme-proxio #main-wrapper { padding-top: 0; }

  /* 徽标：移动端也显示 */
  #theme-proxio .navbar-logo img {
    display: inline-block !important;
    width: 34px !important;
    height: 34px !important;
    flex: none;
  }
  @media (max-width: 720px) {
    #theme-proxio .navbar-logo img { width: 28px !important; height: 28px !important; }
    #theme-proxio .navbar-logo .header-logo-text { font-size: 15px !important; }
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
  
  border:1px solid rgba(255,255,255,.30);
  box-shadow:0 60px 140px -50px rgba(0,0,0,.9),inset 0 1px 1px rgba(255,255,255,.42);
  transform-origin:0 0;will-change:transform,opacity;
  transition:opacity .3s cubic-bezier(.32,.72,0,1)}
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

  
  /* ---------- 联系面板左上角：辉光品牌徽标 ----------
     动效只用 transform / opacity（符合审美插件的动效规范）。 ---------- */
  #bc-root .bc-head { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
  /* 外玻璃框 100x100，内徽标 90x90 */
  #bc-root .bc-badge {
    position: relative; width: 100px; height: 100px; border-radius: 999px; flex: none;
    display: inline-flex; align-items: center; justify-content: center;
    background: radial-gradient(circle at 50% 34%, rgba(28, 23, 17, .52) 0%, rgba(20, 16, 12, .72) 100%);
    border: 1px solid rgba(255, 255, 255, .34);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, .28),
                inset 0 -1px 0 0 rgba(0, 0, 0, .35),
                0 12px 30px -14px rgba(0, 0, 0, .70);
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    backdrop-filter: blur(12px) saturate(160%);
  }
  #bc-root .bc-badge img {
    width: 90px; height: 90px; object-fit: contain; display: block;
    filter: drop-shadow(0 0 12px rgba(236, 188, 86, .95));
  }
  #bc-root .bc-badge::after {
    content: ''; position: absolute; inset: -14px; border-radius: 999px; pointer-events: none;
    background: radial-gradient(circle, rgba(236, 188, 86, .62) 0%, rgba(236, 188, 86, 0) 70%);
    animation: bc-pulse 2.8s cubic-bezier(.32, .72, 0, 1) infinite;
  }
  @media (max-width: 720px) {
    #bc-root .bc-head { gap: 16px; margin-bottom: 18px; }
    #bc-root .bc-badge { width: 72px; height: 72px; }
    #bc-root .bc-badge img { width: 64px; height: 64px; }
  }
  @keyframes bc-pulse {
    0%, 100% { transform: scale(.90); opacity: .50; }
    50%      { transform: scale(1.16); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    #bc-root .bc-badge::after { animation: none; opacity: .8; }
  }

  /* ============================================================
     v13 · Packaging：区块标题恢复品牌金 + 眉标与标题拉开间距
     ------------------------------------------------------------
     2026-09-20 反馈，三个语言站普遍存在：
       ① 高亮遗漏 —— 上面「⑤ 标题与正文：暖白系」那条
          #theme-proxio h1,h2,h3,h4,[class*="dark:text-white"] { color:#f2ede4 !important }
          把所有标题一律刷成暖白，把**区块强调标题**的品牌金一并洗掉了。
       ② 上下位置挨得太近 —— 眉标是行内 <span>，其后的标题又没有上边距，
          实测两者间距只有 −1px（几乎贴住）。

     眉标+标题是「区块标题」的固定写法（Notion 富文本渲染成
     <span class="px-3 py-0.5 rounded-2xl …">眉标</span><h2>标题</h2>），
     所以用相邻兄弟选择器精确命中这一对，不动卡片/正文里的标题。
     间距统一交给眉标的 margin-bottom，避免各区块 0 / 20px 参差不齐。
     ============================================================ */
  #theme-proxio span[class*='px-3'][class*='py-0.5'][class*='rounded-2xl'] + h1,
  #theme-proxio span[class*='px-3'][class*='py-0.5'][class*='rounded-2xl'] + h2,
  #theme-proxio span[class*='px-3'][class*='py-0.5'][class*='rounded-2xl'] + h3 {
    /* 间距交给标题的上边距：眉标是行内元素，给它 margin-bottom 不产生垂直间距；
       而这类 class 组合的 span 全站有 6 个（含导航字标），改它们的盒模型会误伤。
       只对"紧跟在眉标后面"的标题生效，命中面最小。 */
    margin-top: 20px !important;
    color: #ecbc56 !important;
  }
  `}</style>
}

export { Style }
