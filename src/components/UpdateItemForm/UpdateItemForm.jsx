import React, { Component } from "react";
import axios from "axios";
import { updateItem, getSingleItem } from "../../services/items";

class UpdateItemForm extends Component {
  state = {
    item: {},
  };

  componentDidMount() {
    getSingleItem(this.props.match.params.id).then((item) => {
      this.setState({ item: item });
    });
  }

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

    updateItem(this.props.match.params.id, this.state.item).then((response) => {
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
      item: { ...this.state.item, [event.target.name]: event.target.value },
    });
  };

  render() {
    console.log(this.state.item);
    return (
      <div className="UpdateNewItemForm">
        <p>Update Item Page HELLO</p>

        <form onSubmit={this.handleSubmit}>
          <label name="title" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={this.state.item.title}
            onChange={this.handleChange}
          />
          <label name="category" htmlFor="category">
            Category
          </label>
          <input
            name="category"
            type="text"
            value={this.state.item.category}
            onChange={this.handleChange}
          />
          <label name="description" htmlFor="description">
            Description
          </label>
          <input
            name="description"
            type="text"
            value={this.state.item.description}
            onChange={this.handleChange}
          />
          <button type="submit">Edit item</button>
        </form>
      </div>
    );
  }
}
export default UpdateItemForm;
