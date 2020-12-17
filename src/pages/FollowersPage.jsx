// import Navbar from "../components/Navbar/Navbar";

// function FollowersPage(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Followers Page</h1>
//         <Navbar {...props} />
//       </header>
//     </div>
//   );
// }

// export default FollowersPage;

import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import { getAllUsers } from "../services/users";
import Users from "../components/Users/Users";

export class FollowersPage extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    getAllUsers().then((responseBack) => {
      this.setState({ users: responseBack });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Followers Page</h1>
          {this.state.users.map((el, i) => (
            <Users user={this.state.users} key={el._id} {...el} />
          ))}
          <Navbar {...this.props} />
        </header>
      </div>
    );
  }
}

export default FollowersPage;
