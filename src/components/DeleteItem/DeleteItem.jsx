import React, { Component } from "react";
import axios from "axios";
import { deleteSingleItem, getSingleItem } from "../../services/items";

class DeleteItem extends Component {
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

    deleteSingleItem(this.props.match.params.id, this.state.item).then(
      (response) => {
        setTimeout(() => {
          this.props.history.push(`/profile/${this.props.user._id}`);
        }, 100);
        if (!response.status) {
          return;
        }
      }
    );
  };

  //   handleChange = (event) => {
  //     console.log(event.target.name, ": ", event.target.value);
  //     this.setState({
  //       item: { ...this.state.item, [event.target.name]: event.target.value },
  //     });
  //   };

  render() {
    console.log(this.state.item);
    return (
      <div className="deleteItem">
        <p>Are you sure you want to delete this item?</p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Remove item</button>
        </form>
      </div>
    );
  }
}
export default DeleteItem;
