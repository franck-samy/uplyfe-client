import React from "react";

const Item = (props) => {
  return (
    <div className='Item'>
      <h3>Title: {props.title}</h3>
      <br />
      <br />
      <br />
      <h3>Description: {props.description}</h3>
      {/* <p>Category: {props.category.enum}</p> */}
    </div>
  );
};

export default Item;
