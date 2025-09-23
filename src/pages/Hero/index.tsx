const heroInfo = [
  {
    title: "EXPLORA",
    subtTitle: "CON CONFIANZA",
    info: "Encuentra propiedades de form asegura y contacta con tus asesores verificados.",
    btnText: "Conoce más de Realmate",
  },
  {
    title: "VENDE",
    subtTitle: "CON TRANQUILIDAD",
    info: "Trabaja con tu asesor verificado para vender tu propuedad sin complicaciones.",
    btnText: "Se parte de Realmate",
  },
  {
    title: "COLABORA",
    subtTitle: "Y CRECE",
    info: "Conecta con otros profesionales del sector inmobiliario y trabaja en equipo.",
    btnText: "Se parte de Realmate",
  },
];

import hero1 from "../../assets/images/hero/hero-1.png";
import hero2 from "../../assets/images/hero/hero-2.png";
import hero3 from "../../assets/images/hero/hero-3.png";
import HeroImage from "./components/HeroImage";
import FeaturedAgents from "./components/FeaturedAgents";

const heroImages = [hero1, hero2, hero3];

import a1 from "../../assets/images/hero/agents/a1.png";
import a2 from "../../assets/images/hero/agents/a2.png";
import a3 from "../../assets/images/hero/agents/a3.png";
import a4 from "../../assets/images/hero/agents/a4.png";
import a5 from "../../assets/images/hero/agents/a5.png";
import MiddleSection from "./components/MiddleSection";
import DownloadBanner from "../../components/DownloadBanner";

const agents = [
  {
    id: 1,
    name: "Mario Hernández",
    role: "Asesor Inmobiliario",
    photo: a5,
  },
  {
    id: 2,
    name: "Lucía Gómez",
    role: "Asesor Inmobiliario",
    photo: a4,
  },
  { id: 4, name: "Carlos Méndez", role: "Asesor Inmobiliario", photo: a2 },
  { id: 3, name: "Fredy Hernandez", role: "Asesor Inmobiliario", photo: a3 },
  { id: 5, name: "Ana López", role: "Asesor Inmobiliario", photo: a1 },
];

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* First Section */}
      <HeroImage images={heroImages} heroInfo={heroInfo} />

      {/* Middle Section */}
      <MiddleSection />

      {/* Featured Agents */}
      <FeaturedAgents agents={agents} />

      {/* Mobile Downloads */}
      <DownloadBanner />
    </div>
  );
};

export default Hero;
