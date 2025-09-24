import BackButton from "../components/BackButton";
import DownloadBanner from "../components/DownloadBanner";

const About = () => {
  return (
    <DownloadBanner fullpage>
      <BackButton className="absolute left-10 bottom-[5vh]" />
    </DownloadBanner>
  );
};
export default About;
