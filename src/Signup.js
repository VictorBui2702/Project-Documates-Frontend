import React, { Component } from "react";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      name: "",
      password: ""
    };
  }

  handleMailChange(e) {
    this.setState({
      mail: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  onClickSignup = e => {
    e.preventDefault();

    this.props.onClickSignup(
      this.state.mail,
      this.state.password,
      this.state.name
    );
    this.props.history.push("/signin/");
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={e => this.handleMailChange(e)}
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={e => this.handlePasswordChange(e)}
          />

          <input
            type="text"
            id="inputUsername"
            className="form-control"
            placeholder="Username"
            required
            onChange={e => this.handleNameChange(e)}
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={e => this.onClickSignup(e)}
          >
            Sign uppp
          </button>
        </form>
      </div>
    );
  }
}
