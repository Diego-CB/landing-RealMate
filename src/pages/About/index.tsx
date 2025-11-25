import hero from "../../assets/images/about/hero.png";
import logo from "../../assets/images/logos/logo-download.png";
import buildingVertical from "../../assets/images/hero/building-vertical.png";
import QuienesSomos from "./parts/QuienesSomos";
import ConoceAlEquipo from "./parts/ConoceAlEquipo";
import Construyamos from "./parts/Construyamos";
import ProjectCarousel from "./components/Carrousel";

import p1 from "../../assets/images/about/casa/3-9-scaled.jpg";
import p2 from "../../assets/images/about/casa/construccion1-20-05-24_7549712_20240520221103.jpg";
import p3 from "../../assets/images/about/casa/pexels-bidvine-517980-1249611.jpg";
import p4 from "../../assets/images/about/casa/pexels-falling4utah-2724749.jpg";
import p5 from "../../assets/images/about/casa/pexels-life-of-pix-8092.jpg";

import e1 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 211620.png";
import e2 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 211714.png";
import e3 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 211852.png";
import e4 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 212121.png";
import e5 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 212204.png";
import e6 from "../../assets/images/about/Edificio/Captura de pantalla 2025-11-24 212237.png";

const About = () => {
  return (
    <section className="relative max-w-[100vw] overflow-hidden">
      {/* Hero */}
      <div className="screen-w-heather flex flex-row overflow-hidden">
        <img
          src={hero}
          alt=""
          className="w-[60%] h-auto object-cover object-[80%_-10%]"
        />
        <img src={logo} alt="" className="w-[32%] h-auto object-contain" />
      </div>

      {/* Vertical Building */}
      <img
        src={buildingVertical}
        alt=""
        className="absolute w-[35vw] object-contain right-[-8vw] top-[87vh]"
      />

      {/* Quienes Somos */}
      <QuienesSomos />

      {/* Conoce al Equipo */}
      <ConoceAlEquipo />

      {/* Construyamos */}
      <Construyamos />

      <div className="h-[10vh]"></div>
      <ProjectCarousel
        data={[
          {
            title: "Edificio",
            subtitle: "Edificio de 7 niveles - 4,500 m² de construcción",
            images: [
              { src: e1 },
              { src: e2 },
              { src: e3 },
              { src: e4 },
              { src: e5 },
              { src: e6 },
            ],
          },
          {
            title: "Casa FR",
            subtitle: "Casa de 2 niveles - 270 m2 de construcción",
            images: [
              { src: p1 },
              { src: p2 },
              { src: p3 },
              { src: p4 },
              { src: p5 },
            ],
          },
        ]}
      />
    </section>
  );
};
export default About;
