import React, { Component } from "react";
import { addNewComment } from "../../services/comments";

export class AddComment extends Component {
  state = {
    author: "",
    commentText: "",
    comment_item: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      authorId: this.props.user._id,
      commentText: this.state.commentText,
      itemID: this.props.item._id,
    };
    console.log(comment);
    addNewComment(comment).then((response) => {
      window.location.reload();
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="AddNewCommentForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Your comment:</label>
          <textarea
            id="comment"
            name="commentText"
            rows={5}
            cols={30}
            value={this.state.title}
            onChange={this.handleChange}
          />

          <button type="submit">Comment</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
