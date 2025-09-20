import building from "../../assets/images/register/building-register.png";
import Button from "../../components/Button";
import DropDownCard from "../../components/DropDownCard";
import TextPart from "../../components/TextPart";

const FrequentQuestions = () => {
  return (
    <section className="w-full py-15 flex flex-row overflow-hidden">
      {/* Imagen */}
      <div className="w-1/3">
        <img
          src={building}
          alt="Building"
          className="w-[150%] h-[150%] object-cover object-[80%_-100%]"
        />
      </div>

      {/* Contenido */}
      <div className="w-2/3 flex flex-col justify-center text-left pl-10">
        {/* Títulos */}
        <h1 className="text-9xl font-extrabold text-primary">REGÍSTRATE</h1>
        <h2 className="text-7xl font-semibold text-secundary mb-4">
          Y SE PARTE DE REALMATE
        </h2>
        <p className="text-secundary text-xl w-[75%]">
          Ya seas propietario, agente o comprador, en Realmate tienes una
          plataforma intuitiva a tu alcance desde el primer clic.
        </p>

        <div className="w-full flex flex-row justify-end pr-[18%] translate-y-[-50%]">
          <Button
            href="/login"
            text="Se parte de Realmate"
            className="w-[25%]"
          />
        </div>

        {/* Acordeones */}
        <div className="mt-[5vh] flex flex-col gap-[2vh]">
          <DropDownCard text="¿SOY PROPIETARIO?">
            <TextPart
              title="¿Cómo puedo agregar mis inmbuebles?"
              text="Es muy fácil. Solo debes registrarte en nuestra plataforma,
              ingresar a tu panel de usuario y hacer clic en “Publicar
              propiedad”. Podrás cargar fotos, características, ubicación y
              precio en menos de 5 minutos."
            />

            <TextPart
              title="¿Cómo contacto a un asesor RealMate?"
              text="Una vez publicada tu propiedad, puedes solicitar acompañamiento
              personalizado desde tu panel. También puedes escribirnos
              directamente a través del chat en la plataforma o en nuestra
              sección de contacto."
            />

            <TextPart
              title="Beneficios para propietarios:"
              list={[
                "Publicación gratuita o destacada según el paquete elegido",
                "Control total sobre tus inmuebles desde un solo lugar",
                "Exposición ante miles de usuarios activos",
                "Asesoría inmobiliaria profesional (opcional)",
                "Herramientas para agendar visitas, recibir mensajes y cerrar tratos",
              ]}
            />
          </DropDownCard>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
