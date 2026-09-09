// ==================== 包装站评价多语言（等待卡片加载版） ====================
(function() {
    // 英文/日文数据
    const enReviews = [
      { text: "Our products are manufactured in Guangdong. When looking for a packaging partner, someone recommended Seaportcy to us. They've worked very well with our production.", name: "Norman", role: "Importer · California · USA" },
      { text: "We've been working with Seaportcy long-term. It gives us peace of mind.", name: "Ms. X", role: "XX · XX · XX" },
      { text: "In import/export trade, our biggest concern is packaging failing during long-haul transit. Seaportcy's industrial packaging solutions are highly reliable, and our damage rate has dropped significantly. Their service team is also very responsive.", name: "Mr. Chen", role: "Air Purification Equipment Exporter · Shenzhen · Guangdong" },
      { text: "Eco-friendly packaging is a must for us — our clients have very strict requirements. Seaportcy's engineers designed a packaging solution that fully replaces the plastic boxes we used before. Impressive work.", name: "Mr. Z", role: "Export Trader · Dongguan · Guangdong" },
      { text: "Running my own e-commerce business, packaging is a major cost factor. Going directly to the manufacturer is the smart move.", name: "Founder", role: "Cross-Border E-Commerce · Dongguan · Guangdong" },
      { text: "Seaportcy has been our go-to packaging supplier all along. No special reason — time tells.", name: "Ms. Xiao", role: "Trader · Shenzhen · Guangdong" }
    ];
    
    const jaReviews = [
      { text: "当社の製品は広東省で製造しています。協力いただける包装会社を探していたところ、Seaportcyをご紹介いただきました。生産現場での連携もスムーズです。", name: "Norman", role: "輸入業者 · カリフォルニア州 · アメリカ" },
      { text: "Seaportcyとは長くお付き合いさせていただいています。安心して任せられます。", name: "X様", role: "XX · XX · XX" },
      { text: "輸出入貿易では、長距離輸送中のパッケージ破損が最大の懸念事項です。Seaportcyの産業用包装ソリューションは非常に信頼性が高く、破損率が大幅に低下しました。サービスチームの対応も迅速です。", name: "陳様", role: "空気清浄装置輸出業者 · 深セン市 · 広東省" },
      { text: "環境配慮型包装は当社にとって必須であり、取引先の要求も非常に厳しいものです。Seaportcyのエンジニアは、従来使用していたプラスチック箱を完全に代替する包装ソリューションを設計してくださいました。素晴らしい対応です。", name: "Z様", role: "輸出商社 · 東莞市 · 広東省" },
      { text: "ECを運営する上で、包装は重要なコスト要因です。やはり一次仕入れ先から直接調達するのが安心です。", name: "創業者", role: "クロスボーダーEC · 東莞市 · 広東省" },
      { text: "Seaportcyは当社が一貫して頼りにしている包装サプライヤーです。特別な理由はありません。時間がすべてを物語ります。", name: "小様", role: "商社 · 深セン市 · 広東省" }
    ];
    
    // 判断当前语言（通过 URL 或 body 类名）
    const url = window.location.href;
    const isEn = url.includes('packaging-en');
    const isJa = url.includes('packaging-ja');
    
    if (!isEn && !isJa) return;
    
    const reviews = isEn ? enReviews : jaReviews;
    
    // 替换卡片内容的函数
    const replaceCards = () => {
      const cards = document.querySelectorAll('.mb-6.rounded-xl');
      if (cards.length === 0) return false;
      
      cards.forEach((card, i) => {
        if (i >= reviews.length) return;
        const textEl = card.querySelector('.mb-6.text-base');
        const nameEl = card.querySelector('.text-sm.font-semibold');
        const roleEl = card.querySelector('.text-xs.text-body-secondary');
        if (textEl) textEl.textContent = reviews[i].text;
        if (nameEl) nameEl.textContent = reviews[i].name;
        if (roleEl) roleEl.textContent = reviews[i].role;
      });
      return true;
    };
    
    // 立即尝试一次
    if (replaceCards()) {
      console.log('评价内容已替换');
    } else {
      // 卡片还没加载，等待 DOM 变化
      const observer = new MutationObserver(() => {
        if (replaceCards()) {
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      
      // 10 秒后停止监听，避免无限等待
      setTimeout(() => observer.disconnect(), 10000);
    }
    
    // 监听后退/前进
    window.addEventListener('popstate', () => replaceCards());
  })();
  
  
  
  // ==================== studios站根据目标语言自动更改footer内容 ====================
  (function() {
    // 检测当前页面语言（根据 URL 中的 studios-ja 或 studios-en）
    const url = window.location.href;
    const isJapanese = url.includes('studios-ja');
    const isEnglish = url.includes('studios-en');
    
    // 日文翻译
    const jaTranslations = {
      termsOfService: '利用規約',
      privacyPolicy: 'プライバシーポリシー',
      legalNotice: '法律情報',
      contactTitle: 'お問い合わせ',
      emailLabel: 'メール: SeaportcyStudios@qq.com',
      phoneLabel: '電話＆Wechat: +86-15377718690',
      otherBusinessTitle: 'その他のサービス',
      seaportcyLabel: 'Seaportcy丨製造ソリューション',
      packagingLabel: 'Seaportcy丨包装ソリューション',
      slogan: 'Seaportcy — 共に成長し、未来を創ります'
    };
    
    // 英文翻译
    const enTranslations = {
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      legalNotice: 'Legal Notice',
      contactTitle: 'Contact',
      emailLabel: 'Email: SeaportcyStudios@qq.com',
      phoneLabel: 'Tel & Wechat: +86-15377718690',
      otherBusinessTitle: 'Other Services',
      seaportcyLabel: 'Seaportcy丨Products',
      packagingLabel: 'Seaportcy丨Packaging Solutions',
      slogan: 'Seaportcy — Growing with you, every step of the way'
    };
    
    // 选择对应翻译
    const t = isJapanese ? jaTranslations : (isEnglish ? enTranslations : null);
    if (!t) return;
    
    // 修改 slogan 区域
    const sloganDiv = document.querySelector('.text-sm.text-gray-600.mr-4');
    if (sloganDiv) {
      const img = sloganDiv.querySelector('img');
      sloganDiv.innerHTML = '';
      if (img) sloganDiv.appendChild(img);
      sloganDiv.appendChild(document.createTextNode(t.slogan));
    }
    
    // 修改版权区域链接文字
    const termsLink = document.querySelector('.sm\\:col-span-12.lg\\:col-span-3 .text-sm.text-gray-600 a:nth-child(1)');
    if (termsLink && termsLink.textContent.trim() === '服务条款') {
      termsLink.textContent = t.termsOfService;
    }
    
    const privacyLink = document.querySelector('.sm\\:col-span-12.lg\\:col-span-3 .text-sm.text-gray-600 a:nth-child(2)');
    if (privacyLink && privacyLink.textContent.trim() === '隐私政策') {
      privacyLink.textContent = t.privacyPolicy;
    }
    
    const legalLink = document.querySelector('.sm\\:col-span-12.lg\\:col-span-3 .text-sm.text-gray-600 a:nth-child(3)');
    if (legalLink && legalLink.textContent.trim() === '法律声明') {
      legalLink.textContent = t.legalNotice;
    }
    
    // 修改联系方式区域标题
    const contactTitle = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2 h6');
    if (contactTitle && contactTitle.textContent.trim() === '联系方式') {
      contactTitle.textContent = t.contactTitle;
    }
    
    // 修改联系方式内容
    const email = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2 ul li:first-child p');
    if (email && email.textContent.trim().includes('Email:')) {
      email.textContent = t.emailLabel;
    }
    
    const phone = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2 ul li:nth-child(2) p');
    if (phone && phone.textContent.trim().includes('Tel＆Wechat:')) {
      phone.textContent = t.phoneLabel;
    }
    
    // 修改旗下其他业务区域标题
    const otherBusinessTitle = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2:last-child h6');
    if (otherBusinessTitle && otherBusinessTitle.textContent.trim() === '旗下其他业务') {
      otherBusinessTitle.textContent = t.otherBusinessTitle;
    }
    
    // 修改旗下其他业务链接
    const seaportcyLink = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2:last-child ul li:first-child a');
    if (seaportcyLink && seaportcyLink.textContent.trim() === 'Seaportcy丨产品解决方案') {
      seaportcyLink.textContent = t.seaportcyLabel;
    }
    
    const packagingLink = document.querySelector('.sm\\:col-span-6.md\\:col-span-3.lg\\:col-span-2:last-child ul li:nth-child(2) a');
    if (packagingLink) {
      // 修改链接文字
      packagingLink.textContent = t.packagingLabel;
      
      // 修改链接地址（根据语言跳转对应多语言站点）
      if (isJapanese) {
        packagingLink.href = 'https://seaportcy.com/packaging-ja';
      } else if (isEnglish) {
        packagingLink.href = 'https://seaportcy.com/packaging-en';
      }
    }
  })();
  
  
  // ==================== hero按钮滚动 ====================
  (function() {
    const button = document.querySelector('.btn.text-white.bg-blue-600.hover\\:bg-blue-700.w-full.mb-4.sm\\:w-auto.sm\\:mb-0');
    if (button) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 720, behavior: 'smooth' });
      });
    }
  })();
  // ==================== 隐藏视频按钮 ====================
  (function() {
    const element = document.querySelector('.absolute.top-full.flex.items-center.transform.-translate-y-1\\/2.bg-white.rounded-full.font-medium.group.p-4.shadow-lg');
    if (element) element.style.display = 'none';
  })();
  
  // ==================== 按钮滚动到底部 ====================
  (function() {
    const scrollToBottom = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      });
    };
    
    const selectors = [
      '.font-bold.bg-blue-600.hover\\:bg-blue-700.text-white.rounded-md.px-10.py-2.transition-colors.w-full',
      '.btn.text-white.bg-gray-900.hover\\:bg-gray-800.w-full.sm\\:w-auto.sm\\:ml-4'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('click', scrollToBottom);
      });
    });
  })();
  
  
   // ==================== hero圆形颜色 ====================
  (function() {
    const svg = document.querySelector('svg');
    if (!svg) return;
    
    let defs = svg.querySelector('defs');
    if (!defs) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }
    
    // 获取所有圆形组
    const groups = document.querySelectorAll('svg g[fill*="illustration"]');
    
    groups.forEach((group, groupIndex) => {
      const circles = group.querySelectorAll('circle');
      if (circles.length < 2) return;
      
      const leftCircle = circles[0];
      const rightCircle = circles[1];
      
      // 左侧圆形渐变：从左到右（朝向中间）
      const leftGradientId = `left-gradient-${groupIndex}`;
      let leftGradient = document.getElementById(leftGradientId);
      if (!leftGradient) {
        leftGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        leftGradient.setAttribute('id', leftGradientId);
        leftGradient.setAttribute('x1', '0%');
        leftGradient.setAttribute('y1', '0%');
        leftGradient.setAttribute('x2', '100%');
        leftGradient.setAttribute('y2', '0%');
        leftGradient.innerHTML = `
          <stop offset="0%" stop-color="#ecbc56" />
          <stop offset="100%" stop-color="#e74483" />
        `;
        defs.appendChild(leftGradient);
      }
      leftCircle.setAttribute('fill', `url(#${leftGradientId})`);
      
      // 右侧圆形渐变：从右到左（朝向中间）
      const rightGradientId = `right-gradient-${groupIndex}`;
      let rightGradient = document.getElementById(rightGradientId);
      if (!rightGradient) {
        rightGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        rightGradient.setAttribute('id', rightGradientId);
        rightGradient.setAttribute('x1', '100%');
        rightGradient.setAttribute('y1', '0%');
        rightGradient.setAttribute('x2', '0%');
        rightGradient.setAttribute('y2', '0%');
        rightGradient.innerHTML = `
          <stop offset="0%" stop-color="#ecbc56" />
          <stop offset="100%" stop-color="#e74483" />
        `;
        defs.appendChild(rightGradient);
      }
      rightCircle.setAttribute('fill', `url(#${rightGradientId})`);
    });
  })();
  
  
  
  
  // ==================== 主站底部工作室多语言 ====================
  (function() {
    const fixFooterLink = () => {
      const url = window.location.href;
      const isJapanese = url.includes('/ja') || url.endsWith('/ja');
      const isEnglish = url.includes('/en') || url.endsWith('/en');
      
      const link = document.querySelector('.px-1.text-gray-1.hover\\:underline');
      if (!link) return;
      
      if (isEnglish) {
        link.setAttribute('href', 'https://seaportcy.com/studios-en');
      } else if (isJapanese) {
        link.setAttribute('href', 'https://seaportcy.com/studios-ja');
      } else {
        link.setAttribute('href', 'https://seaportcy.com/studios');
      }
    };
    
    // 初始执行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixFooterLink);
    } else {
      fixFooterLink();
    }
    
    // 监听 popstate（后退/前进）
    window.addEventListener('popstate', fixFooterLink);
    
    // 额外：监听 hashchange（如果 URL 中有 hash）
    window.addEventListener('hashchange', fixFooterLink);
  })();
  
  
  
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
        const buttons = document.querySelectorAll('button.cursor-pointer');
        const submenus = document.querySelectorAll('.submenu');
        buttons.forEach((button, i) => {
          const submenu = submenus[i];
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
          if (originalClick && typeof originalClick === 'function') {
            button.onclick = originalClick;
          }
          originalClickHandlers.delete(button);
          if (submenu) {
            submenu.classList.remove('menu-item-only', 'show');
            submenu.style.display = '';
          }
        });
      };
      
      const setupDesktopHandlers = () => {
        if (activeHandlers.size > 0) return;
        const buttons = document.querySelectorAll('button.cursor-pointer');
        const submenus = document.querySelectorAll('.submenu');
        
        buttons.forEach((button, i) => {
          const submenu = submenus[i];
          if (!submenu) return;
          
          if (button.onclick && typeof button.onclick === 'function') {
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
              setTimeout(() => {
                if (submenu && !submenu.classList.contains('show')) {
                  submenu.style.display = 'none';
                }
              }, 300);
            }, 100);
          };
          
          const subEnter = () => {
            if (hideTimer) clearTimeout(hideTimer);
            show();
          };
          
          const preventClick = (e) => {
            e.stopPropagation();
            e.preventDefault();
          };
          
          button.addEventListener('mouseenter', show);
          button.addEventListener('mouseleave', hide);
          button.addEventListener('click', preventClick, true);
          submenu.addEventListener('mouseenter', subEnter);
          submenu.addEventListener('mouseleave', hide);
          
          activeHandlers.set(button, { show, hide, subEnter, preventClick });
        });
      };
      
      const handleResize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (isDesktop()) {
            setupDesktopHandlers();
          } else {
            removeDesktopHandlers();
          }
        }, 100);
      };
      
      // 等待 DOM 加载完成后再执行
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          if (isDesktop()) setupDesktopHandlers();
        });
      } else {
        if (isDesktop()) setupDesktopHandlers();
      }
      
      window.addEventListener('resize', handleResize);
      
      return { 
        cleanup: () => {
          window.removeEventListener('resize', handleResize);
          removeDesktopHandlers();
          const styleElement = document.getElementById(styleId);
          if (styleElement) styleElement.remove();
        }
      };
    })();
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
  
  
  
  // ==================== 隐藏元素（替代删除） ====================
  const el1 = document.querySelector('.container.mx-auto.flex.justify-end.mb-4');
  const el2 = document.querySelector('.container.px-4 .-mx-4.flex.flex-wrap.items-center.justify-center.gap-8.xl\\:gap-11');
  
  if (el1) el1.style.display = 'none';
  if (el2) el2.style.display = 'none';
  
  
  // ==================== Swiper 内容替换 ====================
  (function() {
    const replaceSlides = () => {
      const wrapper = document.querySelector('.swiper-wrapper');
      if (!wrapper) return false;
      const slides = wrapper.querySelectorAll(':scope > div');
  
      // 检测当前页面语言（主站）
      const url = window.location.href;
      const isJapanese = url.includes('/ja') || url.endsWith('/ja');
      const isEnglish = url.includes('/en') || url.endsWith('/en');
  
      let groups;
  
      if (isJapanese) {
        groups = [
          { p1: '何より印象的だったのは、何でもかんでも「はい」と言うのではなく、リスクを指摘してくれたことです。そういう姿勢が、より専門的で信頼できると感じさせました。', h3: '創業者', p2: '日本・神奈川県・湘南地域｜船舶用品サプライヤー' },
          { p1: '半年間、商社と付き合ってきましたが、問題が起きるたびに「工場に確認します」の繰り返しでした。Seaportcyに切り替えてからは、彼ら自身で全て対応してくれます。正直なところ、今心配なのは値上げだけです。それ以外は何も不安はありません。', h3: 'Jason', p2: 'アメリカ・ロサンゼルス｜アウトドア用品ブランド' },
          { p1: '私たちの取扱量はそれほど多くありません。以前当たった工場は、そっけない対応ばかりでした。でもSeaportcyはずっと丁寧で、必要なサンプル作りも型修正もきちんとやってくれます。今、徐々に量が増えてきていますが、それでも価格を大きく上げることはありませんでした。', h3: '創業者', p2: 'イスラエル・テルアビブ｜アウトドア用品ブランド' },
          { p1: 'Amazonの繁忙期前に、何よりも怖いのは在庫切れです。昨年のブラックフライデー直前、在庫数を計算ミスしてしまい、急いで追加発注をお願いしました。すると、彼らは本当に何とかしてくれました。その瞬間、「この会社に決めた」と思いました。', h3: '運営責任者', p2: 'イギリス・マンチェスター｜家庭用品のEC' },
          { p1: '最初に注文したときは、本当に小さいロットでした。正直、あまり期待していませんでした。でも、彼らは必要な確認をきちんと行い、一度も量が少ないという態度を見せませんでした。', h3: '企業主', p2: 'アラブ首長国連邦・ドバイ｜独立ブランド' },
          { p1: '多くのものを失った後、私たちのビジネスは混乱しました。しかし、新しい仕入先に切り替えてからは、かつてのようにすべてがうまく回り始め、コストも下がりました。', h3: 'ドミトリー', p2: 'ロシア、モスクワ、輸入業者' },
          { p1: '当社の製品は、プラスチック部品の質感に対する要求が非常に高く、バリや合わせ目の隙間は許されません。彼らはサンプル製作の際、繰り返し金型を調整していました。彼ら自身も、かなりこだわっている様子でした。最終的に出来上がったものは、私の期待以上でした。', h3: 'ブランドマネージャー', p2: 'フィンランド・ヴァンター｜コーヒー器具ブランド' },
          { p1: '私たちは頻繁に急な注文を出します。彼らは時々、週末にもメッセージを返してくれます。失礼なことだと分かっているのですが、彼らは一度も何かを言ったことはありません。', h3: '購買責任者', p2: 'フィリピン・マニラ｜ノベルティ商品会社' },
          { p1: '多くのお客様から、リサイクル可能な製品を求められています。彼らは自ら、どの素材がリサイクル可能で、どの素材が不可能かを説明し、さらに環境に優しい生分解性パッケージへの切り替えを支援してくれました。', h3: '地域マネージャー', p2: 'ベルギー・ブリュッセル｜家具用品サプライヤー' },
          { p1: '彼らは私の考えをよく聞いてくれます。たまに素人っぽい提案をしても、笑ったりせず、「これはできますが、コストは上がります」とか、「こういう風に変更できますよ」と教えてくれます。', h3: '創業者', p2: 'アイルランド・ダブリン｜家庭用品・ギフトブランド' },
          { p1: 'これまでずっと気持ちよく取引させてもらっています。ちなみに、マネージャーはイケメンです。', h3: 'Amy', p2: 'アメリカ・ロサンゼルス｜輸入業' },
          { p1: '彼らの価格は決して最安値ではありません。しかし、私が選んだ中で最も満足している会社です。', h3: '購買マネージャー', p2: 'イスラエル・テルアビブ｜アウトドア用品ブランド' },
          { p1: '4年間の協業を通じて、私が最も感じるのは、彼らが私たちの言いたいことをきちんと理解してくれているということです。地球の裏側にいるのに、コミュニケーションで困ったことは一度もありません。これは本当に重要なことです。', h3: '購買マネージャー', p2: 'フィンランド・ヘルシンキ｜マリン機器サプライヤー' }
        ];
      } else if (isEnglish) {
        groups = [
          { p1: "What impressed me most is that they don't just say yes to everything — they point out risks. That makes the partnership feel more professional and trustworthy.", h3: 'Founder', p2: 'Japan, Kanagawa Prefecture, Shonan Area | Marine Equipment Supplier' },
          { p1: 'For six months, I worked with a trading company. Every time there was an issue, all I heard was "let me check with the factory." After switching to Seaportcy, they just handle things themselves. To be honest, my only worry now is that they might raise prices — nothing else keeps me up at night.', h3: 'Jason', p2: 'Los Angeles, USA | Outdoor Gear Brand' },
          { p1: "Our volume isn't large. Other factories we approached couldn't care less. But Seaportcy has always been patient — they do the sampling, they make the mold adjustments. Now that our order volume is gradually increasing, they still haven't raised prices significantly.", h3: 'Founder', p2: 'Tel Aviv, Israel | Outdoor Gear Brand' },
          { p1: "Before the Amazon peak season, my biggest fear is running out of stock. Last year, right before Black Friday, I miscalculated my inventory. I rushed to them with a rush order — and somehow, they made it happen. That's when I knew — this is the supplier I'm sticking with.", h3: 'Operations Manager', p2: 'Manchester, UK | Home Goods E-commerce' },
          { p1: "When I first approached them, I placed a really small order. Honestly, I didn't expect much. But they went through all the necessary confirmations, and not once did they make me feel that my volume was too small.", h3: 'Business Owner', p2: 'United Arab Emirates, Dubai | Independent Brand' },
          { p1: 'After we lost a lot, our business went through chaos. But after turning to our new supplier, everything is back to how it used to be — even with lower costs.', h3: 'Dmitry', p2: 'Russia, Moscow | Importer' },
          { p1: 'Our products have very high standards for plastic parts — no burrs, no visible seams. During sampling, they kept fine-tuning the mold. I could tell they take quality as seriously as we do. The final result turned out even better than I expected.', h3: 'Brand Manager', p2: 'Vantaa, Finland | Coffee Equipment Brand' },
          { p1: "We often have urgent orders. Sometimes they reply to messages on weekends. I know it's not exactly polite, but they've never once complained.", h3: 'Purchasing Manager', p2: 'Manila, Philippines | Promotional Products Company' },
          { p1: "Many of our customers ask for recyclable products. They proactively explained which materials are recyclable and which aren't, and even helped us switch to more environmentally friendly biodegradable packaging.", h3: 'Regional Manager', p2: 'Brussels, Belgium | Home Furnishings Supplier' },
          { p1: "They're always willing to listen to my ideas. Sometimes I suggest things that are pretty amateurish, but they never laugh at me. Instead, they'll tell me it's doable — but the cost will be higher — or suggest an alternative way to do it.", h3: 'Founder', p2: 'Dublin, Ireland | Home & Gift Brand' },
          { p1: "We've always had a great experience working with them. And on a side note — the manager is quite good-looking.", h3: 'Amy', p2: 'Los Angeles, USA | Importer' },
          { p1: "Their prices aren't the lowest — but they're the best choice I've made.", h3: 'Purchasing Manager', p2: 'Tel Aviv, Israel | Outdoor Gear Brand' },
          { p1: "After four years of working together, my biggest takeaway is this: they actually understand what we're saying. We're half a world apart, but communication has never been an issue. That's what really matters.", h3: 'Purchasing Manager', p2: 'Helsinki, Finland | Marine Equipment Supplier' }
        ];
      } else {
        groups = [
          { p1: '最让我印象深的是他们不会一味答应所有要求，而是会指出风险。这种合作方式更专业，也更可信。', h3: '创始人', p2: '日本，神奈川县，湘南地区，船舶用品商' },
          { p1: '之前跟贸易公司搞了半年，每次出问题都说“我问一下工厂”。换到Seaportcy之后，他们自己就把事情弄好了。说实话，我现在最怕的是他们涨价，其他都不担心。', h3: 'Jason', p2: '美国，洛杉矶，户外用品品牌' },
          { p1: '我们量不大，之前找的工厂爱答不理的。Seaportcy倒是一直挺耐心，该打样打样，该改模改模。现在量慢慢上来了，他们也没大涨价。', h3: '创始人', p2: '以色列，特拉维夫，户外装备品牌' },
          { p1: '亚马逊旺季之前，我最怕的就是断货。去年黑五之前库存算错了，赶紧找他们加单。他们居然真给我挤出来了。我当时就想，以后就这家了。', h3: '运营负责人', p2: '英国，曼彻斯特，家居用品电商' },
          { p1: '我第一次找他们的时候，只下了个很小的单，说实话都没抱太大希望。但他们该确认确认，一点没嫌我量小。', h3: '企业主', p2: '阿联酋，迪拜，独立品牌' },
          { p1: '自从我们失去了很多，我们的生意经历了混乱，但将目光转向我们的新供应商后一切又像当初那样，成本还低了。', h3: 'Dmitry', p2: '俄罗斯，莫斯科，进口商' },
          { p1: '我们的产品对塑料件的质感要求很高，不能有毛边、不能有接缝。他们打样的时候反复调模具，我看他们自己也挺较真的。最后出来的东西，比我预期的好。', h3: '品牌经理', p2: '芬兰，赫尔辛基万塔，咖啡器具品牌' },
          { p1: '我们时常有急单，他们有时候周末也回消息。我知道这不太礼貌，但他们从来没说过什么。', h3: '采购主管', p2: '菲律宾，马尼拉，促销品公司' },
          { p1: '很多客户要求产品能回收。他们主动跟我说哪些材料能回收、哪些不能，还帮我们换成了更环保的可降解包装。', h3: '区域经理', p2: '比利时，布鲁塞尔，家具用品商' },
          { p1: '他们很愿意听我说我的想法。有时候我提一些很外行的建议，他们也不会笑话我，而是告诉我这个可以做，但成本会高，或者你可以这样改。', h3: '创始人', p2: '爱尔兰，都柏林，家居礼品品牌' },
          { p1: '一直以来合作的都很愉快，顺便说一下，经理是个帅哥。', h3: '采购', p2: '美国，洛杉矶，进口商' },
          { p1: '他们给的价格不是最低的，但是我选出来最满意的。', h3: '采购经理', p2: '以色列，特拉维夫，户外装备品牌' },
          { p1: '跟他们合作了四年，我最大的感受是：他们能听懂我们在说什么。中间隔了半个地球，但沟通起来没什么障碍。这个很重要。', h3: '采购经理', p2: '芬兰，赫尔辛基，游艇设备公司' }
        ];
      }
  
      slides.forEach((slide, i) => {
        if (i >= groups.length) return;
        const inner = slide.querySelector('.rounded-xl.bg-white.px-4.py-\[30px\].shadow-testimonial.dark\:bg-dark.sm\:px-\[30px\]');
        if (inner) {
          const pTag = inner.querySelector('.mb-6.text-base.text-body-color.dark\:text-dark-6');
          if (pTag) pTag.textContent = groups[i].p1;
          const a = inner.querySelector('.flex.items-center.gap-4');
          if (a) {
            const h3 = a.querySelector('.text-sm.font-semibold.text-dark.dark\:text-white');
            if (h3) h3.textContent = groups[i].h3;
            const p2 = a.querySelector('.text-xs.text-body-secondary');
            if (p2) p2.textContent = groups[i].p2;
          }
        }
      });
      return true;
    };
  
    const tryInit = () => {
      if (replaceSlides()) {
        console.log('主站评价已替换');
        return;
      }
      const observer = new MutationObserver(() => {
        if (replaceSlides()) observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => observer.disconnect(), 10000);
    };
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryInit);
    } else {
      tryInit();
    }
  })();
  // ==================== 替换团队卡片内容 ====================
  (function() {
    // 检测当前页面语言（主站）
    const url = window.location.href;
    const isJapanese = url.includes('/ja') || url.endsWith('/ja');
    const isEnglish = url.includes('/en') || url.endsWith('/en');
  
    let groups;
  
    if (isJapanese) {
      groups = [
        { h4: '業務／マーケティング部門', p: 'お客様と共に前進します。' },
        { h4: 'カスタマー／サービス部門', p: 'お客様がどこにいらしても、サービスは共にあります。' },
        { h4: '研究開発／デザイン部門', p: '「まあいいか」から「これだ」へ。' },
        { h4: '生産／製造部門', p: '一厘一毫に宿る匠の心' }
      ];
    } else if (isEnglish) {
      groups = [
        { h4: 'Business & Marketing Department', p: 'Growing together with you.' },
        { h4: 'Customer & Service Department', p: 'Wherever you are, our service is right there with you.' },
        { h4: 'R&D & Design Department', p: 'From "good enough" to "this is it."' },
        { h4: 'Production & Manufacturing Department', p: 'Precision in every detail. Craftsmanship in every part.' }
      ];
    } else {
      groups = [
        { h4: '业务/市场部门', p: '与您共同进步' },
        { h4: '客户/服务部门', p: '我们经理很帅' },
        { h4: '研发/设计部门', p: '从“差不多”到“就是它”' },
        { h4: '生产/制造部门', p: '精益求精，始终如一' }
      ];
    }
  
    const replaceItems = () => {
      const items = document.querySelectorAll('.group.mb-8.rounded-xl.bg-white.px-5.pb-10.pt-12.shadow-testimonial.dark\\:bg-dark.dark\\:shadow-none');
      if (items.length === 0) return false;
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
      return true;
    };
  
    const tryInit = () => {
      if (replaceItems()) {
        console.log('团队卡片内容已替换');
        return;
      }
      const observer = new MutationObserver(() => {
        if (replaceItems()) observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => observer.disconnect(), 10000);
    };
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryInit);
    } else {
      tryInit();
    }
  })();
  
  // ==================== 调整图片尺寸和圆角 ====================
  (function() {
    const updateImages = () => {
      const elements = document.querySelectorAll('[class*="relative"][class*="z-10"][class*="mx-auto"][class*="mb-5"]');
      let found = false;
      elements.forEach(el => {
        if (el.classList.contains('h-[120px]') && el.classList.contains('w-[120px]')) {
          found = true;
          const img = el.querySelector('img');
          if (img) {
            img.style.borderRadius = '0';
            img.style.width = '143px';
            img.style.height = '206px';
          }
          el.style.width = '143px';
          el.style.height = '206px';
        }
      });
      return found;
    };
  
    const tryInit = () => {
      if (updateImages()) {
        console.log('团队图片尺寸已调整');
        return;
      }
      const observer = new MutationObserver(() => {
        if (updateImages()) observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => observer.disconnect(), 10000);
    };
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryInit);
    } else {
      tryInit();
    }
  })();
  
  // ==================== 调整底部表单 ====================
  
  (function() {
      const iframe = document.querySelector('iframe[src*="noteforms.com"]');
      if (!iframe) {
          console.error('未找到 iframe');
          return;
      }
      
      // 记录原始尺寸
      const originalHeight = iframe.offsetHeight;
      const targetHeight = 450; // 想要显示的高度（裁掉底部）
      
      // 获取父容器
      const parent = iframe.parentNode;
      
      // 设置父容器为裁剪容器
      parent.style.position = 'relative';
      parent.style.overflow = 'hidden';
      parent.style.height = targetHeight + 'px';
      
      // 调整 iframe 位置，使其向上偏移（隐藏底部）
      iframe.style.position = 'relative';
      iframe.style.top = '-' + (originalHeight - targetHeight) + 'px';
      iframe.style.height = originalHeight + 'px'; // 保持原高度
  
    // ==================== 修改 iframe padding-top ====================
  (function() {
      const iframe = document.querySelector('iframe[src*="noteforms.com"]');
      if (!iframe) return;
      
      // 向上查找最多5层，修改包含 padding-top 的父容器
      let target = iframe;
      let depth = 0;
      while (target && depth < 5) {
          const style = window.getComputedStyle(target);
          if (style.paddingTop !== '0px') {
              target.style.paddingTop = '4.5rem';
              break;
          }
          target = target.parentElement;
          depth++;
      }
      
      // 如果没找到特定容器，直接设置 iframe 本身
      if (!target || depth === 5) {
          iframe.style.paddingTop = '4.5rem';
      }
  })();
      
  })();
  
  
  // ==================== 浏览器背景色 ====================
  document.documentElement.style.backgroundColor = '#1a1a1a';
