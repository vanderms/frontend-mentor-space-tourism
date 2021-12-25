import path from '../lib/path'
import Link from 'next/link';
import BgImage from '../components/bg-image/bg-image';

export default function Home() {
  
  const desktopBg = { backgroundImage: `url(${path('/home/background-home-desktop.jpg')})`};  
  const tabletBg = { backgroundImage: `url(${path('/home/background-home-tablet.jpg')})`}; 
  const mobileBg = { backgroundImage: `url(${path('/home/background-home-mobile.jpg')})`};   
  
  return (
    <>
     <section className='root-homepage'>
        
        <BgImage
          desktop= '/home/background-home-desktop.jpg'
          tablet = '/home/background-home-tablet.jpg'
          mobile = '/home/background-home-mobile.jpg'
        />

        <div className="text-container">        
          <div className="text">
            <header>
              <div className="subtitle">SO, YOU WANT TO TRAVEL TO</div>
              <h1 className="title">SPACE</h1>
            </header>
            <div className="paragraph-container">
              <p className='paragraph'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
          </div>               
        </div>
        
        <div className="decoration">
          <Link href='/destination/moon'><a>
          <div className="explore"><span>EXPLORE</span></div>
          </a></Link>         
        </div>      
     </section>
    </>
  )
}
