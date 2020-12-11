import React from "react";
import AddNewItemForm from "../components/AddNewItem/AddNewItemForm";

const AddNewItemPage = (props) => {
  return (
    <div>
      <AddNewItemForm user={props.user} />
    </div>
  );
};

export default AddNewItemPage;
