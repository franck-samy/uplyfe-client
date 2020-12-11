import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import { Link } from "react-router-dom";

function ProfilePage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Profile component={Profile} user={props.user} />
        <Link to="/add-new-item">Add Item</Link>
        <hr />
        <Navbar />
      </header>
    </div>
  );
}

export default ProfilePage;
