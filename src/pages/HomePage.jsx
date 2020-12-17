import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="../../images/UpLyfe logo.png" alt="" />
        <a className="button-home" href="/auth/signup">
          Get started!
        </a>
        <a className="button-home" href="/auth/login">
          Log In
        </a>
      </header>
    </div>
  );
}

export default HomePage;
