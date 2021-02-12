import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixlogo from "../Images/netflixlogo.png";
import profileicon from "../Images/profileicon.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={netflixlogo}
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src={profileicon}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
