import React from "react";
import "./header.scss";
import CustomButton from "../../components/button/button";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <div className="header p-2 px-5">
      <div>
        <img
          id="header__brand"
          src="https://miro.medium.com/max/1068/1*BsKbDTA9ZUVroeJ7asId4Q.png"
          alt="airbnb logo"
        />
      </div>
      <div className="header__right">
        <CustomButton> Become a host </CustomButton>
        <CustomButton>
          <LanguageIcon />
        </CustomButton>
        <span id="profile-btn" className="p-2 ml-2">
          <KeyboardArrowDownIcon size="small" />
          <AccountCircleIcon size="small" />
        </span>
      </div>
    </div>
  );
};

export default Header;
