import React, { Component } from "react";
import axios from "axios";
import Item from "../components/Item/Item";

export class SingleItemPage extends React.Component {
  state = {
    itemDetails: {}
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:5005/api/item/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          itemDetails: res.data,
        });
      });
  };

  render() {
    if (!this.state.itemDetails) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <Item {...this.state.itemDetails} />
      </div>
    )
  }
}

export default SingleItemPage;
