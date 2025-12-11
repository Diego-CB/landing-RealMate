import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoNewspaper } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import logo from "../assets/images/logos/header-logo.png";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`
        bg-primary w-full h-[110px]
        grid grid-cols-[20vw_1fr_1fr]
        px-[4vw]
      `}
    >
      {/* Logo */}
      <button
        className="cursor-pointer flex items-center justify-start"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Realmate"
          className="h-[55px] w-auto object-contain bg-transparent"
        />
      </button>

      <div />

      {/* Link Buttons */}
      <div className="h-full flex items-center justify-end gap-4">
        <Button
          text="Comprar"
          logo={<MdKey className="full-size " />}
          onClick={() => navigate("/sales")}
        />

        <Button
          text="Quienes somos"
          logo={<FaRegUserCircle className="full-size" />}
          onClick={() => navigate("/about")}
        />

        <Button
          text="Regístrate"
          logo={<IoNewspaper className="full-size" />}
          onClick={() => navigate("/register")}
        />

        <Button
          text="Log-in"
          colorCombination="secondary"
          logo={<FiLogIn className="full-size" />}
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
};

export default Header;
