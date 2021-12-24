import path from "../../lib/path"
import Link from "next/link";
import NavLinks from "./navlinks";


export default function Navbar(){
  return(   
    <nav className="root-navbar">

      <div className="topbar">
        <div className="logo">
          <Link href='/'><a>
            <img src={path('/shared/logo.svg')} alt="logo"/>
          </a></Link>
        </div>
        <span className="detail"></span>
        <NavLinks className='topbar-links' /> 
        <button className='btn-menu' aria-label="open sidebar menu">
          <img src={path('/shared/icon-hamburger.svg')} alt="menu button" />
        </button>
      </div>

      <div className="sidebar">
        <NavLinks className={'sidebar-links'} /> 
      </div>
    
    </nav>
  )
}