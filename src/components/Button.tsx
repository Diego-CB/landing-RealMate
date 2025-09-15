import React from "react";

type ButtonProps = {
  text: string;
  logo?: React.ReactNode; // Aquí puedes pasar un ícono o imagen
  onClick?: () => void;
  className?: string;
  colorCombination?: "primary" | "secondary";
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
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${colorCombinations[colorCombination]}
        font-gill 
        flex items-center justify-center gap-2 
        min-w-[50px]
        px-[12px] py-1.5 rounded-lg
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
        <span className="whitespace-nowrap font-regular">{text}</span>
      </div>
    </button>
  );
};

export default Button;
