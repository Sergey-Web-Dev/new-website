import Lists from "../Lists/Lists";
import { MockOfferData, mockOffersData2 } from "../constants/mockData";

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <div className="mx-14 my-6 px-4 flex justify-between flex-wrap">
        <a href="../../index.tsx">
          <img src="/IMAGE.png" alt="logo.png"></img>
        </a>
        <Lists
          className={"navbar__lists flex justify-between items-center gap-14"}
          data={MockOfferData}
        />
        <Lists
          className={"navbar__lists flex justify-between items-center"}
          data={mockOffersData2}
        />
      </div>
    </nav>
  );
};

export default Navbar;
