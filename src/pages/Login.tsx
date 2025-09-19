import BackButton from "../components/BackButton";
import location from "../assets/images/login/location.svg";
import triangle from "../assets/images/login/triangle.png";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-login-bg">
      <BackButton className="absolute top-[20vh] left-10" />

      <div className="h-[80%] w-full pt-[3%] flex flex-col justify-start items-center">
        <img src={location} alt="" className="h-[20%] w-auto" />

        <img
          src={triangle}
          alt=""
          className="absolute w-full object-cover h-auto top-[calc(110px+25%)]"
        />

        <div className="w-full h-[50%] flex flex-col justify-start items-center z-10 mt-[8%]">
          <h2 className="text-white font-gill text-2xl font-bold py-[2%]">
            Comienza tu búsqueda
          </h2>

          <div className="grow-1 flex flex-col gap-[10%]">
            <Button
              text="Inicia sesión"
              colorCombination="secondary"
              className="w-[18vw] py-[10px] text-2xl"
            />
            <Button text="Regístrate" className="w-[18vw] py-[10px] text-2xl" />

            <h2 className="font-gill font-bold text-xl">Explorar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
