import BgImage from '../../components/bg-image/bg-image';
import Navegation from '../../components/page-technology/navegation';

function nameToId(name){
  return name.toLowerCase().replace(' ', '-');
}

export async function getStaticPaths(){
  const data = await import('../../public/data.json');
  const paths = data.technology.map(tech => {
    return {params: { id: nameToId(tech.name)}};
  })
  return {paths, fallback: false};
}

export async function getStaticProps(context){
  const id = context.params.id;
  const data = await import('../../public/data.json');
  const tech = data.technology.find(x => nameToId(x.name) === id);
  return {props: {tech}}
}

export default function Technology({tech}){

  const imagePortrait = tech.images.portrait.slice(1);
  const imagelandscape = tech.images.landscape.slice(1);

  return(
    <section className="root-page root-technology">     
      <BgImage
        desktop='/assets/technology/background-technology-desktop.jpg'
        tablet='/assets/technology/background-technology-tablet.jpg'
        mobile='/assets/technology/background-technology-mobile.jpg'      
      />
      
      <header className="root-page-header">
        <h1><span>03</span> SPACE LAUNCH 101</h1>
      </header>

      <section className="content">
        <div className="nav-and-description-wrapper">
          <Navegation/>
          <div className="text">
            <div className="terminology">THE TERMINOLOGY...</div>
            <h2 className="name">{tech.name.toUpperCase()}</h2>
            <div className="description">
              <p>{tech.description}</p>
            </div>
          </div>         
        </div>
        
        <div className="image-container">
            <img className='landscape' src={imagelandscape} alt={tech.name} />
            <img className='portrait' src={imagePortrait} alt={tech.name} />
          </div>
        


      </section>



    </section>

  )
}