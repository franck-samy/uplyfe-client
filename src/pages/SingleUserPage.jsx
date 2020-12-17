import React, { Component } from "react";
import UserProfile from "../components/Users/UserProfile";
import { getUserItem } from "../services/items";
import { Link } from "react-router-dom";
import UserItems from "../components/UserItem/UserItem";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { getSingleUser } from "../services/users";

export class SingleUserPage extends Component {
  state = {
    userID: this.props.match.params.id,
    userProfile: {},
    items: [],
  };

  componentDidMount = () => {
    getSingleUser(this.state.userID)
      .then((response) => {
        getUserItem(this.state.userID).then((responseBack) => {
          console.log("SINGLEUSERITEMS", responseBack);
          this.setState({
            userProfile: response,
            items: responseBack,
          });
        });
      })
      .catch((err) => console.log(err));
  };

  //     axios
  //       .get(
  //         `${process.env.REACT_APP_SERVER_URL}/user/${this.props.match.params._id}`
  //       )
  //       .then((userProfile) => {
  //         axios
  //           .get(`${process.env.REACT_APP_SERVER_URL}/all-items`)
  //           .then((items) => {
  //             console.log(userProfile);
  //             this.setState({
  //               userProfile: userProfile.data,
  //               items: items.data,
  //             });
  //           });
  //       });

  render() {
    console.log("USER PROFILE", this.state.userProfile);
    return (
      <div className="App">
        <header className="App-header">
          <p>SINGLE PROFIULE PAGE</p>
          <UserProfile
            user={this.state.userProfile}
            items={this.state.items}
            {...this.state}
          />
          <div>
            {this.state.items.map((el) => {
              return (
                <div>
                  <p>title: {el.title}</p>
                  <p>description: {el.description}</p>
                </div>
              );
            })}
          </div>

          <hr />
          <UserItems user={this.state.user} items={this.state.items} />
          <Navbar {...this.props} />
        </header>
      </div>
    );
  }
}

export default SingleUserPage;
