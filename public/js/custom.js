// 这里编写自定义js脚本；将被静态引入到页面中
(function() {
  // ==================== 菜单悬停效果 ====================
  const menuModule = (function() {
    let activeHandlers = new Map();
    let resizeTimer = null;
    let originalClickHandlers = new Map();
    let isDesktop = () => window.innerWidth >= 960;
    
    const styleId = 'menu-style-only';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `@media (min-width:960px){.menu-item-only{transition:opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1) !important;transform:translateY(-10px) !important;opacity:0 !important;visibility:hidden !important;border-radius:12px !important;background-color:rgb(17 25 40/.8) !important;backdrop-filter:blur(8px) !important}.menu-item-only.show{transform:translateY(0) !important;opacity:1 !important;visibility:visible !important}.menu-item-only a{background-color:transparent !important}}`;
      document.head.appendChild(style);
    }
    
    const removeDesktopHandlers = () => {
      document.querySelectorAll('button.cursor-pointer').forEach((button, i) => {
        const submenu = document.querySelectorAll('.submenu')[i];
        if (!submenu) return;
        const handlers = activeHandlers.get(button);
        if (handlers) {
          button.removeEventListener('mouseenter', handlers.show);
          button.removeEventListener('mouseleave', handlers.hide);
          button.removeEventListener('click', handlers.preventClick, true);
          submenu.removeEventListener('mouseenter', handlers.subEnter);
          submenu.removeEventListener('mouseleave', handlers.hide);
          activeHandlers.delete(button);
        }
        const originalClick = originalClickHandlers.get(button);
        if (originalClick) button.onclick = originalClick;
        originalClickHandlers.delete(button);
        submenu.classList.remove('menu-item-only', 'show');
        submenu.style.display = '';
      });
    };
    
    const setupDesktopHandlers = () => {
      if (activeHandlers.size) return;
      document.querySelectorAll('button.cursor-pointer').forEach((button, i) => {
        const submenu = document.querySelectorAll('.submenu')[i];
        if (!submenu) return;
        if (button.onclick) {
          originalClickHandlers.set(button, button.onclick);
          button.onclick = null;
        }
        submenu.style.display = 'none';
        submenu.classList.add('menu-item-only');
        let hideTimer = null;
        const show = () => {
          if (hideTimer) clearTimeout(hideTimer);
          submenu.style.display = 'block';
          requestAnimationFrame(() => submenu.classList.add('show'));
        };
        const hide = () => {
          hideTimer = setTimeout(() => {
            submenu.classList.remove('show');
            setTimeout(() => !submenu.classList.contains('show') && (submenu.style.display = 'none'), 300);
          }, 100);
        };
        const subEnter = () => (hideTimer && clearTimeout(hideTimer), show());
        const preventClick = e => (e.stopPropagation(), e.preventDefault());
        button.addEventListener('mouseenter', show);
        button.addEventListener('mouseleave', hide);
        button.addEventListener('click', preventClick, true);
        submenu.addEventListener('mouseenter', subEnter);
        submenu.addEventListener('mouseleave', hide);
        activeHandlers.set(button, { show, hide, subEnter, preventClick });
      });
    };
    
    const handleResize = () => {
      resizeTimer && clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => isDesktop() ? setupDesktopHandlers() : removeDesktopHandlers(), 100);
    };
    
    isDesktop() && setupDesktopHandlers();
    window.addEventListener('resize', handleResize);
    
    return { cleanup: () => {
      window.removeEventListener('resize', handleResize);
      removeDesktopHandlers();
      document.getElementById(styleId)?.remove();
    }};
  })();

  // ==================== 滚动到目标section（第一个按钮） ====================
  (function() {
    const getTargetSection = () => document.querySelector('.pb-8.pt-20.dark\\:bg-dark.lg\\:pb-\\[70px\\].lg\\:pt-\\[120px\\]');
    const getTargetScroll = () => {
      const section = getTargetSection();
      return section ? section.getBoundingClientRect().top + window.scrollY : 0;
    };
    const btn = document.querySelector('.inline-flex.items-center.justify-center.rounded-md.bg-white');
    if (!btn) return;
    const handler = e => {
      e.preventDefault();
      e.stopPropagation();
      const target = getTargetScroll();
      target && window.scrollTo({ top: target, behavior: 'smooth' });
    };
    btn.addEventListener('click', handler);
  })();

  // ==================== 滚动到contact section（其他按钮） ====================
  (function() {
    const getContactSection = () => document.querySelector('#contact.relative.py-20.md\\:py-\\[120px\\]');
    const getTargetScroll = () => {
      const section = getContactSection();
      return section ? section.getBoundingClientRect().top + window.scrollY : 0;
    };
    const selectors = [
      '.mb-12.max-w-\\[540px\\].lg\\:mb-0 .inline-flex.items-center.justify-center.rounded-md.border.border-primary.bg-primary.px-7.py-3.text-center.text-base.font-medium.text-white.hover\\:border-blue-dark.hover\\:bg-blue-dark',
      '.\\-mx-4.flex.flex-wrap.justify-center .inline-block.rounded-md.bg-primary.px-7.py-3.text-center.text-base.font-medium.text-white.transition.hover\\:bg-blue-dark'
    ];
    const btns = [];
    selectors.forEach(s => document.querySelectorAll(s).forEach(el => btns.push(el)));
    btns.forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      const target = getTargetScroll();
      target && window.scrollTo({ top: target, behavior: 'smooth' });
    }));
  })();

  // ==================== 隐藏滚动条 ====================
  (function() {
    if (document.getElementById('hide-scrollbar')) return;
    const style = document.createElement('style');
    style.id = 'hide-scrollbar';
    style.textContent = `::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}*{scrollbar-width:none!important;-ms-overflow-style:none!important}`;
    document.head.appendChild(style);
  })();

  // ==================== 控制台错误过滤 ====================
  (function() {
    const blocked = ['ERR_BLOCKED_BY_CLIENT', 'ERR_CONNECTION_CLOSED', 'ERR_CONNECTION_REFUSED', 'Failed to load resource', 'vitals.vercel-insights.com', 'busuanzi.ibruce.info', 'api.amplitude.com', 'sentry.io', 'fonts.googleapis.com', 'preloaded using link preload but not used', 'Hydration completed but contains mismatches'];
    const origError = console.error, origWarn = console.warn;
    console.error = (...args) => !blocked.some(p => args.join(' ').includes(p)) && origError.apply(console, args);
    console.warn = (...args) => !blocked.some(p => args.join(' ').includes(p)) && origWarn.apply(console, args);
    setTimeout(() => console.clear(), 6000);
  })();

  // ==================== 删除元素 ====================
  document.querySelector('.container.mx-auto.flex.justify-end.mb-4')?.remove();
  document.querySelector('.container.px-4 .-mx-4.flex.flex-wrap.items-center.justify-center.gap-8.xl\\:gap-11')?.remove();
  document.querySelector('.mt-\\[60px\\].flex.items-center.justify-center.gap-1')?.remove();

  // ==================== Swiper 内容替换 ====================
  (function() {
    const wrapper = document.querySelector('.swiper-wrapper');
    if (!wrapper) return;
    const slides = wrapper.querySelectorAll(':scope > div');
    const groups = [
      { p1: '最让我印象深的是他们不会一味答应所有要求，而是会指出风险。这种合作方式更专业，也更可信。', h3: '创始人', p2: '芬兰，赫尔辛基，船舶用品商' },
      { p1: '之前跟贸易公司搞了半年，每次出问题都说“我问一下工厂"。换到Seaportcy之后，他们自己就把事情弄好了。说实话，我现在最怕的是他们涨价，其他都不担心。', h3: 'Jason', p2: '美国，洛杉矶，户外用品品牌' },
      { p1: '我们量不大，之前找的工厂爱答不理的。Seaportcy倒是一直挺耐心，该打样打样，该改模改模。现在量慢慢上来了，他们也没大涨价。', h3: '创始人', p2: '以色列，特拉维夫，户外装备品牌' },
      { p1: '亚马逊旺季之前，我最怕的就是断货。去年黑五之前库存算错了，赶紧找他们加单。他们居然真给我挤出来了。我当时就想，以后就这家了。', h3: '运营负责人', p2: '英国，曼彻斯特，家居用品电商' },
      { p1: '我第一次找他们的时候，只下了个很小的单，说实话都没抱太大希望。但他们该确认确认，一点没嫌我量小。', h3: '企业主', p2: '瑞典，斯德哥尔摩，自行车配件品牌' },
      { p1: '我们的产品对塑料件的质感要求很高，不能有毛边、不能有接缝。他们打样的时候反复调模具，我看他们自己也挺较真的。最后出来的东西，比我预期的好。', h3: '品牌经理', p2: '芬兰，赫尔辛基万塔，咖啡器具品牌' },
      { p1: '我们时常有急单，他们有时候周末也回消息。我知道这不太礼貌，但他们从来没说过什么。', h3: '采购主管', p2: '菲律宾，马尼拉，促销品公司' },
      { p1: '很多客户要求产品能回收。他们主动跟我说哪些材料能回收、哪些不能，还帮我们换成了更环保的可降解包装。', h3: '区域经理', p2: '比利时，布鲁塞尔，家具用品商' },
      { p1: '他们很愿意听我说我的想法。有时候我提一些很外行的建议，他们也不会笑话我，而是告诉我这个可以做，但成本会高，或者你可以这样改。', h3: '创始人', p2: '爱尔兰，都柏林，家居礼品品牌' },
      { p1: '一直以来合作的都很愉快，顺便说一下，经理是个帅哥。', h3: '采购', p2: '美国，洛杉矶，进口商' },
      { p1: '他们给的价格不是最低的，但是我选出来最满意的。', h3: '采购经理', p2: '以色列，特拉维夫，户外装备品牌' },
      { p1: '跟他们合作了四年，我最大的感受是：他们能听懂我们在说什么。中间隔了半个地球，但沟通起来没什么障碍。这个很重要。', h3: '采购经理', p2: '芬兰，赫尔辛基，游艇设备公司' }
    ];
    slides.forEach((slide, i) => {
      if (i >= groups.length) return;
      const inner = slide.querySelector('.rounded-xl.bg-white.px-4.py-\\[30px\\].shadow-testimonial.dark\\:bg-dark.sm\\:px-\\[30px\\]');
      if (inner) {
        const pTag = inner.querySelector('.mb-6.text-base.text-body-color.dark\\:text-dark-6');
        if (pTag) pTag.textContent = groups[i].p1;
        const a = inner.querySelector('.flex.items-center.gap-4');
        if (a) {
          const h3 = a.querySelector('.text-sm.font-semibold.text-dark.dark\\:text-white');
          if (h3) h3.textContent = groups[i].h3;
          const p2 = a.querySelector('.text-xs.text-body-secondary');
          if (p2) p2.textContent = groups[i].p2;
        }
      }
    });
  })();

  // ==================== 替换团队卡片内容 ====================
  (function() {
    const items = document.querySelectorAll('.group.mb-8.rounded-xl.bg-white.px-5.pb-10.pt-12.shadow-testimonial.dark\\:bg-dark.dark\\:shadow-none');
    const groups = [
      { h4: '业务/市场部门', p: '与您共同进步' },
      { h4: '客户/服务部门', p: '我们经理很帅' },
      { h4: '研发/设计部门', p: '从“差不多”到“就是它”' },
      { h4: '生产/制造部门', p: '精益求精，始终如一' }
    ];
    items.forEach((item, i) => {
      if (i >= groups.length) return;
      const center = item.querySelector('.text-center');
      if (center) {
        const h4 = center.querySelector('.mb-1.text-lg.font-semibold.text-dark.dark\\:text-white');
        if (h4) h4.textContent = groups[i].h4;
        const p = center.querySelector('.mb-5.text-sm.text-body-color.dark\\:text-dark-6');
        if (p) p.textContent = groups[i].p;
      }
    });
  })();

  // ==================== Swiper 拖拽轮播（仅保留拖动，移除悬停暂停） ====================
  (function() {
    const initDrag = () => {
      const container = document.querySelector('.swiper.testimonial-carousel.common-carousel.p-5.swiper-initialized.swiper-horizontal');
      if (!container) { setTimeout(initDrag, 500); return; }
      const wrapper = container.querySelector('.swiper-wrapper');
      if (!wrapper) return;
      const slides = wrapper.querySelectorAll(':scope > div');
      if (!slides.length) return;
      
      let animId = null, moving = true, dir = -1, curX = 0, paused = false, pauseTimer = null, dragging = false, dragStartX = 0, dragStartTransform = 0;
      
      const getSlideData = () => Array.from(slides).map(s => ({ width: s.getBoundingClientRect().width, marginRight: parseFloat(getComputedStyle(s).marginRight) || 0 }));
      const getMaxScroll = () => {
        const data = getSlideData();
        const cw = container.offsetWidth;
        let total = data.reduce((sum, d, i) => sum + d.width + (i < data.length-1 ? d.marginRight : 0), 0);
        const lastStart = total - data[data.length-1].width;
        return Math.max(0, lastStart - (cw - data[data.length-1].width));
      };
      
      let maxScroll = getMaxScroll();
      const clamp = v => Math.min(0, Math.max(v, -maxScroll));
      const update = () => { wrapper.style.transform = `translateX(${curX}px)`; wrapper.style.transition = 'none'; };
      
      const animate = () => {
        if (!moving || paused || dragging) { animId = requestAnimationFrame(animate); return; }
        curX += dir * 1.2;
        if (curX >= 0) { curX = 0; dir = -1; moving = false; pauseTimer = setTimeout(() => { moving = true; pauseTimer = null; }, 2000); }
        else if (curX <= -maxScroll) { curX = -maxScroll; dir = 1; moving = false; pauseTimer = setTimeout(() => { moving = true; pauseTimer = null; }, 2000); }
        update();
        animId = requestAnimationFrame(animate);
      };
      
      const recalc = () => { maxScroll = getMaxScroll(); curX = clamp(curX); update(); };
      const start = () => { animId && cancelAnimationFrame(animId); recalc(); moving = true; paused = false; pauseTimer && clearTimeout(pauseTimer); animate(); };
      const stop = () => { moving = false; paused = true; pauseTimer && clearTimeout(pauseTimer); };
      const resume = () => { if (!paused && !dragging) return; paused = false; moving = true; };
      
      const onStart = e => { stop(); dragging = true; dragStartX = e.touches ? e.touches[0].clientX : e.clientX; dragStartTransform = curX; wrapper.style.transition = 'none'; };
      const onMove = e => { if (!dragging) return; let newX = dragStartTransform + ((e.touches ? e.touches[0].clientX : e.clientX) - dragStartX); newX = clamp(newX); curX = newX; update(); };
      const onEnd = () => { if (!dragging) return; dragging = false; curX = clamp(curX); update(); resume(); };
      
      wrapper.style.cssText = 'display:flex;transition:none;cursor:grab;flex-wrap:nowrap';
      update();
      wrapper.addEventListener('mousedown', onStart); window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', onEnd);
      wrapper.addEventListener('touchstart', onStart); window.addEventListener('touchmove', onMove); window.addEventListener('touchend', onEnd);
      let resizeTimer = null;
      window.addEventListener('resize', () => { resizeTimer && clearTimeout(resizeTimer); resizeTimer = setTimeout(recalc, 200); });
      start();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initDrag);
    else initDrag();
  })();
})();
