import Button from "./Button";
import logo from "../assets/images/logos/footer-logo.png";
import insta from "../assets/images/icons/insta.svg";
import face from "../assets/images/icons/facebook.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import map from "../assets/images/icons/location-stroke.svg";
import phone from "../assets/images/icons/phone-stroke.svg";
import mail from "../assets/images/icons/mail-stroke.svg";
import linkedinStroke from "../assets/images/icons/linkedin-stroke.svg";

const Footer = () => {
  return (
    <footer
      className={`
        bg-primary text-white
        mx-auto h-[200px] w-[100vw] px-[4vw] py-8 md:py-10
        flex flex-row gap-8 
      `}
    >
      {/* Left: Logo + Contact */}
      <div className="flex items-center gap-[4vw] md:w-1/3">
        <img src={logo} className="h-[80%] w-auto" />

        <ul className="space-y-2 text-sm text-white/90">
          <li className="flex items-center gap-2">
            <img src={map} className="h-5 w-5" alt="" />
            <span>Guatemala, zona 10</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={phone} className="h-5 w-5" alt="" />
            <span>514-343-6111 x:0646</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={mail} className="h-5 w-5" alt="" />
            <span>RealMateGT@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={linkedinStroke} className="h-5 w-5" alt="" />
            <span>Contáctanos en Linkedin</span>
          </li>
        </ul>
      </div>

      {/* Middle: Links */}
      <nav className="md:w-1/3">
        <ul className="space-y-4 py-2 font-gill h-full text-sm tracking-wide text-white">
          <li>
            <a className="hover:text-white" href="/download">
              PREGUNTAS FRECUENTES
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="/download">
              DESCARGA LA APLICACIÓN
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              TÉRMINOS Y CONDICIONES
            </a>
          </li>
        </ul>
      </nav>

      {/* Right: CTA + Socials */}
      <div className="flex flex-col items-start gap-4 md:w-1/3 md:items-end">
        <Button text="Se parte de RealMate" colorCombination="primary" />

        <div className="flex items-center gap-3">
          <a href="">
            <img src={insta} alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="">
            <img src={face} alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="">
            <img src={linkedin} alt="Instagram" className="h-10 w-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
