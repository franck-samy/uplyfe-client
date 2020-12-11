import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtectedPage";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";
import ProfilePage from "./pages/ProfilePage";
import FollowersPage from "./pages/FollowersPage";
import Signup from "./pages/Signup";
import Login from "./pages/LogIn";
import FeedPage from "./pages/FeedPage";
import Header from "./components/Header/Header";
import SignOut from "./components/SignOut/SignOut";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.log("SOMETHING HAPPENED", res);
          }

          localStorage.removeItem("accessToken");
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      // <div className="App">
      // <div className="App" id="outer-container">
      /* <Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <Navbar handleLogout={this.handleLogout} user={this.state.user} /> */
      <div className="App" id="outer-container">
        <Switch>
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />

          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={Login}
          />
          
          
          <ProtectedRoute
            exact
            path={PATHS.UPDATEPROFILE}
            component={UpdateProfile}
            user={this.state.user}
          />
        

          <ProtectedRoute
            exact
            path={PATHS.SIGNOUT}
            component={SignOut}
            user={this.state.user}
          />

          <ProtectedRoute
            exact
            path={PATHS.PROFILEPAGE}
            component={ProfilePage}
            user={this.state.user}
          />


          <ProtectedRoute
            exact
            path={PATHS.FEEDPAGE}
            component={FeedPage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.FOLLOWERSPAGE}
            component={FollowersPage}
            user={this.state.user}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
