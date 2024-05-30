import "./header.css";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setModalVisible(true);
  };

  const handleClickRodal = () => {
    navigate("/");
  };

  return (
    <div className="header_page">
      <button className="menu-btn">
        <IoMenu className="menu" />
      </button>
      <button className="logout-btn" onClick={handleClick}>
        <MdLogout className="logout" />
      </button>

      <Rodal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        width={600}
        height={180}
      >
        <h4 className="modal-h2">Platformadan chiqishni xohlaysizmi?</h4>
        <div className="modal-btn">
          <button
            className="btn-modal-btn1"
            onClick={() => setModalVisible(false)}
          >
            Yo'q
          </button>
          <button className="btn-modal-btn2" onClick={handleClickRodal} >
            Ha
          </button>
        </div>
      </Rodal>
    </div>
  );
};

export default Header;
