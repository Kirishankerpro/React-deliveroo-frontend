import "../assets/style/Header.css";
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
