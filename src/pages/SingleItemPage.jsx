import React, { Component } from "react";
import axios from "axios";
import Item from "../components/Item/Item";

export class SingleItemPage extends React.Component {
  state = {
    itemDetails: null,
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:5005/items/${this.props.match.params.id}`)
      .then((res) => {
        console.log("res:", res);
        this.setState({
          itemDetails: res.data,
        });
      });
  };

  render() {
    if (!this.state.itemDetails) {
      return <div>Loading...</div>;
    }

    console.log(this.state);
    <p>Single Item page</p>;
    <Item {...this.state.itemDetails} />;
  }
}

export default SingleItemPage;
