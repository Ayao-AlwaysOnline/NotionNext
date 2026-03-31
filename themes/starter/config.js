/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: 'images/starter/logo/logo.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: 'images/starter/logo/logo.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '高效且稳定的基于一体化供应链成就您的产品', // 英雄区文字
  STARTER_HERO_TITLE_2: '依托成熟制造经验，提供高效稳定的生产一站式服务', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始了解', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '寻求合作', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空/images/starter/github.svg

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  // STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  // STARTER_NAV_BUTTON_1_URL: '/sign-in',

  // STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  // STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '优势', // 特性
  STARTER_FEATURE_TEXT_1: '选择我们的理由', // 特性
  STARTER_FEATURE_TEXT_2:
    'Seaportcy的愿景是帮助您高效无忧且稳定地铸就您的产品需求，放大您品牌的价值。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '成熟一体化供应链', // 特性1
  STARTER_FEATURE_1_TEXT_1: '无需经过多方协调，一体化供应链一站搞定。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: '定制化方案', // 特性2
  STARTER_FEATURE_2_TEXT_1: '从想法的诞生到产品的落地，我们全程伴您同行。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: '服务体验', // 特性3
  STARTER_FEATURE_3_TEXT_1: '不止于产品，更追求极致服务体验。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: '稳定的质量', // 特性4
  STARTER_FEATURE_4_TEXT_1: '从合作开始，到信任延续，我们关心的，不止这一次合作。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套优质可靠的一站式产品解决方案',
  STARTER_ABOUT_TEXT:
    '"Seaportcy的愿景是帮助每个有想法的客人，以合理的成本、稳定无忧地生产自己的产品，帮助您将自己的产品与故事高效地传达给世界。 <br /> <br /> 可靠的Seaportcy服务，稳定可控的生产平台，组成一个轻松的体验。',
  STARTER_ABOUT_BUTTON_TEXT: '与我们联系',
  STARTER_ABOUT_BUTTON_URL: '',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '400+',
  STARTER_ABOUT_TIPS_2: '产品项目',
  STARTER_ABOUT_TIPS_3: '满意交付',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '方案栏',
  STARTER_PRICING_TEXT_1: '多样的产品方案',
  STARTER_PRICING_TEXT_2:
   ["我们制定了灵活的产品模式，您可以按需选择。","Seaportcy做出保证，无论何种方案，您都将获得最优质的服务"],

  STARTER_PRICING_1_TITLE: 'OEM/代工生产',
  STARTER_PRICING_1_PRICE: '由Seaportcy为您生产您的产品',
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: '',
  STARTER_PRICING_1_HEADER: '内容',
  STARTER_PRICING_1_FEATURES: '优质的服务体验, 完备的生产, 高效的交付', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '与我们联系',
  STARTER_PRICING_1_BUTTON_URL:
    '',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: 'ODM/全局产品方案提供',
  STARTER_PRICING_2_PRICE: '由Seaportcy为您的想法落地',  
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '',
  STARTER_PRICING_2_HEADER: '内容',
  STARTER_PRICING_2_FEATURES: '深度的设计支持, 专属的产品方案, 敏捷的开发落地, 严格的知识产权 , ......', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '与我们联系',
  STARTER_PRICING_2_BUTTON_URL:
    '',

  STARTER_PRICING_3_TITLE: '更多灵活方案',
  STARTER_PRICING_3_PRICE: '由Seaportcy与您共同商讨',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_HEADER: '内容',
  STARTER_PRICING_3_FEATURES: '非标的需求承接, 灵活的组合方式, 快速的方案匹配', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '与我们联系',
  STARTER_PRICING_3_BUTTON_URL:
    '',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的客人怎么说？',
  STARTER_TESTIMONIALS_TEXT_2:
    '数百位我们珍视的客户选择让Seaportcy落地他们的想法，依托Seaportcy的服务、一体化供应链，不少客户在之后选择与Seaportcy达成长期战略合作伙伴协定',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXX',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXX',  
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXX',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'XXXXXXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'XXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/CST.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'XXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XXXXXXXXXXXXXXXXXXXXX',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的客户疑问',

  STARTER_FAQ_1_QUESTION: '你们会持续配合我们开发新品吗？',
  STARTER_FAQ_1_ANSWER:
    '是的，从第一个需求到每一个需求，Seaportcy的服务团队始终都在',

  STARTER_FAQ_2_QUESTION: '报价包含哪些？会有额外费用吗？',
  STARTER_FAQ_2_ANSWER:
    'Seaportcy的报价始终被要求清晰透明，各类费用将被提前沟通确认，无隐藏费用',

  STARTER_FAQ_3_QUESTION: '包装会不会不够结实或不合适？',
  STARTER_FAQ_3_ANSWER:
    'Seaportcy的产品包装均由敝司的包装生产部门量身打造自主生产',

  STARTER_FAQ_4_QUESTION: '刚下完单，价格跌了怎么办？',
  STARTER_FAQ_4_ANSWER:
    'Seaportcy所珍视的长期合作客户可享一定程度的价格保护期，Seaportcy始终愿意与您共同发展',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '敝司构成',
  STARTER_TEAM_TEXT_1: 'Seaportcy的组成部分',
  STARTER_TEAM_TEXT_2:
    'Seaportcy的成就由各业务部门联合完成，感谢诸君的通力合作',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TEAM_ITEM_DESCRIPTION: 'XXXX'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TEAM_ITEM_DESCRIPTION: 'XXXX'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TEAM_ITEM_DESCRIPTION: 'XXXX'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-04.png',
      STARTER_TEAM_ITEM_NICKNAME: 'XXXXXXXX',
      STARTER_TEAM_ITEM_DESCRIPTION: 'XXXX'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的动态',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的消息',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于Seaportcy的最新动态，包括新的动向、新的未来计划',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '与我们联系',
  STARTER_CONTACT_TEXT: '告诉我们您的想法',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，广东',
  STARTER_CONTACT_EMAIL_TITLE: '我们该如何开始？',
  STARTER_CONTACT_EMAIL_TEXT: 'seaportcy.info@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过服务为品牌和公司创造一站式产品生产体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'XXXXX',
      LINK_GROUP: [
        { TITLE: 'XXXXX', URL: '' },
        { TITLE: 'XXXXX', URL: '' },
        {
          TITLE: 'XXXXX',
          URL: ''
        },
        {
          TITLE: 'XXXXX',
          URL: ''
        }
      ]
    },
    {
      TITLE: 'XXXXX',
      LINK_GROUP: [
        {
          TITLE: 'XXXXX',
          URL: ''
        },
        {
          TITLE: 'XXXXX',
          URL: ''
        },
        { TITLE: 'XXXXX', URL: '' }
      ]
    },
    {
      TITLE: 'XXXXX',
      LINK_GROUP: [
        {
          TITLE: 'XXXXX',
          URL: ''
        },
        {
          TITLE: 'XXXXX',
          URL: ''
        },
        {
          TITLE: 'XXXXX',
          URL: ''
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'XXX',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '您还在等待什么呢？',
  STARTER_CTA_TITLE_2: '与我们取得联系！',
  STARTER_CTA_DESCRIPTION:
    'Seaportcy始终愿与您共同发展',
  STARTER_CTA_BUTTON: false, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    '',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://seaportcy.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
