import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  return (
    <>
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-brand-ink pt-[150px] pb-24 md:pt-[170px] md:pb-32 lg:pt-[190px]'>
        {/* 背景光由品牌视觉层统一提供（#theme-starter 的 fixed 径向网格光），
            Hero 不再自带一层，避免叠加导致亮度不一致。 */}
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[900px] text-center'
                data-wow-delay='.2s'>
                {/* 主标题 */}
                <span className='eb rv2'>{siteConfig('STARTER_HERO_EYEBROW', 'One-stop Supply Chain', config)}</span>
                <h1 className='rv2 mb-7 text-3xl font-bold text-white sm:text-4xl lg:text-[3.25rem]'>
                  {siteConfig('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='rv2 mx-auto mb-11 max-w-[620px] text-base font-medium sm:text-lg sm:leading-[1.6]'
                  style={{ color: 'var(--b-tx2)' }}>
                  {siteConfig('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='rv2 mb-12 flex flex-wrap items-center justify-center gap-4'>
                  {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config) && (
                    <li>
                      <SmartLink
                        href={siteConfig('STARTER_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color'>
                        {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config)}
                      </SmartLink>
                    </li>
                  )}
                  {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config) && (
                    <li>
                      <SmartLink
                        href={siteConfig(
                          'STARTER_HERO_BUTTON_2_URL',
                          null,
                          config
                        )}
                        target='_blank'
                        data-bc-trigger
                        className='flex items-center rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark'
                        rel='noreferrer'>
                        {siteConfig(
                          'STARTER_HERO_BUTTON_2_ICON',
                          null,
                          config
                        ) && (
                          <LazyImage
                            className='mr-4 w-5 h-5'
                            src={siteConfig(
                              'STARTER_HERO_BUTTON_2_ICON',
                              null,
                              config
                            )}
                            alt='button icon'
                          />
                        )}
                        {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config)}
                      </SmartLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* 产品预览图片 */}
            {(siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, config) || CONFIG.STARTER_HERO_PREVIEW_IMAGE) && (
              <div className='w-full px-4'>
                <div
                  className='wow fadeInUp relative z-10 mx-auto max-w-[845px]'
                  data-wow-delay='.25s'>
                  <div className='mt-16'>
                    <LazyImage
                      src={siteConfig(
                        'STARTER_HERO_PREVIEW_IMAGE',
                        null,
                        config
                      ) || CONFIG.STARTER_HERO_PREVIEW_IMAGE}
                      alt={siteConfig('TITLE', null, config)}
                      title={siteConfig('TITLE', null, config)}
                      className='mx-auto max-w-full rounded-t-xl rounded-tr-xl'
                    />
                  </div>

                  {/* 背景图 */}
                  <div className='absolute -left-9 bottom-0 z-[-1]'>
                    <LazyImage src='/images/starter/bg-hero-circle.svg' alt='bg-circle-left' />
                  </div>
                  <div className='absolute -right-6 -top-6 z-[-1]'>
                    <LazyImage src='/images/starter/bg-hero-circle.svg' alt='bg-circle-right' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 横幅图片 */}
      {(siteConfig('STARTER_HERO_BANNER_IMAGE', null, config) || CONFIG.STARTER_HERO_BANNER_IMAGE) && (
        <div className='container'>
          <LazyImage
            priority
            className='w-full'
            src={siteConfig(
              'STARTER_HERO_BANNER_IMAGE',
              null,
              config
            ) || CONFIG.STARTER_HERO_BANNER_IMAGE}></LazyImage>
        </div>
      )}
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}
