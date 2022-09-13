import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import "../src/Pages/Home/HomeCSS/Custom.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
