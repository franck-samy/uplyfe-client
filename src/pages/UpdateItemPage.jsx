import React from "react";
import UpdateItemForm  from "../components/UpdateItemForm/UpdateItemForm";

const UpdateItemPage = (props) => {
  return (
    <div>
    <p>Hello</p>
      <UpdateItemForm {...props} />
    </div>
  );
};

export default UpdateItemPage;
