import React from "react";
import AddNewItemForm from "../components/AddNewItem/AddNewItemForm";

const AddNewItemPage = (props) => {
  return (
    <div>
      <AddNewItemForm {...props} />
    </div>
  );
};

export default AddNewItemPage;
