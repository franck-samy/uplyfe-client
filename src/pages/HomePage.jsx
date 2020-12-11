import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Page</h1>
        <a href="/auth/signup">Get started!</a>
        <a href="/auth/login">Log In</a>
      </header>
    </div>
  );
}

export default HomePage;
