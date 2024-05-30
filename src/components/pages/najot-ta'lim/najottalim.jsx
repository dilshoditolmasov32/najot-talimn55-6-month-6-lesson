import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import "./najottalim.css";
const Najottalim = () => {
  return (
    <div className="main_layout">
      <Sidebar />

      <main className="main_page">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Najottalim;
