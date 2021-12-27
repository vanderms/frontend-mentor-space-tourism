import path from '../../lib/path';
import Navegation from '../../components/page-destination/navegation';
import BgImage from '../../components/bg-image/bg-image';


export async function getStaticPaths(){
  const data = await import('../../public/data.json');
  const paths = data.destinations.map(dest => ({ params: {id: dest.name.toLowerCase()}}));  
  return { paths, fallback: false }
}


export async function getStaticProps(context){
  const id = context.params.id;
  const data = await import('../../public/data.json');
  const destination = data.destinations.find(dest => dest.name.toLowerCase() === id);
  return {props: { destination }}
}


export default function Destination({destination}){
  
 const destinationImage = destination.images.png.slice(1);

  return (
    <section className="root-destination root-page">
      <BgImage
        desktop='/assets/destination/background-destination-desktop.jpg'
        tablet='/assets/destination/background-destination-tablet.jpg'
        mobile='/assets/destination/background-destination-mobile.jpg'      
      />
      
      <header className='root-page-header'>
        <h1><span>01</span> PICK YOUR DESTINATION</h1>
      </header>

      <section className="destination">

        <div className="first-block">
          <img src={path(destinationImage)} alt={`${destination.name} illustration`} />
        </div>
        
        <div className="second-block">
          <Navegation/>
          <div className="text">
            <header>
              <h2 className="heading-2">{destination.name}</h2>
            </header>
            <div>
              <p className='description'>{destination.description}</p>
            </div>
          </div>
          <hr className="sep"/>
          <div className="data">
         
            <div className="data-item">
              <span className='item-title'>AVG. DISTANCE</span>
              <span className='item-value'>{destination.distance}</span>
            </div>
            <div className="data-item">
              <span className='item-title'>EST. TRAVEL TIME</span>
              <span className='item-value'>{destination.travel}</span>
            </div>          
          </div>
        </div>
      </section>
    </section>
  )
}