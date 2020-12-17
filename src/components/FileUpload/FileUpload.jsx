import React, { Component } from "react";
import { sendProfilePic } from "../../services/users";

export class FileUpload extends Component {
  state = {
    user: this.props.user,
    uploadedImage: null,
    imageFromBackend: null,
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const image = this.state.uploadedImage;

    sendProfilePic(image, this.props.user._id)
      .then((res) => {
        console.log("SEDNING PROFILE PIC TO BACK", res);

        this.setState({
          imageFromBackend: res.imagePath,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (event) => {
    const uploadedImage = event.target.files[0];

    this.setState({
      uploadedImage,
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmission}
          onChange={this.handleInputChange}
        >
          <input type="file" name="profilePic" />
          <button type="submit">Upload Image</button>
        </form>
        {this.state.imageFromBackend && (
          <div>
            <h1>profile</h1>
            <img
              width="150"
              src={this.state.imageFromBackend}
              alt="profilePic"
            />
          </div>
        )}
      </div>
    );
  }
}

export default FileUpload;
