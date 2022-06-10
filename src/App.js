import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/Home" component={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
