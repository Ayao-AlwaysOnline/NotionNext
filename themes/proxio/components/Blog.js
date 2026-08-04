/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  const enable = siteConfig('PROXIO_BLOG_ENABLE', true, CONFIG)
  if (!enable) {
    return null
  }
  const autoShowCover = siteConfig('PROXIO_BLOG_AUTO_SHOW_COVER', false, CONFIG)

  // 博客列表默认显示summary文字，当鼠标指向时显示文章封面。这里可选把summary文字替换成图片占位符。
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_1 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_1'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_2 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_2'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_3 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_3'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_4 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_4'
  )

  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}

      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
