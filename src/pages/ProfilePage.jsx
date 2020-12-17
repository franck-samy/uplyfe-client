import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import { Link } from "react-router-dom";
import UserItems from "../components/UserItem/UserItem";
import { getUserItem } from "../services/items";
import Item from "../components/Item/Item";
import "./ProfilePage.css";

// function ProfilePage(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Profile component={Profile} user={props.user} item={props.item} />
//         <Link to="/add-new-item">Add Item</Link>
//         <hr />
//         <AllItems component={AllItems} item={props.item} user={props.user} />
//         <Navbar {...props} />
//       </header>
//     </div>
//   );
// }

// export default ProfilePage;

import React, { Component } from "react";

export class ProfilePage extends Component {
  state = {
    user: this.props.user,
    items: [],
  };

  componentDidMount = () => {
    getUserItem(this.state.user._id)
      .then((responseBack) => {
        //console.log(responseBack);
        this.setState({
          items: responseBack,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="Profile">
        <header className="Profile-header">
          <Profile
            component={Profile}
            items={this.state.items}
            {...this.props}
          />

          <div className="addItem-btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/add-new-item"
            >
              Add Item
            </Link>
          </div>
          <hr />
          <div className="userItemWindow">
            <UserItems user={this.state.user} items={this.state.items} />
          </div>
          <Navbar {...this.props} />
        </header>
      </div>
    );
  }
}

export default ProfilePage;
