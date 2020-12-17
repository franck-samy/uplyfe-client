import React, { Component } from "react";
import { login } from "../services/auth";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        // handle not great request
      }
      localStorage.setItem("accessToken", res.data.accessToken);
      this.props.authenticate(res.data.user);
      this.props.history.push(`/profile/${this.state.username}`);
    });
  };

  render() {
    return (
      <div className="flex-container">
        <div className="content-container">
          <div className="form-container">
            <form onSubmit={this.handleFormSubmission}>
              <h1>Login</h1>
              <br />
              <br />
              <span className="subtitle">USERNAME:</span>
              <br />
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <span className="subtitle">PASSWORD:</span>
              <br />
              <input
                id="input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
                minLength="8"
              />
              <br />
              <br />
              {this.state.error && (
                <div className="error-block">
                  <p>There was an error submiting the form:</p>
                  <p>{this.state.error.message}</p>
                </div>
              )}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
