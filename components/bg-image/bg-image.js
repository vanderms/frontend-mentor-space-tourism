import path from "../../lib/path";

export default function BgImage({desktop, tablet, mobile}){
  
  const style = {};
  style.desktop = { backgroundImage: `url(${path(desktop)})`};
  style.tablet = { backgroundImage: `url(${path(tablet)})`};
  style.mobile = { backgroundImage: `url(${path(mobile)})`};
  
  return (
    <>
      <div style={style.desktop} className='root-bg-image desktop'></div>
      <div style={style.tablet} className='root-bg-image tablet'></div>
      <div style={style.mobile} className='root-bg-image mobile'></div>
    </>
  )
}