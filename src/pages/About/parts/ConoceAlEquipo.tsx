import ContactCard from "../components/ContactCard";
import jessica from "../../../assets/images/about/jessica.png";
import alejandro from "../../../assets/images/about/alejandro.webp";

const ConoceAlEquipo = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-evenly">
      <h2 className="text-secundary font-semibold text-7xl">
        CONOCE AL EQUIPO
      </h2>

      <div className="flex flex-row justify-center gap-[5%]">
        <ContactCard
          info={{
            name: "Jessica Gómez",
            role: "DIRECTORA DE MERCADEO",
            bio:
              "Profesional en mercadeo con más de 5 años de experiencia en el sector inmobiliario. " +
              "Especialista en estrategias digitales y posicionamiento de marca.",
            phone: "4987-5487",
            email: "jessica.realmate@gmail.com",
          }}
          photo={{
            src: jessica,
            alt: "",
          }}
          // className="right-[5%] bg-[rgba(255,0,0,0.5)]"
        />

        <ContactCard
          info={{
            name: "Alejandro López",
            role: "ASESOR DE VENTAS",
            bio:
              "Profesional en mercadeo con más de 5 años de experiencia en el sector inmobiliario. " +
              "Especialista en estrategias digitales y posicionamiento de marca.",
            phone: "6404-96287",
            email: "alejandro.realmate@gmail.com",
          }}
          photo={{
            src: alejandro,
            alt: "",
          }}
          // className="right-[5%]"
        />
      </div>
    </div>
  );
};

export default ConoceAlEquipo;
