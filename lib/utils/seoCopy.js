/**
 * 各站首页的 SEO 文案（title / description）+ 多语言 hreflang 组装
 *
 * 为什么单独放在一个文件里：
 *  站点描述（Notion 里的站点 description）同时被拼成「首页 <title> 的后半段」，
 *  所以它只能是一句短口号 —— 想给搜索引擎一段真正的 meta description（60~120 字），
 *  必须把「标题」和「描述」拆开。这个文件就是拆开之后唯一的文案来源。
 *
 * 适用范围：只有「站首页」（router.route === '/'）用这里的文案。
 *  文章、归档、分类、标签等页面仍用各自页面的标题与摘要，不受影响。
 *
 * ★ 想改文案，只改这个文件即可。key 是站点的 theme locale：
 *      zh-CN / en / ja                        → 主站（产品解决方案）
 *      studios / studios-en / studios-ja      → SeaportcyStudios
 *      packaging / packaging-en / packaging-ja → 包装解决方案
 *  没配到的 locale 回退到旧行为「站点标题 | 站点描述」。
 *
 * ⚠️ 以下文案是初稿（由现有页面文案改写，未新增未经确认的说法），请直接在此处修改。
 */
export const SITE_SEO_COPY = {
  'zh-CN': {
    title: 'Seaportcy 世舶司｜一站式供应链 · ODM/OEM 产品与包装方案',
    description:
      'Seaportcy 世舶司拥有从模具到成品的完整制造链条，覆盖多工艺整合能力，为全球客户提供 ODM/OEM 产品开发、包装方案与一站式供应链服务，稳定交付、全程可控。'
  },
  en: {
    title:
      'Seaportcy | One-Stop Supply Chain · ODM/OEM Product & Packaging Solutions',
    description:
      'Seaportcy: one-stop ODM/OEM product development, packaging and supply chain services for global clients — from tooling to finished product, delivered reliably.'
  },
  ja: {
    title:
      'Seaportcy｜ワンストップ・サプライチェーン／ODM・OEM 製品・包装ソリューション',
    description:
      'Seaportcyは、金型製造から最終製品までの多工程を統合した製造チェーンを有し、ODM・OEMの製品開発、包装ソリューション、ワンストップのサプライチェーンサービスを世界のお客様に安定して提供します。'
  },
  studios: {
    title: 'SeaportcyStudios｜设计与工程支持 · 稳定从容的交付',
    description:
      'SeaportcyStudios 面向教育、建筑、媒体、商业与创意行业的客户，提供清晰的沟通与稳定的设计与工程支持 —— 因为我们，您的稳定与从容，理所应当。'
  },
  'studios-en': {
    title: 'SeaportcyStudios | Design & Engineering Support, Reliably Delivered',
    description:
      'SeaportcyStudios provides design and engineering support for clients across technology, education, architecture, media, commerce and creative industries who value clarity.'
  },
  'studios-ja': {
    title: 'SeaportcyStudios｜デザイン・エンジニアリング支援',
    description:
      'SeaportcyStudiosは、教育・建築・メディア・商業・クリエイティブなど、明確さを重視するお客様に、デザインとエンジニアリングの支援を提供します。確かな成果を、静かに支える。'
  },
  packaging: {
    title: 'Seaportcy丨包装解决方案｜多元包装智造与结构支持',
    description:
      'Seaportcy丨包装解决方案 提供电商物流、消费品零售、工业与特种、定制创意及环保材料的包装结构设计与批量供应，覆盖瓦楞纸与产品展示道具 —— 源于自然，归于循环。'
  },
  'packaging-en': {
    title:
      'Seaportcy丨Packaging Solutions | Multi-Material Packaging Manufacturing',
    description:
      'Seaportcy丨Packaging Solutions designs and makes e-commerce, retail, industrial, creative and eco-material packaging in volume — from corrugated board to display fixtures.'
  },
  'packaging-ja': {
    title: 'Seaportcy丨パッケージソリューション｜多素材の包装製造と構造支援',
    description:
      'Seaportcy丨パッケージソリューションは、EC物流・小売・産業／特殊・クリエイティブ・環境配慮素材の包装を、構造設計から量産まで一貫して提供します。段ボールから陳列什器まで、確実に、無理なく。'
  }
}

/** 取某个 locale 的首页文案；没配到返回 null（调用方回退旧行为） */
export function getSiteSeoCopy(locale) {
  if (!locale) return null
  return SITE_SEO_COPY[String(locale)] || null
}

/**
 * 语言家族：同一条业务线的各语言版本。
 * locale 命名规律是本仓自己定的（studios-en、packaging-ja…），不是标准语言码，
 * 所以这里显式列出，避免猜。
 */
const LANG_FAMILIES = {
  'zh-CN': ['zh-CN', 'en', 'ja'],
  en: ['zh-CN', 'en', 'ja'],
  ja: ['zh-CN', 'en', 'ja'],
  studios: ['studios', 'studios-en', 'studios-ja'],
  'studios-en': ['studios', 'studios-en', 'studios-ja'],
  'studios-ja': ['studios', 'studios-en', 'studios-ja'],
  packaging: ['packaging', 'packaging-en', 'packaging-ja'],
  'packaging-en': ['packaging', 'packaging-en', 'packaging-ja'],
  'packaging-ja': ['packaging', 'packaging-en', 'packaging-ja']
}

/** locale → hreflang 语言代码（hreflang 只认语言，不认站点前缀） */
const LANG_CODE = {
  'zh-CN': 'zh-CN',
  en: 'en',
  ja: 'ja',
  studios: 'zh-CN',
  'studios-en': 'en',
  'studios-ja': 'ja',
  packaging: 'zh-CN',
  'packaging-en': 'en',
  'packaging-ja': 'ja'
}

/**
 * 组装 hreflang alternate 列表。
 * 只有能确定对应关系的页面才该输出 —— 本仓只有「各站首页」有这个对应关系，
 * 所以调用方只在 router.route === '/' 时使用本函数。
 *
 * @param {string} locale 当前 locale
 * @param {string} defaultLocale 默认 locale（其 URL 无前缀）
 * @param {string} baseUrl 站点根，如 https://seaportcy.com
 */
export function buildLanguageAlternates(locale, defaultLocale, baseUrl) {
  const family = LANG_FAMILIES[String(locale)]
  if (!family || !baseUrl) return []
  const base = String(baseUrl).replace(/\/+$/, '')
  const href = loc => base + (loc === defaultLocale ? '/' : '/' + loc)
  const list = family.map(loc => ({ hreflang: LANG_CODE[loc] || loc, href: href(loc) }))
  // x-default：语言都匹配不上时给哪个版本 —— 给该家族的中文版
  const fallback = family[0]
  list.push({ hreflang: 'x-default', href: href(fallback) })
  return list
}
