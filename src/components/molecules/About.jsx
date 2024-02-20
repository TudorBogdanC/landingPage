import { Button } from "react-bootstrap";
import curriculum  from "./../../assets/Cv_Tudor Craciun_FrontEndDev.pdf"
import image from  "./../../assets/immagine_profilo.png"


const About = () => {
  return (
    <>
      <section className="diagonal d-flex" id="about">
        <div className="immagine text-center">
          <img className="image" src={image} />
        </div>
        <div className="wrapper mx-auto">
          <div>
            <div className="animation">
              <h2 id="typeWriter" className="section-title">
                Ciao, sono un Frontend Web Developer!
              </h2>
            </div>
            <p>
              Salve, viandante digitale e benvenuto sulla mia pagina personale.
              Mi chiamo Tudor e ho una passione per le lingue, i linguaggi di
              programmazione e le tecnologie web. Sono anche un amante dei
              giochi di ruolo e sono affascinato da tutto ciò che è l'UX / UI
              Design. Dopo la laurea in ambito linguistico, ho deciso di
              iniziare un coinvolgente viaggio nello studio dei linguaggi di
              programmazione per il web.
            </p>
            <Button variant="dark" className="rounded-pill">
              <a
              style={{textDecoration: "none" , color: "white"}}
              href={curriculum}> Scarica CV </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
