import logoDark from "../../../assets/images/logos/logo-dark.svg";

const QuienesSomos = () => {
  return (
    <div className="w-full h-[75vh] flex justify-start items-center">
      <div className="w-[65%] h-full py-[4%] px-[5%] flex flex-col justify-center gap-[4%] items-center text-secundary text-left font-gill">
        <div className="w-full flex flex-row items-center justify-start gap-[4vw]">
          <img src={logoDark} className="h-[8vh] w-auto" alt="" />
          <h2 className="font-semibold text-7xl">¿QUIÉNES SOMOS?</h2>
        </div>

        <p className="text-2xl">
          Somos una plataforma digital que funciona como un agente inmobiliario
          virtual, diseñada para facilitar la compra, venta y alquiler de
          propiedades de manera eficiente y segura. Con tecnología intuitiva y
          asesoría personalizada, conectamos a usuarios con oportunidades
          inmobiliarias en tiempo real, optimizando cada etapa del proceso desde
          un solo lugar.
        </p>

        <div className="w-full">
          <h3 className="text-4xl font-semibold">Permite a usuarios:</h3>
          <p className="text-3xl font-champ">
            Publicar y gestionar propiedades para venta o alquiler.
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-4xl font-semibold">Permite a compradores:</h3>
          <p className="text-3xl font-champ">
            Encontrar propiedades por ubicación y preferencias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
