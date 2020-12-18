import React, { Component } from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <Menu>
        <Link id="home" className="menu-item" to="/update-profile">
          Update
        </Link>
        <Link id="about" className="menu-item" to="/sign-out">
          Sign Out
        </Link>
      </Menu>
    </div>
  );
};

// <Link exact to='/update-profile' id='home' className='menu-item' />
// <Link exact to='/sign-out' id='home' className='menu-item' />
export default Header;
