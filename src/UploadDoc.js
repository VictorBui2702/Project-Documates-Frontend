import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class UploadDoc extends Component {
  constructor() {
    super();
    this.state = {
      category: ""
    };
  }

  handleTextChange = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => console.log(this.state.category)
    );
  };

  onClickUploadFile = () => {
    this.props.onClickUploadFile(this.state.category);
    this.props.history.push("/discover/");
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin">
          <div className="">
            <label htmlFor="category">Category:</label>
            <select
              className="custom-select d-block w-100"
              id="category"
              onChange={e => this.handleTextChange(e)}
              required
            >
              <option value="">Choose</option>
              <option value="business">Business</option>
              <option value="tech">Tech</option>
              <option value="startup">Startup</option>
              <option value="politic">Politic</option>
              <option value="design">Design</option>
              <option value="art">Art</option>
              <option value="film">Film</option>
              <option value="food">Food</option>
              <option value="sport">Sport</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid category.
            </div>
          </div>

          <Dropzone
            onDrop={this.props.onImageDrop.bind(this)}
            accept=".pdf"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div className="upload-wrapper pl-3 my-2" {...getRootProps()}>
                  <input {...getInputProps()} />

                  {this.props.uploadedFileCloudinaryUrl ? (
                    <h6 className="text-success">Ready</h6>
                  ) : (
                    <h6 className="text-info">Click to select file</h6>
                  )}
                </div>
              );
            }}
          </Dropzone>

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => this.onClickUploadFile()}
          >
            Upload document
          </button>
        </form>
      </div>
    );
  }
}
