import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
