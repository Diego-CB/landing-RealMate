import back from "../assets/images/icons/back-arrow.svg";

type Props = {
  className?: string;
  href?: string;
};

const BackButton = ({ className = "", href = "/" }: Props) => (
  <a
    href={href}
    className={`flex flex-row gap-6 items-center justify-center ${className}`}
  >
    <img src={back} alt="" className="h-7" />
    <h3 className="font-gill text-2xl text-white text-">Atrás</h3>
  </a>
);

export default BackButton;
