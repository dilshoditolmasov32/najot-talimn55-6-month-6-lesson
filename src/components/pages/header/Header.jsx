import "./header.css";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useState } from "react";

const Header = () => {
  const [onVisible, setOnVisible] = useState(false);
  // function handleClose() {
  //   console.log("ok");
  // }
  return (
    <div className="header_page">
      <button className="menu-btn">
        <IoMenu className="menu" />
      </button>
      <button className="logout-btn">
        <MdLogout className="logout" />
      </button>

      <Rodal>
        <div>Content</div>
      </Rodal>
    </div>
  );
};

export default Header;
