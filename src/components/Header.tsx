import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import logo from "../assets/header-logo.png";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-[8vh] bg-primary">
      <img src={logo} alt="Realmate" />

      {/* Link Buttons */}
      <div>
        <Button
          text="Comprar"
          logo={<FiLogIn />}
          onClick={() => navigate("/sales")}
        />

        <Button
          text="Quienes somos"
          logo={<FiLogIn />}
          onClick={() => navigate("/about")}
        />

        <Button
          text="Regístrate"
          logo={<FiLogIn />}
          onClick={() => navigate("/about")}
        />

        <Button
          text="Log-in"
          colorCombination="secondary"
          logo={<FiLogIn />}
          onClick={() => navigate("/about")}
        />
      </div>
    </nav>
  );
};

export default Header;
