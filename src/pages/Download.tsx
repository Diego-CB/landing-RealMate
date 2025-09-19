import DownloadBanner from "../components/DownloadBanner";
import BackButton from "../components/BackButton";

const Download = () => (
  <DownloadBanner fullpage>
    <BackButton className="absolute left-10 bottom-[5vh]" />
  </DownloadBanner>
);
export default Download;
