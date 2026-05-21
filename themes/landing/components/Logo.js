import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

export default function Logo() {
  const router = useRouter();
  const path = router.asPath;
  
  // packing 站（包括所有 packing 开头的路径）
  if (path.startsWith('/packing')) {
    return (
      <SmartLink href="/" className="block" aria-label="Cruip">
        <img src="images/starter/team/packing.png" className="w-8 h-8" alt="icon" />
      </SmartLink>
    );
  }
  
  // studios 站（包括所有 studios 开头的路径）
  if (path.startsWith('/studios')) {
    return (
      <SmartLink href="/" className="block" aria-label="Cruip">
        <img src="images/starter/team/studios.png" className="w-8 h-8" alt="icon" />
      </SmartLink>
    );
  }
  
  // 主站默认
  return (
    <SmartLink href="/" className="block" aria-label="Cruip">
      <img src="images/starter/team/studios.png" className="w-8 h-8" alt="icon" />
    </SmartLink>
  );
}
