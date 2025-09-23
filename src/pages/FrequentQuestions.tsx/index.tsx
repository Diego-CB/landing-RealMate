import houseLeft from "../../assets/images/frequentQuestions/house-left.png";
import DropDownCard from "../../components/DropDownCard";
import TextPart from "../../components/TextPart";
import Bullet from "./components/Bullet";
import phone from "../../assets/images/icons/phone-light.svg";
import mail from "../../assets/images/icons/mail-light.svg";
import house from "../../assets/images/frequentQuestions/house-banner.png";

const FrequentQuestions = () => {
  return (
    <section className="w-full flex flex-col">
      {/* First Section */}
      <div className="w-full screen-w-heather pt-10 flex flex-row">
        <img
          src={houseLeft}
          alt=""
          className="w-1/3 h-full object-contain pt-[2%] pr-[2%] object-top"
        />

        <div className="h-full w-2/3 flex flex-col">
          {/* title */}
          <div className="w-full h-[25%] flex flex-col items-center ">
            <h1 className="text-8xl font-champ font-light text-primary">
              PREGUNTAS
            </h1>
            <h2 className="text-5xl font-extrabold text-primary">FRECUENTES</h2>
            <div className="h-[3.5px] w-[16%] rounded-4xl mt-1 bg-secundary" />
          </div>

          {/* Bullets */}
          <div className="w-full h-[75%] px-[10%] flex flex-col gap-10 pt-10">
            <Bullet title="¿Qué es RealMate y cómo funciona?">
              Es una plataforma digital que facilita comprar, vender y alquilar
              propiedades de forma rápida y segura.
            </Bullet>

            <Bullet title="¿Necesito pagar por usar la plataforma?">
              Es una plataforma digital que facilita comprar, vender y alquilar
              propiedades de forma rápida y segura.
            </Bullet>

            <Bullet title="¿Es seguro compartir mis datos personales?">
              Sí, protegemos tu información con protocolos de seguridad
              avanzados dentro de nuestra aplicación.
            </Bullet>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full px-[12%] flex flex-col gap-3 text-left">
        <h1 className="font-extrabold text-primary text-4xl">
          PREGUNTAS FRECUENTES DE NUESTROS USUARIOS
        </h1>
        <p className="text-secundary text-2xl">
          Aquí encontrarás las respuestas a las inquietudes más frequentes de
          nuestros usuarios. Si no ves tu pregunta aquí, no te preocupes, puedes
          escribirnos directamente y con gusto te ayudaremos.
        </p>

        <div className="w-full flex flex-row items-center gap-8">
          <div className="flex flex-row h-8 items-center gap-4">
            <img src={phone} alt="" className="h-[75%]" />
            <p className="text-text-light align-middle text-center">
              514-343-6111 x:0646
            </p>
          </div>

          <div className="flex flex-row h-8 items-center gap-4">
            <img src={mail} alt="" className="h-[75%]" />
            <p className="text-text-light">RealMateGT@gmail.com</p>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="mt-[5vh] flex flex-col gap-[2vh]">
          <DropDownCard
            text="PARA PROPIETARIOS"
            className="w-full text-xl"
            btnClassName="pl-20 pr-10 py-2.5"
          >
            <TextPart
              title="¿Cómo publico una propiedad en la plataforma?"
              text="Solo crea una cuenta, accede a tu panel y sigue los pasos para subir fotos y detalles."
            />
            <TextPart
              title="¿Puedo editar o eliminar una propiedad después de publicarla?"
              text="Sí, puedes modificar o eliminar tus anuncios cuando quieras desde tu panel."
            />
            <TextPart
              title="¿Cómo sé si alguien está interesado en mi propiedad?"
              text="Recibirás notificaciones por mensajes en el chat del app o solicitudes que puedes ver desde tu perfil."
            />
          </DropDownCard>

          <DropDownCard
            text="PARA COMPRADORES/INQUILINOS"
            className="w-full text-xl"
            btnClassName="pl-20 pr-10 py-2.5"
          >
            <TextPart
              title="¿Cómo encuentro propiedades que se ajusten a mis preferencias?"
              text="Usa nuestros filtros de búsqueda por ubicación, precio, tipo y más."
            />
            <TextPart
              title="¿Puedo contactar directamente al propietario o agente?"
              text="Sí, la plataforma facilita el contacto directo para agendar visitas o resolver dudas."
            />
            <TextPart
              title="¿Necesito crear una cuenta para ver propiedades?"
              text="No es obligatorio pero contarás con un acceso limitado a nuestras propiedades. Adicional, tener en cuenta que no te permite guardar favoritos, recibir alertas, hacer ofertas o contactar con los asesores inmobiliarios."
            />
          </DropDownCard>

          <DropDownCard
            text="PARA AGENTES INMOBILIARIOS"
            className="w-full text-xl"
            btnClassName="pl-20 pr-10 py-2.5"
          >
            <TextPart
              title="¿Cómo puedo registrarme como agente Realmate?"
              text="Regístrate en la sección de agentes y envía tu solicitud para ser aprobado."
            />
            <TextPart
              title="Qué beneficios tengo como asesor registrado?"
              text="Acceso a clientes calificados, herramientas para gestionar propiedades y mayor visibilidad."
            />
            <TextPart
              title="¿Puedo publicar propiedades de mis clientes?"
              text="Sí, puedes gestionar y publicar inmuebles de tus clientes desde tu panel."
            />
          </DropDownCard>

          <DropDownCard
            text="PLANES Y PRECIOS DE REALMATE"
            className="w-full text-xl"
            btnClassName="pl-20 pr-10 py-2.5"
          >
            <TextPart
              title="¿Qué incluyen los planes de pago?"
              text="Varían según el plan: más publicaciones, mayor visibilidad y soporte personalizado."
            />
            <TextPart
              title="¿Puedo cambiar de plan en cualquier momento?"
              text="Sí, puedes actualizar o cancelar tu plan cuando quieras."
            />
            <TextPart
              title="¿Se renuevan automáticamente los planes?"
              text="Sí, los planas se renuevan automáticamente salvo que canceles antes."
            />
          </DropDownCard>
        </div>
      </div>

      <img src={house} alt="" className="w-full h-auto" />
    </section>
  );
};

export default FrequentQuestions;
