import React from "react";
import "./footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyrights">
        <p className="mb-0">
          © 2021 No rights reserved. Thhsi is just a demo application.
        </p>
      </div>
      <div className="footer__social">
        <FacebookIcon />
        <TwitterIcon className="ml-4" />
        <InstagramIcon className="ml-4" />
      </div>
    </div>
  );
};

export default Footer;
