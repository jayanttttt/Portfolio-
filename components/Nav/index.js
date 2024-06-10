import React from "react";
import classes from "./Nav.module.scss";
import Image from "next/image";

const index = ({ textEnter, textLeave }) => {
  return (
    <header className={"container " + classes.container}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Image
            src="/images/Frame.svg"
            alt=""
            width={60}
            height={60}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className={"nav-item position-relative " + classes.link1}>
                <p
                  className="mb-0 font-14 font-gray-2 px-3 py-2"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  About
                </p>
                <div className={classes.underline1} />
              </li>
              <li className={"nav-item position-relative " + classes.link2}>
                <p
                  className="mb-0 font-14 font-gray-2 px-3 py-2"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Projects
                </p>
                <div className={classes.underline2} />
              </li>
              <li className={"nav-item position-relative " + classes.link3}>
                <p
                  className="mb-0 font-14 font-gray-2 px-3 py-2"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Contact
                </p>
                <div className={classes.underline3} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;