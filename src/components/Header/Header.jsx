import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import { bubble as Menu } from 'react-burger-menu';
import './Header.css';
import { Link } from 'react-router-dom';

//UpdateProfile
//SignOut

class Header extends React.Component {
  showSettings = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="Header">
        <Menu>
          <Link exact to='/update-profile' id='home' className='menu-item' />
          <Link exact to='/sign-out' id='home' className='menu-item' /> 
             <a id="home" className="menu-item" href="/update-profile">Update Profile</a>
            <a id="about" className="menu-item" href="/sign-out">Sign Out</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
    )
  }
}

export default Header
