import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "../../../assets/images/logo.png";
import { MdGroups, MdOutlineSettings, MdOutlinePayment, MdHome } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { CgPoll } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="sidebar-page">
      <span className="logo_najot">
        <NavLink to={"https://najottalim.uz/"}>
          <img src={logo} alt="najot-logo" style={{ width: 180 }} />
        </NavLink>
      </span>
      <ul>
        <li>
          <NavLink to="/najottalim">
            <span>
              <MdHome />
            </span>
            Bosh sahifa
          </NavLink>
        </li>
        <li>
          <NavLink to="/najottalim/payments">
            <span>
              <MdOutlinePayment />
            </span>
            To'lovlarim
          </NavLink>
        </li>
        <li>
          <NavLink to="/najottalim/my-group">
            <span>
              <MdGroups />
            </span>
            Guruhlarim
          </NavLink>
        </li>
        <li>
          <NavLink to="/najottalim/pointers">
            <span>
              <CgPoll />
            </span>
            Ko'rsatgichlarim
          </NavLink>
        </li>
        <li>
          <NavLink to="/najottalim/rating">
            <span>
              <FiBarChart2 />
            </span>
            Reyting
          </NavLink>
        </li>
        <li>
          <NavLink to="/najottalim/profile">
            <span>
              <MdOutlineSettings />
            </span>
            Sozlamalar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
