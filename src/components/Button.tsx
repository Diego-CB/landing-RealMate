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
  secondary: "bg-quintary text-secundary ",
};

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
        flex items-center justify-center gap-2
        px-4 py-2 rounded-xl
        font-arial font-semibold
        ${className}
      `}
    >
      {logo && (
        <span className="w-5 h-5 flex items-center justify-center">{logo}</span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default Button;
