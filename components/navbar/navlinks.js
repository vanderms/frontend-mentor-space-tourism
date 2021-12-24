import { useRouter } from "next/router";
import Link from "next/link";


export default function NavLinks({className}){

  const router = useRouter();

  return (
    <ul className={className}>
      <li className={router.pathname === '/' ? 'active' : null}>
        <Link href='/'><a><span className="number">00 </span>HOME</a></Link>
      </li>
      <li className={router.pathname === '/destination' ? 'active' : null}>
        <Link href='/destination'><a><span className="number">01 </span>DESTINATION</a></Link>
      </li>
      <li className={router.pathname === '/crew' ? 'active' : null}>
        <Link href='/crew'><a><span className="number">02 </span>CREW</a></Link>
      </li>
      <li className={router.pathname === '/technology' ? 'active' : null}>
        <Link href='/technology'><a><span className="number">03 </span>TECHNOLOGY</a></Link>
      </li>
    </ul>
  )
}