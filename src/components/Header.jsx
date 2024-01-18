import logo from "../assets/react.svg";

const Header = () => {
  return (
    <div>
      <div className="logo-wrapper">
        <img src={logo} className="logo react" alt="React logo" />
        <h1>React Quiz</h1>
      </div>
    </div>
  );
};

export default Header;
