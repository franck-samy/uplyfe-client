import Navbar from "../components/Navbar/Navbar";
import AllItems from "../components/AllItems/AllItems";

function FeedPage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feed Page</h1>
        <AllItems component={AllItems} item={props.item} />

        <Navbar {...props} />
      </header>
    </div>
  );
}

export default FeedPage;

// import React, { Component } from "react";
// import axios from "axios";
// import Item from "../components/Item/Item";
// import Navbar from "../components/Navbar/Navbar";
// import { addNewComment } from "../services/comments";
// import AddComment from "../components/AddComment/AddComment";
// import AllComments from "../components/AllComments/AllComments";

// export class FeedPage extends React.Component {
//   state = {
//     itemDetails: null,
//     commentDetails: null,
//   };

//   componentDidMount = () => {
//     axios
//       .get(`http://localhost:5005/api/item/${this.props.match.params.id}`)
//       .then((item) => {
//         axios.get("http://localhost:5005/api/all-comments").then((comment) => {
//           this.setState({
//             commentDetails: comment.data,
//             itemDetails: item.data,
//           });
//         });
//       });
//   };

//   render() {
//     console.log(this.state.commentDetails);
//     if (!this.state.itemDetails) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <div>
//         <Item {...this.state.itemDetails} />

//         <Navbar {...this.props} />
//       </div>
//     );
//   }
// }

// export default FeedPage;
