import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import request from "superagent";
import Signin from "./Signin";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import UploadDoc from "./UploadDoc";
import Discover from "./Discover";
import Footer from "./Footer";

const CLOUDINARY_UPLOAD_PRESET = "victorbui";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dau1hwx6l/upload";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null,
      documentList: []
    };
  }

  componentDidMount() {
    const existingUser = localStorage.getItem("name");
    const existingId = localStorage.getItem("id");

    if (existingUser) {
      this.setState({
        name: existingUser,
        id: existingId
      });
    }
    this.handleChangeCategory("all");
  }

  handleSignin = (mail, password) => {
    const url = "https://documates.herokuapp.com/signin";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail: mail,
        password: password
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem("name", data["name"]);
        localStorage.setItem("id", data["id"]);
        console.log(data);
        this.setState(
          {
            name: data["name"],
            id: data["id"]
          },
          () => console.log(this.state.name)
        );
      });
  };

  handleSignup = (mail, password, name) => {
    const url = "https://documates.herokuapp.com/signup";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail: mail,
        password: password,
        name: name
      })
    });

    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null
    });
  };

  handleLogout = () => {
    const url = "https://documates.herokuapp.com/signout";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    this.setState({
      name: ""
    });

    localStorage.clear();
  };

  onImageDrop = files => {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  };

  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  };

  handleUploadFile = category => {
    const url = "https://documates.herokuapp.com/upload";
    const document = this.state.uploadedFileCloudinaryUrl;
    const name = this.state.uploadedFile.name;
    const id = this.state.id;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        document: document,
        category: category,
        user_id: id,
        name: name
      })
    });

    // remove img url
    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null
    });
  };

  handleChangeCategory = category => {
    const url = `https://documates.herokuapp.com/documentlist/${category}`;

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          documentList: data["documentList"]
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar name={this.state.name} onClickLogout={this.handleLogout} />

        <Switch>
          <Route
            path="/signin/"
            exact
            render={props => (
              <Signin {...props} onClickSignin={this.handleSignin} />
            )}
          />

          <Route
            path="/signup/"
            exact
            render={props => (
              <Signup
                {...props}
                imgurl={this.state.uploadedFileCloudinaryUrl}
                onImageDrop={this.onImageDrop}
                onClickSignup={this.handleSignup}
                uploadedFile={this.state.uploadedFile}
              />
            )}
          />

          <Route
            path="/home/"
            exact
            render={props => (
              <Home name={this.state.name} mail={this.state.mail} {...props} />
            )}
          />

          <Route
            path="/upload/"
            exact
            render={props => (
              <UploadDoc
                onImageDrop={this.onImageDrop}
                uploadedFile={this.state.uploadedFile}
                onClickUploadFile={this.handleUploadFile}
                uploadedFileCloudinaryUrl={this.state.uploadedFileCloudinaryUrl}
                {...props}
              />
            )}
          />

          <Route
            path="/discover/"
            exact
            render={props => (
              <Discover
                handleChangeCategory={this.handleChangeCategory}
                documentList={this.state.documentList}
                {...props}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
