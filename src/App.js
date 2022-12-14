import React from "react";
import "./App.css";
import { Signup } from "./components/Signup";
import rocketImg from "./file/rocket.png";

export default function App() {
  return (
    <div className="container at-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
      </div>
    </div>
  );
}
