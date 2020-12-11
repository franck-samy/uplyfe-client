import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";

function ProfilePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <hr />
        <Navbar />
      </header>
    </div>
  );
}

export default ProfilePage;
