import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import About from "./about";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Link to="/home">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about">about</Link>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
