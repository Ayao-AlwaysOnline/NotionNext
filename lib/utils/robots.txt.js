import BLOG from '@/blog.config'
import fs from 'fs'

/**
 * 生成 public/robots.txt
 *
 * 两个必须注意的点：
 *
 * 1) 这个文件是**全域名共用一份**（public/robots.txt），
 *    但本函数在构建时会被**每一个语言站各调用一次**
 *    （pages/index.js 的 getStaticProps 对每个 locale 都会执行），
 *    最后一个写盘会覆盖前面的 —— 所以这里**必须写域名根**，不能用 siteInfo.link：
 *    用 siteInfo.link 时，最后构建的 packaging-ja 会把 Host/Sitemap 写成
 *    https://seaportcy.com/packaging-ja（线上就是这个状态），
 *    搜索引擎据此只拿到 packaging-ja 的 sitemap，主站 sitemap 等于没提交。
 *
 * 2) `Host:` 指令 Yandex 已于 2018 年弃用，且旧值带路径属于非法写法，
 *    这里不再输出。
 */
export function generateRobotsTxt() {
  const base = String(BLOG.LINK || '').replace(/\/+$/, '')
  const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${base}/sitemap.xml
`
  try {
    fs.mkdirSync('./public', { recursive: true })
    fs.writeFileSync('./public/robots.txt', content)
  } catch (error) {
    // 在vercel运行环境是只读的，这里会报错；
    // 但在vercel编译阶段、或VPS等其他平台这行代码会成功执行
  }
}
