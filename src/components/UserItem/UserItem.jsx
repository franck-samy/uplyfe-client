// import React, { Component } from "react";
// import Item from "../Item/Item";
// import { getAllItems } from "../../services/items";
// // import "./AllItems.css";
// import { Link } from "react-router-dom";

// class UserItems extends React.Component {
//   state = {
//     items: [],
//   };
//   componentDidMount = () => {
//     getAllItems().then((responseBack) => {
//       this.setState({ items: responseBack });
//     });
//   };

//   render() {
//     return (
//       <div>
//         <ul>
//           {/* {this.props.items.map((item, index) => (
//             <p key={index}>ItemID: {item._id}</p>
//           ))} */}
//           {this.state.items.map((item, index) => (
//             <li key={index}>
//               <Link to={`/item/${item._id}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* <Item component={Item} item={this.state.items} /> */}
//       </div>
//     );
//   }
// }

// export default UserItems;

import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className="userItem">
      {props.items.map((el, index) => {
        return (
          <div key={index}>
            <p className="catTag">{el.category}</p>
            <Link to={`/item/${props.items[index]._id}`}>{el.title}</Link>
            <p>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserItem;
