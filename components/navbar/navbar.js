import path from "../../lib/path"
import Link from "next/link";
import NavLinks from "./navlinks";
import { useState } from "react";


export default function Navbar(){

  const [sidebarStatus, setSidebarStatus] = useState(false);  
  const closeSidebar = () => setSidebarStatus(false);
  const openSidebar = () => setSidebarStatus(true);

  return(   
    <nav className={`root-navbar ${sidebarStatus ? 'open' : ''}`}>
      <div className="topbar">
        <div className="logo">
          <Link href='/'><a>
            <img src={path('/shared/logo.svg')} alt="logo"/>
          </a></Link>
        </div>
        <span className="detail"></span>
        <NavLinks className='topbar-links' /> 
        <button onClick={ openSidebar } className='btn-menu' aria-label="open side bar menu">
          <img src={path('/shared/icon-hamburger.svg')} alt="menu button" />
        </button>
      </div>

      <div className="sidebar">
        <div className="btn-close-bar">
          <button onClick={ closeSidebar } className="btn-close" aria-label='close side bar menu'>
            <img src={path('/shared/icon-close.svg')} alt="menu button" />
          </button>
        </div>       
        <NavLinks className={'sidebar-links'} /> 
      </div>
    
    </nav>
  )
}