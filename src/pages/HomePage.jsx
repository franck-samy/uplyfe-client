import "../App.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="../../images/UpLyfe logo.png" alt="" />
        <Link className="button-home" to="/auth/signup">
          Get started!
        </Link>
        <Link className="button-home" to="/auth/login">
          Log In
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
