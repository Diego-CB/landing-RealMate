import { ItemsCarousel } from "../../components/ItemCarrousel";
import { items } from "../../mock/properties";
import Photo360 from "./components/Photo360";
import SalesSection from "./components/SalesSection";

const Sales = () => {
  return (
    <div className="w-full overflow-hidden">
      <Photo360 />

      <div className="py-[10vh]">
        <SalesSection title="COMPRAR" subtitle="CON CONFIANZA" innova>
          Compra inmuebles en Guatemala de forma fácil y segura desde nuestra
          app. Accede a una amplia selección de propiedades y recibe asesoría
          personalizada de los mejores agentes inmobiliarios del país. Todo el
          proceso, desde la búsqueda hasta la compra, en un solo lugar.
        </SalesSection>

        <ItemsCarousel items={[...items, ...items]} className="px-15" />
      </div>

      <div className="py-[10vh]">
        <SalesSection title="ALQUILA" subtitle="CON TRANQUILIDAD">
          Encuentra tu próximo hogar o espacio idal para alquilar en Guatemala
          con el respaldo de agentes inmobiliarios expertos. Explora opciones
          verificadas desde nuestra app y gestiona todo el proceso de forma
          ágil, clara y sin complicaciones.
        </SalesSection>

        <ItemsCarousel items={[...items, ...items]} className="px-15" />
      </div>
    </div>
  );
};
export default Sales;
