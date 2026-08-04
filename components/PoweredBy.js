import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Designed and Developed by</span>
      <a
        href='/studios'
        className='underline justify-start'
        style={{ color: '#ecbc56' }}>
        SeaportcyStudios
      </a>
      .
    </div>
  )
}
