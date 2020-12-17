import React from "react";
import DeleteItem from "../components/DeleteItem/DeleteItem";
import Navbar from "../components/Navbar/Navbar";

const DeleteItemPage = (props) => {
  return (
    <div>
      <h1>Remove this inspiration?</h1>
      <DeleteItem {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default DeleteItemPage;
