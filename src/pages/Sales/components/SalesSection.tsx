import Button from "../../../components/Button";

type Props = {
  title: string;
  subtitle: string;
  children: string;
  className?: string;
};

const SalesSection: React.FC<Props> = ({
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <div className={`flex flex-row ${className}`}>
      <div className="w-[65%] px-15 text-left">
        <h1 className="text-primary text-8xl">{title}</h1>
        <h2 className="text-secundary text-6xl">{subtitle}</h2>
        <p className="text-secundary text-2xl">{children}</p>
      </div>

      <div className="w-[35%] py-5 flex justify-center items-start">
        <Button
          href="/login"
          text="Se parte de Realmate"
          className="w-[55%] px-10 h-11 text-xl"
        />
      </div>
    </div>
  );
};

export default SalesSection;
