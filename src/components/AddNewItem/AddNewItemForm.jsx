import React, { Component } from 'react';
import axios from 'axios';
import { addNewItem } from '../../services/items';

class AddNewItemForm extends Component {
  state = {
    owner: this.props.user._id,
    category: '',
    title: '',
    // image: "",
    // public: "",
    description: '',
    // pending: "",
    // like: "",
    url: '/profile',
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
      console.log('response', response);

      if (!response.status) {
        return;
      }
      setTimeout(() => {
        this.props.history.push('/profile');
      }, 100);
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ': ', event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //   onRedirect = () => {
  //     return <Redirect to="/profile" />;
  //   };

  render() {
    return (
      <div className='AddNewItemForm'>
        <form onSubmit={this.handleSubmit}>
          <label name='title' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label name='category' htmlFor='category'>
            Category
          </label>
          <input
            name='category'
            type='text'
            value={this.state.category}
            onChange={this.handleChange}
          />
          <label name='description' htmlFor='description'>
            Description
          </label>
          <input
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button type='submit'>Add to my list</button>
        </form>
      </div>
    );
  }
}

export default AddNewItemForm;
