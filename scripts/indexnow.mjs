#!/usr/bin/env node
/**
 * IndexNow 提交脚本（通知 Bing / Yandex 等即时抓取）
 *
 * 为什么需要：本站内容在 Notion 里更新、Vercel 走 ISR，不产生新的构建事件，
 * 搜索引擎只能等自己来爬。IndexNow 可以主动告诉它「这些 URL 变了」。
 *
 * 前置：public/9f4b7c21e6d84a3f0b5c91d27ae63408.txt 已部署（密钥文件），IndexNow 靠它验证域名归属。
 *
 * 用法：
 *   node scripts/indexnow.mjs                      # 提交 sitemap.xml 里的全部 URL
 *   node scripts/indexnow.mjs https://seaportcy.com/ /en /ja   # 只提交指定 URL（可相对路径）
 *
 * 需要能直连 api.indexnow.org（国内网络请走代理：INDEXNOW_PROXY=http://127.0.0.1:7897 node scripts/indexnow.mjs）
 */
const HOST = 'seaportcy.com'
const KEY = '9f4b7c21e6d84a3f0b5c91d27ae63408'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP_URL = `https://${HOST}/sitemap.xml`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

const toAbsolute = value => {
  if (!value) return null
  if (/^https?:\/\//i.test(value)) return value
  return `https://${HOST}${value.startsWith('/') ? '' : '/'}${value}`
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'cache-control': 'no-cache' } })
  if (!res.ok) throw new Error(`取 sitemap 失败：HTTP ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
}

async function main() {
  const args = process.argv.slice(2)
  const urls = (args.length ? args.map(toAbsolute) : await fetchSitemapUrls()).filter(Boolean)
  if (urls.length === 0) {
    console.error('没有可提交的 URL')
    process.exit(1)
  }

  // 可选代理（本机跑时用得上）
  let dispatcher
  if (process.env.INDEXNOW_PROXY) {
    try {
      const { ProxyAgent } = await import('undici')
      dispatcher = new ProxyAgent(process.env.INDEXNOW_PROXY)
    } catch (err) {
      console.warn('未安装 undici，忽略 INDEXNOW_PROXY')
    }
  }

  // IndexNow 单批上限 10000，这里按 500 一批，避免单次请求过大
  let ok = 0
  for (let i = 0; i < urls.length; i += 500) {
    const batch = urls.slice(i, i + 500)
    const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch })
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body,
      ...(dispatcher ? { dispatcher } : {})
    })
    // 200/202 都算成功
    if (res.status === 200 || res.status === 202) {
      ok += batch.length
      console.log(`提交成功 ${batch.length} 条（累计 ${ok}/${urls.length}）`)
    } else {
      console.error(`提交失败 HTTP ${res.status}：${(await res.text()).slice(0, 300)}`)
    }
  }
  console.log(`完成：${ok}/${urls.length} 条已提交给 IndexNow`)
  process.exit(ok > 0 ? 0 : 1)
}

main().catch(err => {
  console.error('IndexNow 提交出错：', err)
  process.exit(1)
})
