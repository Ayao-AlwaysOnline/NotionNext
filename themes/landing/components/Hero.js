import CONFIG from '../config'
import ModalVideo from './ModalVideo'
import { siteConfig } from '@/lib/config'

export default function Hero() {
  return (
        <section className="relative">
            {/* 径向网格光：与主站同一套 Ethereal Glass 质感底 */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(110% 80% at 82% 6%, rgba(236,188,86,.14) 0%, transparent 56%),' +
                  'radial-gradient(100% 76% at 8% 96%, rgba(231,68,131,.13) 0%, transparent 58%)'
              }} />

            {/* Illustration behind hero content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <span className="eb rv2">Creative Studio</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-5" data-aos="zoom-y-out">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ecbc56] to-[#e74483]">{siteConfig('LANDING_HERO_TITLE_1', null, CONFIG)}</span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="rv2 text-lg text-gray-600 dark:text-gray-400 mb-9" data-aos="zoom-y-out" data-aos-delay="150">{siteConfig('LANDING_HERO_P_1', null, CONFIG)}</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <div>
                                    <a target='_blank' className="isle group mb-4 sm:mb-0"
                                        href={siteConfig('LANDING_HERO_BUTTON_1_LINK', null, CONFIG)} rel="noreferrer">
                                        {siteConfig('LANDING_HERO_BUTTON_1_TEXT', null, CONFIG)}
                                    </a>
                                </div>
                                <div>
                                    <a target='_blank' className="isle ghost group sm:ml-4"
                                        href={siteConfig('LANDING_HERO_BUTTON_2_LINK', null, CONFIG)} rel="noreferrer">
                                        {siteConfig('LANDING_HERO_BUTTON_2_TEXT', null, CONFIG)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <ModalVideo
                        thumb={siteConfig('LANDING_HERO_VIDEO_IMAGE', null, CONFIG)}
                        thumbWidth={768}
                        thumbHeight={432}
                        thumbAlt={siteConfig('HERO_HEADER_1', null, CONFIG)}
                        video={siteConfig('HERO_VIDEO_URL', null, CONFIG)}
                        videoWidth={1920}
                        videoHeight={1080} />

                </div>

            </div>
        </section>
  )
}
