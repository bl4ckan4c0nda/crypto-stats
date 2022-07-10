import React from "react";
import logo from "../assets/images/logo/logo.svg";
import DarkMode from "./darkMode";

const Navigation = () => {
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none bg-transparent shadow-none">
        <div className="container-xl">
          <div className="navbar-nav flex-row">
            <div className="d-flex">
              <DarkMode />
            </div>
          </div>
          <h1 className="navbar-brand d-none-navbar-horizontal pe-0 pe-md-3 order-md-last">
            <a href=".">
              <img
                src={logo}
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./#">
                    <span className="nav-link-title rounded-pill text-white bg-primary py-1 px-3">
                      عضویت
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./#">
                    <span className="nav-link-title">ورود</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
