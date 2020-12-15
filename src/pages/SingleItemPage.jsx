import React, { Component } from 'react';
import axios from 'axios';
import Item from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import { addNewComment } from '../services/comments';
import AddComment from '../components/AddComment/AddComment';
import AllComments from '../components/AllComments/AllComments';

export class SingleItemPage extends React.Component {
  state = {
    itemDetails: null,
    commentDetails: null,
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:5005/api/item/${this.props.match.params.id}`)
      .then((item) => {
        axios.get('http://localhost:5005/api/all-comments').then((comment) => {
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
        <Item {...this.state.itemDetails} />

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
