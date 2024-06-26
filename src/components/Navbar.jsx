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
    <div className="navbar mt-1 ml-6 mr-6 lg:ml-28 lg:mr-28">
      <div className="flex justify-between items-baseline">
        <div className="logo text-4xl md:text-5xl font-medium">
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
        <div className="menu-card text-3xl mt-1 mb-2">
          <div className="close w-screen">
            <div className="flex flex-row justify-between items-center">
              <div className="logo text-4xl ml-6 md:text-5xl font-medium">
                <Link className="">vritta</Link>
              </div>
              <p className="mr-4 cursor-pointer" onClick={toggleActiveClass}>
                X
              </p>
            </div>
            <Link
              className="flex flex-row justify-between ml-3 mr-3 items-center"
              to={`/`}
            >
              <p className="items">home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <hr />
            <Link
              className="flex flex-row justify-between ml-3 mr-3 items-center"
              reloadDocument
              to={`/category/technology`}
            >
              <p className="items">tech</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <hr />
            <Link
              className="flex flex-row justify-between ml-3 mr-3 items-center"
              reloadDocument
              to={`/category/health`}
            >
              <p className="items">health</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <hr />
            <Link
              className="flex flex-row justify-between ml-3 mr-3 items-center"
              reloadDocument
              to={`/category/sports`}
            >
              <p className="items">sports</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <hr />
            <Link
              className="flex flex-row justify-between ml-3 mr-3 items-center"
              reloadDocument
              to={`/category/business`}
            >
              <p className="items">business</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
