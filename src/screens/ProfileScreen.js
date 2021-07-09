import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";

import { auth } from "../firebase";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
            alt=""
          />
          <div className="profileScreen__details">
            <h3>{user.email}</h3>
            <div className="profileScreen__plans">
              <h2>Plans (Current Plan: premium)</h2>
              <div className="profileScreen__plansInfo">
                <div className="profileScreen__plansInfoFirst">
                  <div className="profileScreen__planNetflixStandard">
                    <p>Netflix Standard</p>
                    <p>1080p</p>
                  </div>
                  <div className="profileScreen__standardButton">
                    <button>Subscribe</button>
                  </div>
                </div>
                <div className="profileScreen__plansInfoSecond">
                  <div className="profileScreen__planNetflixBasic">
                    <p>Netflix Basic</p>
                    <p>480p</p>
                  </div>
                  <div className="profileScreen__basicButton">
                    <button>Subscribe</button>
                  </div>
                </div>
                <div className="profileScreen__plansInfoThird">
                  <div className="profileScreen__planNetflixPremium">
                    <p>Netflix Premium</p>
                    <p>4K+HDR</p>
                  </div>
                  <div className="profileScreen__premiumButton">
                    <button>Current Package</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
