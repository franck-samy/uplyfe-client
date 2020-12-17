// import React from "react";
// import CloneNewItemForm from "../components/CloneNewItem/CloneNewItem";
// import Navbar from "../components/Navbar/Navbar";

// const CloneNewItemPage = (props) => {
//   return (
//     <div>
//       <CloneNewItemForm {...props} />
//       <Navbar {...props} />
//     </div>
//   );
// };

// export default CloneNewItemPage;

import React, { Component } from "react";
import CloneNewItemForm from "../components/CloneNewItem/CloneNewItem";
import Navbar from "../components/Navbar/Navbar";

export class CloneNewItemPage extends Component {
  state = {
    itemDetails: [],
  };

  render() {
    return (
      <div>
        <CloneNewItemForm {...props} />
        <Navbar {...props} />
      </div>
    );
  }
}

export default CloneNewItemPage;
