import React from "react";
import DeleteItem from "../components/DeleteItem/DeleteItem";

const DeleteItemPage = (props) => {
  return (
    <div>
      <p>Delete Item</p>
      <DeleteItem {...props} />
    </div>
  );
};

export default DeleteItemPage;
