import Link from 'next/link';
import { useRouter } from "next/router";


export default function Navegation(){

  const router = useRouter();
 
  return (
    <nav>
      <ul>
        <li className={router.asPath === '/destination/moon' ? 'active' : null}>
          <Link scroll={false} href='/destination/moon'><a>MOON</a></Link>
        </li>
        <li className={router.asPath === '/destination/mars' ? 'active' : null}>
          <Link scroll={false} href='/destination/mars'><a>MARS</a></Link>
        </li>
        <li className={router.asPath === '/destination/europa' ? 'active' : null}>
          <Link scroll={false} href='/destination/europa'><a>EUROPA</a></Link>
        </li>
        <li className={router.asPath === '/destination/titan' ? 'active' : null}>
          <Link scroll={false} href='/destination/titan'><a>TITAN</a></Link>
        </li>
      </ul>
    </nav>
  )
}