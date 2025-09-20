import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text: string;
  logo?: React.ReactNode; // Aquí puedes pasar un ícono o imagen
  onClick?: () => void;
  className?: string;
  colorCombination?: "primary" | "secondary";
  href?: string;
};

const colorCombinations = {
  primary: "bg-secundary text-white ",
  secondary: "bg-white text-secundary ",
};

//TODO ver animación de hover con nats
const Button: React.FC<ButtonProps> = ({
  text,
  logo,
  onClick,
  className = "",
  colorCombination = "primary",
  href,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) return navigate(href);
    if (onClick) return onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${colorCombinations[colorCombination]}
        font-gill 
        flex items-center justify-center
        min-w-[50px]
        px-[20px] py-[6px] rounded-lg
        cursor-pointer 
        ${className}
      `}
    >
      <div className="flex items-center justify-center gap-2 w-full h-[22px]">
        {logo && (
          <span className="flex items-center justify-center h-[20px] w-[30px] ">
            {logo}
          </span>
        )}
        <span className="whitespace-nowrap">{text}</span>
      </div>
    </button>
  );
};

export default Button;
