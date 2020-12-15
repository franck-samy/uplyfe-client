import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import { Link } from "react-router-dom";
import AllItems from "../components/AllItems/AllItems";
import { getAllItems } from "../services/items";
import Item from "../components/Item/Item";

function ProfilePage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Profile component={Profile} user={props.user} />
        <Link to="/add-new-item">Add Item</Link>
        <hr />

        {/* <AllItems component={Item} title={props.title} /> */}
        <AllItems component={AllItems} item={props.item} />
        <Navbar {...props} />
      </header>
    </div>
  );
}

export default ProfilePage;
