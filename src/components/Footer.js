import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__headerIcons">
        <FacebookIcon className="footer__facebook" />
        <InstagramIcon className="footer__instagram" />
        <TwitterIcon className="footer__twitter" />
        <YouTubeIcon className="footer__youtube" />
      </div>
      <div className="footer__links">
        <div className="footer__linksWrapper">
          <div className="footer__linksItems">
            <p>Audio and subtitles</p>
            <p>Press</p>
            <p>Privacy</p>
            <p>Contact us</p>
            <button>Service Code</button>
            <p>© 1997-2021 Netflix Clone, Inc</p>
          </div>
          <div className="footer__linksItems">
            <p>Descriptive audio</p>
            <p>Relationship with investors</p>
            <p>Legal notices</p>
          </div>
          <div className="footer__linksItems">
            <p>Help center</p>
            <p>Carreers</p>
            <p>Cookies preferences</p>
          </div>
          <div className="footer__linksItems">
            <p>Gift Cards</p>
            <p>Terms of use</p>
            <p>Corporate information</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
