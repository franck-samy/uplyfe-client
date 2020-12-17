import React from "react";
import UpdateItemForm from "../components/UpdateItemForm/UpdateItemForm";
import Navbar from "../components/Navbar/Navbar";

const UpdateItemPage = (props) => {
  return (
    <div>
      <h1>Edit my item</h1>
      <UpdateItemForm {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default UpdateItemPage;
