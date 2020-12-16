import React, { Component } from "react";
import Item from "../Item/Item";
import { getAllItems } from "../../services/items";
import "./AllItems.css";
import { Link } from "react-router-dom";

class AllItems extends React.Component {
  state = {
    items: [],
  };
  componentDidMount = () => {
    getAllItems().then((responseBack) => {
      this.setState({ items: responseBack });
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <p className="catTag">{item.category}</p>
              <Link to={`/item/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* <Item component={Item} item={this.state.items} /> */}
      </div>
    );
  }
}

export default AllItems;
