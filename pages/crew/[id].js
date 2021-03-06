import BgImage from '../../components/bg-image/bg-image';
import Navegation from '../../components/page-crew/navegation';

function nameToId(name){
  return name.toLowerCase().replace(' ', '-');
}

export async function getStaticPaths(){
  const data = await import('../../public/data.json');
  const paths = data.crew.map(member => {
    return {params: { id: nameToId(member.name)}};
  })
  return {paths, fallback: false};
}

export async function getStaticProps(context){
  const id = context.params.id;
  const data = await import('../../public/data.json');
  const member = data.crew.find(x => nameToId(x.name) === id);
  return {props: {member}}
}


export default function Crew({member}){

  const memberImage = member.images.png.slice(1);

  return(
    <section className="root-crew root-page">
       <BgImage
        desktop='/assets/crew/background-crew-desktop.jpg'
        tablet='/assets/crew/background-crew-tablet.jpg'
        mobile='/assets/crew/background-crew-mobile.jpg'      
      />
      <header className="root-page-header">
        <h1><span>02</span> MEET YOUR CREW</h1>
      </header>
      <section className="content">
        <div className="content-one">
          <div className="role">{member.role.toUpperCase()}</div>
          <h2 className="name">{member.name.toUpperCase()}</h2>
          <div className="bio">
            <p className="paragraph">{member.bio}</p>
          </div>
          <Navegation/>
        </div>
      </section>
      <div className="img-container">
          <img src={memberImage} alt={member.name} />
      </div>
    </section>
  )
}