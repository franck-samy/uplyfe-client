// import { Link } from "react-router-dom";

// const Item = (props) => {
//   return (
//     <div>
//       <div className="Item">
//         <h3>Title: {props.title}</h3>
//         <br />
//         <br />
//         <br />
//         <h3>Description: {props.description}</h3>

//         {props.user._id === props.owner ? (
//           <div>
//             <Link to={`/update-item/${props._id}`}>Edit my item</Link>
//             <Link to={`/delete-item/${props._id}`}>Remove my item</Link>
//           </div>
//         ) : (
//           <Link to={`/clone-item/${props._id}`}>Add to my list</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Item;

import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Item extends Component {
  addToMyList = () => {
    Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/clone-item`,
      {
        title: this.props.title,
        description: this.props.description,
        category: this.props.category,
      },
      {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      }
    ).then((res) => {
      this.props.history.push(`/profile/${this.props.user._id}`);
    });
  };

  render() {
    return (
      <div>
        <div className="Item">
          <h3>Title: {this.props.title}</h3>
          <br />
          <br />
          <br />
          <h3>Description: {this.props.description}</h3>

          {this.props.user._id === this.props.owner ? (
            <div>
              <Link to={`/update-item/${this.props._id}`}>Edit my item</Link>
              <Link to={`/delete-item/${this.props._id}`}>Remove my item</Link>
            </div>
          ) : (
            <button onClick={this.addToMyList}>Add to my list</button>
          )}
        </div>
      </div>
    );
  }
}

export default Item;
