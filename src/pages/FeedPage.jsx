import Navbar from "../components/Navbar/Navbar";
import AllItems from "../components/AllItems/AllItems";
import "./FeedPage.css";

function FeedPage(props) {
  return (
    <div className="Feed">
      <header className="Feed-header">
        <h1 style={{ color: "white" }}>Get inspired!</h1>
        <div className="feedWindow">
          <AllItems component={AllItems} item={props.item} />
        </div>
        <Navbar {...props} />
      </header>
    </div>
  );
}

export default FeedPage;
