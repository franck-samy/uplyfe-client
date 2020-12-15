import React from "react";
import DeleteItem from "../components/DeleteItem/DeleteItem";
import Navbar from "../components/Navbar/Navbar";

const DeleteItemPage = (props) => {
  return (
    <div>
      <p>Delete Item</p>
      <DeleteItem {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default DeleteItemPage;
