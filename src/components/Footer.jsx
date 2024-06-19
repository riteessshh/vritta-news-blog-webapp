import React from "react";

function Footer() {
  return (
    <div>
      <footer className="">
        <div className="footer flex-col pt-5 pb-5 items-center text-center lg:flex-row lg:justify-around">
          <div className="logo text-4xl text-background">vritta</div>
          <div className="tabs flex-col lg:w-84 lg:flex-row">
            <p className="tab">home</p>
            <p className="tab">news</p>
            <p className="tab">articles</p>
            <p className="tab">contact us</p>
            <p className="tab">about us</p>
          </div>
        </div>
        <div className="creds text-center">
          <p className="cred">©️ copyrights by RJ Enterprises</p>
          <p className="cred">made with ❤️ in India</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
