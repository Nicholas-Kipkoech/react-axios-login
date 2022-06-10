import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
const home = () => {
  return (
    <div className="container">
      <div className="card">
        <Navbar />
        <div className="card-body">
          <div className="card-text">Hello this is dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default home;
