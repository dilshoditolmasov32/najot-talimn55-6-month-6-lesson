import "./App.css";
import { Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import SignIn from "./components/login/SignIn";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="" element={<SignIn />} />
        <Route path="admin" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;