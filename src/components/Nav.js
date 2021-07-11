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
  const [dropdown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropdown);
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
        <p onClick={() => history.push("/")}>Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>Recently Added</p>
        <p>My List</p>
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
