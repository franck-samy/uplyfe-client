import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import { bubble as Menu } from 'react-burger-menu';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className="Header">
        <Menu>
          <a id="home" className="menu-item" href="/update-profile">Update</a>
          <a id="about" className="menu-item" href="/sign-out">Sign Out</a>
        </Menu>
      </div>
    )
}

// <Link exact to='/update-profile' id='home' className='menu-item' />
// <Link exact to='/sign-out' id='home' className='menu-item' /> 
export default Header
