import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/images/logos/footer-logo.png";

type ContactLogoProps = {
  href: string;
  logo: React.ElementType;
};

const ContactLogos: React.FC<ContactLogoProps> = ({ href, logo: Logo }) => {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-md bg-quinary"
      aria-label="LinkedIn"
    >
      <Logo className="h-[85%] w-[85%] text-white" />
    </a>
  );
};

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
        {/* Logo */}
        <img src={logo} className="h-[80%] w-auto" />

        <ul className="space-y-2 text-sm text-white/90">
          <li className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-white" />
            <span>Guatemala, zona 10</span>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-white" />
            <span>514-343-6111 x:0646</span>
          </li>
          <li className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-white" />
            <span>RealMateGT@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <LinkedInIcon className="h-5 w-5 text-white" />
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
          <ContactLogos href="#" logo={InstagramIcon} />
          <ContactLogos href="#" logo={FacebookIcon} />
          <ContactLogos href="#" logo={LinkedInIcon} />
        </div>
      </div>
    </footer>
  );
};

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 5c0-1.1.9-2 2-2h2l2 4-2 2a16 16 0 0 0 8 8l2-2 4 2v2a2 2 0 0 1-2 2c-9.39 0-17-7.61-17-17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 17v-7M7 7.5h.01M11 17v-4.5a2 2 0 1 1 4 0V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Footer;
