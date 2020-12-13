import React, { Component } from "react";

class SingleItem extends Component {
  state = {
    category: "",
    title: "",
    // image:"",
    description: "",
    like: "",
    comment: "",
    // public:"",
    // pending:"",
  };

  render() {
    return (
      <div className="singleItem">
        <h1>Category</h1>
        {/* <img src="" alt=""/> */}
        <h2>Item title</h2>
        <p>
          <strong>Description:</strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur delectus quia magni velit nemo modi.
          Voluptatem perspiciatis, fuga veritatis et, totam in alias suscipit
          fugiat esse tenetur praesentium dolorum reiciendis?
        </p>
        <p>
          <strong>Like:</strong>
        </p>
        <p>
          <strong>Comment:</strong>
        </p>

        {/* public
                pending */}
      </div>
    );
  }
}

export default SingleItem;
