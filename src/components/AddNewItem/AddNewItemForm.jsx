import React, { Component } from "react";
import axios from "axios";
import { addNewItem } from "../../services/items";

class AddNewItemForm extends Component {
  state = {
    owner: this.props.user._id,
    category: "",
    title: "",
    // image: "",
    // public: "",
    description: "",
    // pending: "",
    // like: "",
    // url: "/profile-picture",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      owner: this.props.user,
      category: this.state.category,
      title: this.state.title,
      description: this.state.description,
      // image: "",
      // public: "",

      // pending: "",
      // like: "",
    };
    addNewItem(item).then((response) => {
      console.log("response", response);

      if (!response.status) {
        return;
      }
      setTimeout(() => {
        this.props.history.push(`/profile/${this.props.user._id}`);
      }, 100);
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //   onRedirect = () => {
  //     return <Redirect to=`/profile/${id}` />;
  //   };

  render() {
    return (
      <div className="AddNewItemForm">
        <h1>Add a new item</h1>
        <form onSubmit={this.handleSubmit}>
          <label name="title" htmlFor="title">
            Title
          </label>
          <br />
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          {/* <label name="category" htmlFor="category">
            Category
          </label> */}
          <label for="category">Choose a category</label>

          <select
            name="category"
            id="category-select"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="">--Please choose an option--</option>
            <br />
            <br />
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="self-improvement">Self-improvement</option>
            <option value="relationships">Relationships</option>
            <option value="career">Career</option>
            <option value="education">Education</option>
            <option value="finance">Finance</option>
            <option value="entertainment">Entertainment</option>
            <option value="adventure">Adventure</option>
          </select>

          <br />
          <br />
          <label name="description" htmlFor="description">
            Description
          </label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button type="submit">Add to my list</button>
        </form>
      </div>
    );
  }
}

export default AddNewItemForm;
