import Navbar from "../components/Navbar/Navbar";

function FollowersPage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Followers Page</h1>
        <Navbar {...props} />
      </header>
    </div>
  );
}

export default FollowersPage;
