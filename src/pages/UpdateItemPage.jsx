import React from "react";
import UpdateItemForm from "../components/UpdateItemForm/UpdateItemForm";
import Navbar from "../components/Navbar/Navbar";

const UpdateItemPage = (props) => {
  return (
    <div>
      <p>Hello</p>
      <UpdateItemForm {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default UpdateItemPage;
