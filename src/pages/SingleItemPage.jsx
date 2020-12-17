import React, { Component } from "react";
import axios from "axios";
import Item from "../components/Item/Item";
import Navbar from "../components/Navbar/Navbar";
import { addNewComment } from "../services/comments";
import AddComment from "../components/AddComment/AddComment";
import AllComments from "../components/AllComments/AllComments";

export class SingleItemPage extends React.Component {
  state = {
    itemDetails: null,
    commentDetails: null,
    user: this.props.user,
  };

  componentDidMount = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/item/${this.props.match.params.id}`
      )
      .then((item) => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/all-comments`)
          .then((comment) => {
            this.setState({
              commentDetails: comment.data,
              itemDetails: item.data,
            });
          });
      });
  };

  render() {
    console.log(this.state.commentDetails);
    if (!this.state.itemDetails) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Item {...this.state.itemDetails} {...this.state} {...this.props} />

        <AllComments
          comments={this.state.commentDetails}
          item={this.state.itemDetails}
        />

        <AddComment {...this.props} item={this.state.itemDetails} />

        <Navbar {...this.props} />
      </div>
    );
  }
}

export default SingleItemPage;
