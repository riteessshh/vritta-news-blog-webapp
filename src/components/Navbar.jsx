import React, { useState } from "react";
import img from "../assets/menuButton.svg";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => setIsActive(!isActive);

  const buttonStyle = {
    display: isActive ? "block" : "none",
  };

  return (
    <div className="navbar lg:ml-10 lg:mr-10">
      <div className="flex justify-between items-baseline">
        <div className="logo text-3xl md:text-5xl font-medium">
          <Link to={"/"}>vritta</Link>
        </div>
        <div className="menu-button cursor-pointer md:hidden">
          <img src={img} alt="MenuButton" onClick={toggleActiveClass} />
        </div>
        <div className=" w-1/3 md:w-96 md:text-lg justify-between hidden md:flex">
          <Link to={`/`}>
            <p className="items">home</p>
          </Link>
          <Link reloadDocument to={`/category/technology`}>
            <p className="items">tech</p>
          </Link>
          <Link reloadDocument to={`/category/health`}>
            <p className="items">health</p>
          </Link>
          <Link reloadDocument to={`/category/sports`}>
            <p className="items">sports</p>
          </Link>
          <Link reloadDocument to={`/category/business`}>
            <p className="items">business</p>
          </Link>
        </div>
      </div>
      <div
        className="card top-0 left-0 z-50 absolute w-screen bg-slate-400"
        style={buttonStyle}
      >
        <div className="flex-auto text-3xl p-4 m-2">
          <div className="close">
            <p onClick={toggleActiveClass}>X</p>
            <Link to={`/`}>
              <p className="items">home</p>
            </Link>
            <hr />
            <Link reloadDocument to={`/category/technology`}>
              <p className="items">tech</p>
            </Link>
            <hr />
            <Link reloadDocument to={`/category/health`}>
              <p className="items">health</p>
            </Link>
            <hr />
            <Link reloadDocument to={`/category/sports`}>
              <p className="items">sports</p>
            </Link>
            <hr />
            <Link reloadDocument to={`/category/business`}>
              <p className="items">business</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
