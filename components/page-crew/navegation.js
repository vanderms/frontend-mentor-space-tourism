import { useRouter } from "next/router";
import Link from "next/link";


export default function Navegation(){

  const router = useRouter();   
  
  return(
    <nav className="navegation">
      <Link scroll={false} href='/crew/douglas-hurley'>
        <a  
          className={router.asPath === '/crew/douglas-hurley' ? 'active' : null}  
          aria-label='Link to Douglas Hurley bio'>          
        </a>
      </Link>
      
      <Link scroll={false} href='/crew/mark-shuttleworth'>
        <a  
          className={router.asPath === '/crew/mark-shuttleworth' ? 'active' : null}  
          aria-label='Link to Mark Shuttleworth bio'>            
        </a>
      </Link>
      
      <Link scroll={false} href='/crew/victor-glover'>
        <a 
          className={router.asPath === '/crew/victor-glover' ? 'active' : null} 
          aria-label='Link to Victor Glover bio'>
        </a>
      </Link>

      <Link scroll={false} href='/crew/anousheh-ansari'>
        <a  
          className={router.asPath === '/crew/anousheh-ansari' ? 'active' : null} 
          aria-label='Link to Anousheh Ansari bio'>
        </a>
      </Link>
    </nav>
  )
}