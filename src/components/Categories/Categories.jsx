import React, { Component } from "react";
import AddNewItemForm from "../AddNewItem/AddNewItemForm";

class Categories extends Component {
  state = {
    category: "",
  };


  render() {
    return (
      <div className="categoryList">
        <h2>category name: {this.state.category}</h2>
      </div>
    );
  }
}

export default Categories;

// AllCategory - lvl 1
// Filter all items by category
// "Travel",
<a></a>
// "Self-Improvment",
// "Relationships",
// "Career",
// "Education",
// "Food",
// "Finance",
// "Entertainment",
// "Adventure",

Items.category.find().

// A single category with all items - level 2

Items.find({
  
}).
// item in details - lvl 3
