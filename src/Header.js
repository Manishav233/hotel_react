import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <div className="Header">
    <div className="Header_left">
      <img
        className="header_icon"
        src="http://tous-logos.com/wp-content/uploads/2018/02/Airbnb-Logo.png"
        alt="logo"
      />
      </div>
      <div className="header_center">
        <input placeholder="Start your Search" type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
      <p>Become a Host</p>
      <ExpandMoreIcon/>
      <LanguageIcon/>
      <AccountCircleIcon/>
      </div>
    </div>
  );
}
