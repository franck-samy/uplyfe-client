import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// const userimg = url("../../../public/images/user.png");

const Navbar = (props) => {
  return (
<<<<<<< HEAD
    <nav>
      <Link to="/" className="nav__projectName">UpLyfe
=======
    <nav className="navbar">
      <Link to="/profile" className="navbar">
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
>>>>>>> dev
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
