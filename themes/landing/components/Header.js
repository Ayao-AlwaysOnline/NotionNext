'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import CONFIG from '../config'

export default function Header() {
  const [top, setTop] = useState(true)
  const router = useRouter();
  const path = router.asPath;

  // 根据当前路径判断是 packing 站还是 studios 站
  const isPacking = path.startsWith('/packing');
  const langBase = isPacking ? '/packing' : '/studios';
  const enUrl = `https://seaportcy.com${langBase}-en`;
  const jaUrl = `https://seaportcy.com${langBase}-ja`;

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white dark:bg-hexo-black-gray backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a href={enUrl} className="btn-sm text-gray-200 hover:bg-gray-800 ml-3">
                  <span>English</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={jaUrl} className="btn-sm text-gray-200 hover:bg-gray-800 ml-3">
                  <span>日本语</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
