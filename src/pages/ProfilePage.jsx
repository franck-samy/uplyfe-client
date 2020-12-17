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
          {/* <Link to="/imageUpload">Upload image</Link> */}
          {/* <div>
            {this.state.items.map((el) => {
              return (
                <div>
                  <p>title: {el.title}</p>
                  <p>description: {el.description}</p>
                </div>
              );
            })}
          </div> */}
          <div className="addItem-btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/add-new-item"
            >
              Add Item
            </Link>
          </div>
          <hr />
          <UserItems user={this.state.user} items={this.state.items} />
          <Navbar {...this.props} />
        </header>
      </div>
    );
  }
}

export default ProfilePage;
