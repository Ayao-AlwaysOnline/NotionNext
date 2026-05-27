/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: false, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: 'Seaportcy·多元包装智造与结构支持·包装解决方案', // 英雄区文字
  PROXIO_HERO_TITLE_2: 'Seaportcy\u200B丨包装解决方案', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '一探究竟', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '联系我们', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '/images/starter/hero/hero-image.webp', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: false, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '包装案例',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我们的成功案例',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '优势',
  PROXIO_FEATURE_TEXT_1: '选择Seaportcy的理由',
  PROXIO_FEATURE_TEXT_2: '稳定的质量、定制化方案，从合作开始，到信任延续，我们关心的不止这一次',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-box', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '深厚制造经验',
  PROXIO_FEATURE_1_TEXT_1:
    '深耕包装领域多年，服务数百客户。熟悉材料的性能，见过足够多的案例与问题，并沉淀为一套标准化的制造流程。什么样的结构容易塌、什么样的方案不耐运——在问题发生之前，我们已帮你规避。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-sliders-h',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '自主生产，质量稳定',
  PROXIO_FEATURE_2_TEXT_1: '自有生产工厂，全链条自主把控。从材料采购到工艺执行，从排产计划到交期承诺——无需受制于外协环节，无需辗转多方沟通。成本更低，响应更快，质量与交期，我们说了算。',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-pen-ruler',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '一站式采购，多品类覆盖',
  PROXIO_FEATURE_3_TEXT_1:
    '从瓦楞纸箱到折叠货架，从猫爬架到各类展示道具——我们不止生产包装，更延伸瓦楞材料的多元可能。一个供应商，满足多种需求，无需分头寻源，无需多方对接。',

  PROXIO_FEATURE_4_ICON_CLASS: '', // 新增特性4
  PROXIO_FEATURE_4_ICON_IMG_URL: '',
  PROXIO_FEATURE_4_TITLE_1: '',
  PROXIO_FEATURE_4_TEXT_1: '',

  PROXIO_FEATURE_BUTTON_TEXT: '联系我们', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: '', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '解决方案',
  PROXIO_CAREER_TEXT: '覆盖多行业的专业解决方案',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '批量运输包装',
      bio: '稳定·经济·批量交付',
      text: '飞机盒、瓦楞纸箱、缓冲气柱袋等运输用包装产品，满足从内衬保护到外箱打包的全流程需求。面向批量订单，交期稳定，成本可控，品质一贯可靠。'
    },
    {
      title: '电商物流包装',
      bio: '安全·经济·品牌化',
      text: '专为电商场景设计的包装方案，支持亚马逊FBA入仓标准、TikTok Shop物流要求、Shopify承运商规格及航空标准箱尺寸等等。兼顾保护性与开箱体验，支持小批量定制，帮助卖家降低破损率与物流成本。'
    },
    {
      title: '工业与特种包装',
      bio: '承重·防潮·防护',
      text: '重型纸箱、护角，加固件，面向设备、精密仪器、易损部件及特殊产品的包装需求，满足严苛的运输环境要求。'
    },
    {
      title: '展示道具',
      bio: '瓦楞纸折叠货架·PDQ·创意陈列',
      text: '瓦楞纸折叠货架、PDQ展示盒、堆头陈列架等，轻便易组装，可定制结构设计与品牌印刷。适用于超市、便利店、展会及快闪店等场景，兼具展示效果与成本优势。'
    },
    {
      title: '宠物用品',
      bio: '猫抓板·猫窝·环保瓦楞材质',
      text: '可回收降解，天然环保材质瓦楞纸宠物用品生产。成本可控，材质安全。'
    },
    {
      title: '批量/单个非标定制',
      bio: '无起订量门槛·按需生产·灵活响应',
      text: '无论试产小批量，还是单个特殊规格，均可沟通承接。从结构设计到成品交付，按您的要求灵活调整，让每一个想法都有落地的可能。'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '客户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的客户怎么说？',
  PROXIO_TESTIMONIALS_TEXT_2:
    '从传统制造企业到跨境卖家，从单个产品定制到年度供应链合作——Seaportcy包装解决方案已服务数百家客户，长期合作客户持续增长',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '与我们联系',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '我们的产品在广东制造，在寻找配套时别人为我推荐了Seaportcy，他们和我们的生产方配合得很好。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Norman',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '进口商·加州·美国',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '我们与seaportcy长期合作，令人安心',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'X女士',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'XX·XX·XX',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '进出口猫一，我们最担心包装在长途运输中出问题。Seaportcy的工业包装方案非常可靠，破损率大幅降低。服务团队响应也很及时。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '陈生',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '净化设备出口商·深圳·广东',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '环保包装是我们的刚需，客户要求很严格。Seaportcy的工程师为我们设计了足以替代原先塑料盒的包装方案，太强了。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Z生',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '出口贸易商·东莞·广东',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的客户疑问',
  PROXIO_FAQS: [
    {
      q: '最小起订量（MOQ）是多少？',
      a: 'Seaportcy提供灵活的起订量方案，从打样到小批量试产再到大规模生产，我们都可以配合您的项目阶段。'
    },
    {
      q: '你们能提供免费打样吗？',
      a: '具体打样政策取决于您的项目需求。请联系我们，我们将提供清晰的打样费用说明，大货订单通常会退还打样费。'
    },
    {
      q: '包装设计是包含在内的吗？',
      a: '是的，我们提供从结构到平面的设计支持。您也可以提供现成设计，我们负责优化和生产。'
    },
    {
      q: '环保材质是不是更贵？',
      a: '瓦楞纸本身即环保材料，可回收、可降解，不额外增加成本。环保是我们产品的天然属性，不是溢价理由'
    },
    {
      q: '报价包含哪些？会有额外费用吗？',
      a: 'Seaportcy的报价始终被要求清晰透明，各类费用将被提前沟通确认，无隐藏费用。'
    },
    {
      q: '包装会不会不够结实或不合适？',
      a: 'Seaportcy的产品包装均经过测试和打样直到满足客户预期。'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于Seaportcy丨包装解决方案',
  PROXIO_ABOUT_TEXT_1: '一套优质可靠的一站式包装解决方案',
  PROXIO_ABOUT_TEXT_2:
    'Seaportcy丨包装解决方案的愿景是帮助每个有想法的客人，以合理的成本、稳定无忧地保护自己的产品，帮助您将产品与故事高效地传达给世界。<br/><br/>可靠的Seaportcy服务，稳定可控的生产平台，组成一个轻松的体验。',
  PROXIO_ABOUT_PHOTO_URL: '/images/starter/team/packaging.png',
  PROXIO_ABOUT_KEY_1: '累积生产经验（年）',
  PROXIO_ABOUT_VAL_1: '20＋',
  PROXIO_ABOUT_KEY_2: '服务客户',
  PROXIO_ABOUT_VAL_2: '400＋',
  PROXIO_ABOUT_KEY_3: '所在位置',
  PROXIO_ABOUT_VAL_3: '广东·东莞',
  PROXIO_ABOUT_KEY_4: '售后问题处理反馈评价',
  PROXIO_ABOUT_VAL_4: '4.8/5',

  PROXIO_ABOUT_BUTTON_URL: '',
  PROXIO_ABOUT_BUTTON_TEXT: '与我们联系',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '电商物流包装',
    '消费品零售包装',
    '工业与特种包装',
    '定制创意包装',
    '环保包装方案',
    '批量包装供应',
    '瓦楞纸产品',
    '展示道具'
  ],

  PROXIO_FOOTER_SLOGAN: '我们提供服务为品牌和公司创造一站式生产体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '联系方式',
      menus: [
        { title: 'Email：seaportcy.info@gmail.com', href: '' },
        {
          title: 'Tel＆Wechat: +86-15377718690',
          href: ''
        }
      ]
    },
    {
      name: '',
      menus: [
        {
          title: '隐私政策',
          href: '/privacy-policy'
        },
        {
          title: '法律声明',
          href: '/legacy-notice'
        },
        {
          title: '服务协议',
          href: '/terms-of-use'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新动态',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: 'Seaportcy丨包装解决方案',
  PROXIO_CTA_TITLE_2: '寻找您的方案',
  PROXIO_CTA_DESCRIPTION:
    '告诉我们您的产品、需求和想法，我们的顾问将在24小时内与您联系，提供专业建议与初步方案。',
  PROXIO_CTA_BUTTON: false, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '',
  PROXIO_CTA_BUTTON_TEXT: '',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://seaportcy.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
