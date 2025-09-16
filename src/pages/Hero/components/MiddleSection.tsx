import building from "../../../assets/images/hero/building-vertical.png";

const MiddleSection = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row">
      <div className="w-1/3 h-full flex items-end">
        <img src={building} alt="" />
      </div>

      <div
        className={`
          w-2/3 h-full gap-[3%] pb-[8%]
          flex flex-col items-center justify-end
          text-secundary font-champ text-left
        `}
      >
        <h1 className="text-7xl italic font-extralight px-[10%]">
          "Realmate: Tecnología, Confianza y Resultados Inmobiliarios"
        </h1>

        <span className="w-3/4 pl-0 flex flex-row gap-[5%]">
          <h1 className="text-7xl text-text-light">9.8%</h1>
          <p className="font-champ font-[400] text-3xl flex items-center justify-center">
            de los agentes inmobililiarios en Guatemala recomiendan RealMate.
          </p>
        </span>

        <span className="w-3/4 pl-0 flex flex-row gap-[5%]">
          <h1 className="text-7xl text-text-light">+1,200</h1>
          <p className="font-champ font-extrabold text-3xl flex items-center justify-center">
            Propiedades han sido compradas gracias a Realmate
          </p>
        </span>

        <span className="w-3/4 pl-0 flex flex-row gap-[5%]">
          <h1 className="text-7xl text-text-light">100%</h1>
          <p className="font-champ font-extrabold text-3xl flex items-center justify-center">
            de nuestros clientes prefieren usar Realmate por su seguridad
          </p>
        </span>
      </div>
    </div>
  );
};

export default MiddleSection;
