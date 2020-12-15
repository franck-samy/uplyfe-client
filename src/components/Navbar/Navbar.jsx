import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// const userimg = url("../../../public/images/user.png");

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to={`/profile/${props.user._id}`} className="navbar">
        <img
          className="navButtons"
          src="../../../images/user.png"
          alt=" user image"
        />
      </Link>
      <Link to="/feed" className="navbar">
        <img
          className="navButtons"
          src="../../../images/idea.png"
          alt=" feed image"
        />
      </Link>
      <Link to="/followers" className="navbar">
        <img
          className="navButtons"
          src="../../../images/followers.png"
          alt="follower image"
        />
      </Link>
      <Link to={`/update-profile/${props.user._id}`} className="navbar">
        <img
          className="navButtons"
          src="../../../images/user.png"
          alt=" user image"
        />
      </Link>

      {/* <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/protected" className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth/signup" className="authLink">
              Signup
            </Link>
            <Link to="/auth/login" className="authLink">
              Log In
            </Link>
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
