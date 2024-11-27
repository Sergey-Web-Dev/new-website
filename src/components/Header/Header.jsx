import Navbar from "../Navbar/Navbar";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Navbar className={"navbar"} />
    </header>
  );
};

export default Header;
