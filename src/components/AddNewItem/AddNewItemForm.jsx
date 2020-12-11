import React, { Component } from "react";

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
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="AddNewItemForm">
        <form onSubmit={this.handleSubmit}>
          <label name="title" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label name="category" htmlFor="category">
            Category
          </label>
          <input
            name="category"
            type="text"
            value={this.state.category}
            onChange={this.handleChange}
          />
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