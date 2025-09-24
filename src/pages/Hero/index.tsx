import HeroImage from "./components/HeroImage";
import FeaturedAgents from "./components/FeaturedAgents";

import MiddleSection from "./components/MiddleSection";
import DownloadBanner from "../../components/DownloadBanner";
import { agents } from "../../mock/agents";

import hero1 from "../../assets/images/hero/hero-1.png";
import hero2 from "../../assets/images/hero/hero-2.png";
import hero3 from "../../assets/images/hero/hero-3.png";

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

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* First Section */}
      <HeroImage images={[hero1, hero2, hero3]} heroInfo={heroInfo} />

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
