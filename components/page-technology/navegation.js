import Link from "next/link";
import { useRouter } from "next/router";


export default function Navegation(){

  const router = useRouter();
  const launchVehicleHref = '/technology/launch-vehicle';
  const spaceportHref = '/technology/spaceport';
  const spaceCapsuleHref = '/technology/space-capsule';  

  return(
    <nav className='navegation'>
      <Link scroll={false} href={launchVehicleHref}>
        <a  
          className={router.asPath === launchVehicleHref ? 'active' : null}  
          aria-label='Link to Launch Vehicle description'>  1        
        </a>
      </Link>

      <Link scroll={false} href={spaceportHref}>
        <a  
          className={router.asPath === spaceportHref ? 'active' : null}  
          aria-label='Link to Spaceport description'>  2  
        </a>
      </Link>

      <Link scroll={false} href={spaceCapsuleHref}>
        <a  
          className={router.asPath === spaceCapsuleHref ? 'active' : null}  
          aria-label='Link to Space Capsule description'>  3  
        </a>
      </Link>

    </nav>
  )
}


