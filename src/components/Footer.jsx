import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="lg:pl-28 lg:pr-28">
        <div className="footer flex-col pt-5 pb-5 items-center text-center lg:flex-row lg:justify-between">
          <div className="logo text-4xl lg:text-left text-background">
            vritta
          </div>
          <div className="tabs flex-col lg:w-auto lg:flex-row">
            <Link to={`/`}>
              <p className="tab max-md:pl-0">home</p>
            </Link>
            <Link reloadDocument to={`/category/technology`}>
              <p className="tab max-md:pl-0">technology</p>
            </Link>
            <Link reloadDocument to={`/category/health`}>
              <p className="tab max-md:pl-0">health</p>
            </Link>
            <Link reloadDocument to={`/category/sports`}>
              <p className="tab max-md:pl-0">sports</p>
            </Link>
            <Link reloadDocument to={`/category/business`}>
              <p className="tab max-md:pl-0">business</p>
            </Link>
          </div>
        </div>
        <div className="creds text-center">
          <p className="cred">made with ❤️ in India</p>
          <p className="cred">©️ copyrights by RJ Enterprises</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
