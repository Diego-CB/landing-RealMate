import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <nav>
        <Link to="/">Hero</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
};
export default Footer;
