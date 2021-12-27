import { useRouter } from "next/router";
import Link from "next/link";


export default function NavLinks({className, close}){

  const router = useRouter();

  return (
    <ul className={className} onClick={() => close()}>
      <li className={router.pathname === '/' ? 'active' : null}>
        <Link href='/'><a><span className="number">00 </span>HOME</a></Link>
      </li>
      <li className={router.pathname.indexOf('/destination') === 0 ? 'active' : null}>
        <Link href='/destination/moon'><a><span className="number">01 </span>DESTINATION</a></Link>
      </li>
      <li className={router.pathname.indexOf('/crew') === 0 ? 'active' : null}>
        <Link href='/crew/douglas-hurley'><a><span className="number">02 </span>CREW</a></Link>
      </li>
      <li className={router.pathname.indexOf('/technology') === 0 ? 'active' : null}>
        <Link href='/technology/launch-vehicle'><a><span className="number">03 </span>TECHNOLOGY</a></Link>
      </li>
    </ul>
  )
}