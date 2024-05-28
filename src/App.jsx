import "./App.css";
import { Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import SignIn from "./components/login/SignIn";
import UserData from "./components/tableData/user/UserData";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="" element={<SignIn />} />
        <Route path="admin" element={<Content />} />
        <Route path="user" element={ <UserData/>} />
      </Routes>
    </>
  );
}

export default App;
