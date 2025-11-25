import banner from "../assets/images/banner-download.png";
import bannerFull from "../assets/images/banner-download-big.png";
import logo from "../assets/images/logos/logo-download.png";

import insta from "../assets/images/icons/insta.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import face from "../assets/images/icons/facebook.svg";

import playstore from "../assets/images/download/google-play-badge-2.png";
import appstore from "../assets/images/download/2560px-Download_on_the_App_Store_Badge_ESMX_RGB_blk.svg_.png";

type Props = {
  className?: string;
  children?: React.ReactNode;
  fullpage?: boolean;
};

const DownloadBanner = ({ className, children, fullpage = false }: Props) => {
  const bannerUri = fullpage ? bannerFull : banner;
  const bannerAR = fullpage ? 1755 / 579 : 1278 / 620;
  const bannerHeight = 100 / bannerAR;

  return (
    <div
      style={{
        backgroundImage: `url(${bannerUri})`,
        height: `${bannerHeight}vw`,
      }}
      className={`relative w-[110vw] left-[-2%] bg-no-repeat bg-cover bg-center max-h-[100vh] ${className}`}
    >
      {/* Logo and Social */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center gap-[2vh]">
        <img src={logo} className="h-[45%] w-auto" alt="Real Mate" />

        <div className="flex flex-row gap-[2vh]">
          <a href="#">
            <img src={insta} className="h-[8vh] w-auto" alt="Instagram" />
          </a>
          <a href="#">
            <img src={face} className="h-[8vh] w-auto" alt="Facebook" />
          </a>
          <a href="#">
            <img src={linkedin} className="h-[8vh] w-auto" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* App Download */}
      <div className="absolute bottom-[40%] right-[10%] flex flex-col gap-2">
        <h3 className="text-secundary text-2xl text-left pl-2 font-gill">
          Descarga la App:
        </h3>

        <a href="#">
          <img src={playstore} className="w-[15vw] h-auto" alt="Google Play" />
        </a>

        <a href="#">
          <img src={appstore} className="w-[15vw] h-auto" alt="App Store" />
        </a>
      </div>

      {children}
    </div>
  );
};
export default DownloadBanner;
