import logoDark from "../../../assets/images/logos/logo-dark.svg";
import innova from "../../../assets/images/about/INNOVA-nobg.png";
import innovaLogo from "../../../assets/images/about/INNOVA-03.svg";
import Button from "../../../components/Button";
import phone from "../../../assets/images/icons/phone-stroke.svg";
import mail from "../../../assets/images/icons/mail-stroke.svg";
import { FaInstagram } from "react-icons/fa";

const navigateTo = (url: string) => {
  window.location.href = url;
};

const Construyamos: React.FC = () => {
  return (
    <div className="w-full h-[110vh] block">
      <img
        src={innova}
        alt=""
        className="absolute w-auto h-[110vh] left-[-20%] object-contain"
      />

      <div className="pl-[30vw] w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-row items-center justify-start gap-[1vw]">
          <img src={logoDark} className="h-[7vh] w-auto" alt="" />
          <h2 className="text-primary font-semibold text-7xl">CONSTRUYAMOS</h2>
        </div>

        <div className="w-full flex flex-col text-2xl items-center text-left text-secundary pl-[6%] ">
          <div className="w-full flex flex-col gap-[2vh]">
            <h3 className="text-text-light text-4xl">
              JUNTOS TU PRÓXIMO PROYECTO
            </h3>
            <p className="w-[70%]">
              En INNOVA te acompañamos desde la idea hasta la entrega final.
              Diseñamos, gestionamos y edificamos, siempre con soluciones
              innovadoras que se adaptan a tus necesidades.
            </p>
            <p>Contáctanos:</p>

            <div className="flex flex-row gap-[1vw]">
              <Button
                className="text-sm bg-text-light rounded-[20%]"
                icon={mail}
                text="innovaviviendoconstruccion@gmail.com"
                onClick={() =>
                  navigateTo(
                    "mailto:innovaviviendoconstruccion@gmail.com?subject=&body="
                  )
                }
              />
              <Button
                className="text-sm bg-text-light rounded-[20%]"
                icon={phone}
                text="+502 5421-0085"
              />
              <Button
                className="text-sm bg-text-light rounded-[20%]"
                logo={<FaInstagram />}
                text="@innovaviviendoconstruccion"
                onClick={() =>
                  navigateTo(
                    "https://www.instagram.com/innovaviviendoconstruccion/"
                  )
                }
              />
            </div>

            <div className="w-[70%] flex justify-center">
              <img src={innovaLogo} alt="" className="w-[80%] h-auto" />
            </div>
          </div>

          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Construyamos;
