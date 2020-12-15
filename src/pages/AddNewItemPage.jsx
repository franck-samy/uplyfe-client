import React from "react";
import AddNewItemForm from "../components/AddNewItem/AddNewItemForm";
import Navbar from "../components/Navbar/Navbar";

const AddNewItemPage = (props) => {
  return (
    <div>
      <AddNewItemForm {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default AddNewItemPage;
