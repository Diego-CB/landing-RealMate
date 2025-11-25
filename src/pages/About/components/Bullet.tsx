import logo from "../../../assets/images/logos/logo-dark.svg";

type Props = {
  title: string;
  children: string;
};

const Bullet = ({ title, children }: Props) => {
  return (
    <div className="w-full flex flex-row">
      <img src={logo} alt="" className="h-full w-7 object-top object-contain" />

      <div className="flex flex-col grow-1 text-left pl-7">
        <h3 className="text-primary font-champ font-bold text-3xl">{title}</h3>
        <p className="text-secundary text-2xl">{children}</p>
      </div>
    </div>
  );
};

export default Bullet;
