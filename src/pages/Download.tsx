import DownloadBanner from "../components/DownloadBanner";
import back from "../assets/images/icons/back-arrow.svg";

const Download = () => (
  <div>
    <DownloadBanner>
      <a href="/" className="absolute left-10 bottom-[2vh] flex flex-row">
        <img src={back} alt="" />
        <h3 className="font-gill font-bold text-2xl text-white text-">Atrás</h3>
      </a>
    </DownloadBanner>
  </div>
);
export default Download;
