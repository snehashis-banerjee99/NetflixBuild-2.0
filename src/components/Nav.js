import React, { useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };
  const handleCloseMenu = () => {
    setClick(false);
  };
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav__contentLeft">
        <img
          className="nav__logo"
          src="https://www.label42.com/wp-content/uploads/2019/06/Netflix-client-Label-42.png"
          alt=""
        />
        <div className="menu-option" onClick={handleClick}>
          <p className="menu-option__active">
            Browse {click ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </p>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <p onClick={() => history.push("/")} className="nav__links">
            Home
          </p>
          <p className="nav__links">TV Shows</p>
          <p className="nav__links">Movies</p>
          <p className="nav__links">Recently Added</p>
          <p className="nav__links">My List</p>
        </div>
      </div>
      <div className="nav__contentRight">
        <SearchIcon className="nav__search" />
        <p>KIDS</p>
        <p>DVD</p>
        <CardGiftcardIcon className="nav__giftCard" />
        <NotificationsIcon className="nav__notifications" />
        <div className="nav__headerDropdown" onClick={handleDropDown}>
          <Avatar
            className="nav__avatar"
            src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
            onClick={handleCloseMenu}
          />
          {dropdown ? (
            <ArrowDropUpIcon className="nav__arrowdropup" />
          ) : (
            <ArrowDropDownIcon className="nav__arrowdropdown" />
          )}
        </div>
        <div className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}>
          <h4
            className="dropdown-link menu__border"
            onClick={() => history.push("/profile")}
          >
            Manage Profiles
          </h4>
          <h4 className="dropdown-link">Account</h4>
          <h4 className="dropdown-link">Help Centre</h4>
          <h4 className="dropdown-link" onClick={() => auth.signOut()}>
            Sign out of Netflix
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Nav;
