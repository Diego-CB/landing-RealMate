import { useNavigate } from "react-router-dom";
import back from "../assets/images/icons/back-arrow.svg";

type Props = {
  className?: string;
  href?: string;
};

const BackButton = ({ className = "", href }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (href ? navigate(href) : navigate(-1))}
      className={`flex flex-row gap-6 items-center justify-center cursor-pointer ${className}`}
    >
      <img src={back} alt="" className="h-7" />
      <h3 className="font-gill text-2xl text-white text-">Atrás</h3>
    </button>
  );
};

export default BackButton;
