import React, { Component } from "react";
import ReactModal from "react-modal";

import "./Profile.css";

export default class SellerProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      imgurl: "",
      showModal: false,
      housesList: []
    };
  }

  componentDidMount() {
    this.getUserData();
    console.log("token", this.props.token);
  }

  getUserData() {
    const url = `http://localhost:5000/profile/${this.props.match.params.id}`;
    const token = "Token " + this.props.token;
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(
          {
            username: data.username,
            imgurl: data.imgurl
          }
          // () => console.log(this.state)
        );
      });
  }

  getHousesList() {
    const url = "http://localhost:5000/houseslist";
    const token = "Token " + this.props.token;

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          housesList: data["housesList"]
        });
      });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
    this.getHousesList();
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChooseAgent = house_id => {
    const url = "http://localhost:5000/chooseAgent";
    const token = "Token " + this.props.token;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        house_id: house_id,
        broker_id: this.props.match.params.id
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
    // remove img url
    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="text-center">
              <h2>{this.state.username}</h2>

              <img
                src={this.state.imgurl}
                className="profile-img"
                height="250"
                width="250"
                alt="hhelll"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="text-center center-block file-upload"
              />
            </div>
            <hr />
            <br />

            <div className="card mb-4">
              <div className="card-header">
                Website <i className="fa fa-link fa-1x" />
              </div>
              <div className="card-body">
                <a href="http://bootnipets.com">bootnipets.com</a>
              </div>
            </div>

            <ul className="list-group">
              <li className="list-group-item text-muted">
                Activity <i className="fa fa-dashboard fa-1x" />
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Shares</strong>
                </span>{" "}
                125
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Likes</strong>
                </span>{" "}
                13
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Posts</strong>
                </span>{" "}
                37
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Followers</strong>
                </span>{" "}
                78
              </li>
            </ul>
            <div className="card mt-4">
              <div className="card-header">Social Media</div>
              <div className="card-body">
                <i className="fa fa-facebook fa-2x" />
                <i className="fa fa-github fa-2x" />{" "}
                <i className="fa fa-twitter fa-2x" />{" "}
                <i className="fa fa-pinterest fa-2x" />{" "}
                <i className="fa fa-google-plus fa-2x" />
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <hr />
                <form
                  className="form"
                  action="##"
                  method="post"
                  id="registrationForm"
                >
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="first_name">
                        <h4>First name</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        placeholder="first name"
                        title="enter your first name if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="last_name">
                        <h4>Last name</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                        placeholder="last name"
                        title="enter your last name if any."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="phone">
                        <h4>Phone</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="enter phone"
                        title="enter your phone number if any."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="mobile">
                        <h4>Mobile</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder="enter mobile number"
                        title="enter your mobile number if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Email</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="you@email.com"
                        title="enter your email."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Location</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="location"
                        placeholder="somewhere"
                        title="enter a location"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password">
                        <h4>Password</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="password"
                        title="enter your password."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password2">
                        <h4>Verify</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password2"
                        id="password2"
                        placeholder="password2"
                        title="enter your password2."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <br />
                      <button className="btn btn-lg btn-success" type="submit">
                        <i className="glyphicon glyphicon-ok-sign" /> Save
                      </button>
                      <button className="btn btn-lg" type="reset">
                        <i className="glyphicon glyphicon-repeat" /> Reset
                      </button>
                    </div>
                  </div>
                </form>

                <hr />
              </div>
              <div className="tab-pane" id="messages">
                {/* tab content here */}
              </div>
              <div className="tab-pane" id="settings">
                {/* tab contetn 2 */}
              </div>
            </div>
            {/* end herer */}
          </div>
        </div>

        {/* Choose Agents modal/ only show when not user profile */}
        {this.props.user_id !== this.props.match.params.id && (
          <div className="card-footer text-center">
            <button onClick={this.handleShowModal}>
              Connect with this agent
            </button>
            <div
              className="modal fade bd-example-modal-lg"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={{
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                        // backgroundColor: "rgba(0, 0, 0, 0.3)"
                      },
                      content: {
                        position: "absolute",
                        top: "40px",
                        left: "40px",
                        right: "40px",
                        bottom: "40px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "hidden",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "0"
                        // backgroundColor: "black"
                      }
                    }}
                  >
                    <div>
                      <h1>Which house??</h1>
                      <ul>
                        {this.state.housesList.map(x => (
                          <li key={x.house_id}>
                            <span>{x.address}</span>

                            {/* Check if houses is chosen or not */}
                            {x.is_chosen ? (
                              <span className="text-danger">
                                this house is chosen
                              </span>
                            ) : (
                              <button
                                className="btn btn-success"
                                onClick={() =>
                                  this.handleChooseAgent(x.house_id)
                                }
                              >
                                Choose this house
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ReactModal>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
