import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="Item">
      <h3>Title: {props.title}</h3>
      <br />
      <br />
      <br />
      <h3>Description: {props.description}</h3>
      {/* <p>Category: {props.category.enum}</p> */}
      <Link to={`/update-item/${props._id}`}>Edit my item</Link>
      <Link to={`/delete-item/${props._id}`}>Remove my item</Link>
    </div>
  );
};

export default Item;
