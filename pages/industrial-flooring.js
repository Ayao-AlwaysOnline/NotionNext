import BLOG from '@/blog.config';
import { siteConfig } from '@/lib/config';
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi';
import FlooringPage from '@/components/flooring';

/**
 * 工业地面解决方案 —— 独立页面（不是文章）
 * URL: /industrial-flooring
 *
 * 说明：
 * - 站点 Header / Footer 由 pages/_app.js 的 GLayout（LayoutBase）自动包裹。
 *   本页在 lib/global.js 中被登记为「极简模式」，因此站点 Header/Footer 不渲染，
 *   由页面自带的导航（左跨站 / 中锚点 / 右语言）承担。
 * - 页面内容写死在 components/flooring/（不走 Notion），因为需要拖拽轮播、
 *   全屏详情、灯箱等 Notion 无法表达的交互。
 * - 文案三语：components/flooring/lang-{zh,en,ja}.js
 *   语言在客户端按 localStorage → navigator.language 决定，单一路径。
 *
 * ⚠️ 本页所有样式都在 components/flooring/flooringCss.js，
 *    每条规则以 #flooring 作用域隔离，不会污染站点其它页面。
 */
const IndustrialFlooring = props => <FlooringPage siteInfo={props.siteInfo} />;

export async function getStaticProps({ locale }) {
  const props = await fetchGlobalAllData({ from: 'industrial-flooring', locale });

  // ⚠️ 必须提供 post —— SEO 组件的 getSEOMeta 对未知路由走 default 分支：
  //    有 post 时 title = "页面名 | 站点名"，没有时回落成 "站点名 | loading"。
  //    本页不来自 Notion，所以要在这里手工给出。
  //    首屏（SSR）用中文标题；切语言时由组件在客户端改写 document.title。
  props.post = {
    title: '工业地面解决方案',
    summary:
      '明扣 / 暗扣 / 镂空下水板 三大系列 —— 免胶锁扣工业地面解决方案',
    type: 'website'
  };

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  };
}

export default IndustrialFlooring;
