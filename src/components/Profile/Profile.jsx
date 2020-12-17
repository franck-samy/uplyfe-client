import React, { Component } from "react";
import AllItems from "../AllItems/AllItems";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    username: this.props.user.username,
    inspirations: this.props.user.inspirations,
    inspired: this.props.user.inspired,
    profilePic: this.props.user.image,
  };

  render() {
    return (
      <div className="profile">
        {/* Nez lqyout*/}

        <div className="container">
          <header>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </header>
          <main>
            <div className="row">
              <div className="left col-lg-4">
                <div className="photo-left">
                  <img
                    className="photo"
                    src={this.state.profilePic}
                    alt="pic"
                  />
                  <div className="active"></div>
                </div>
                <h4 className="name">{this.state.username}</h4>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Profile;
