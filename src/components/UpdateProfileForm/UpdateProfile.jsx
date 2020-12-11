import React, { Component } from "react";

export class UpdateProfile extends Component {
  state = {
    username: "",
    password: "",
    // image: "",
  };

  //   componentDidMount = () => {
  //     getUser(this.props.match.params.id).then((user) => {
  //       console.log("userInfo", user);
  //       this.setState({
  //         user,
  //       });
  //     });
  //   };

  handleSubmit = (event) => {
    event.preventDefault();
    const question = {
      username: this.state.username,
      password: this.state.password,
      //   image: this.state.image,
    };
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Change username</label>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder={this.state.username}
        />
        <label htmlFor="password">Change password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter password"
        />

        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateProfile;
