import React, { Component } from "react";
import { getSingleUser, updateUser } from "../../services/users";
import FileUpload from "../FileUpload/FileUpload";
import "./UpdateProfile.css";

export class UpdateProfile extends Component {
  state = {
    username: "",
    password: "",
    // image: "",
  };

  componentDidMount() {
    getSingleUser(this.props.match.params.id).then((user) => {
      this.setState({ user });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const question = {
      username: this.state.username,
      password: this.state.password,
      //   image: this.state.image,
    };

    updateUser(this.props.match.params.id, this.state.user).then((response) => {
      console.log("response", response);
      if (!response.status) {
        return;
      }
      setTimeout(() => {
        this.props.history.push(`/profile/${this.props.user._id}`);
      }, 100);
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="updateProfileForm">
        <h1>Update your profile</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Change username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder={this.props.user.username}
          />
          <label htmlFor="password">Change password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Enter your new password"
          />
          <br />
          <button type="submit">Update</button>
          <br />
        </form>
        <FileUpload {...this.state} />
      </div>
    );
  }
}

export default UpdateProfile;
