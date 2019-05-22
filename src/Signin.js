import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
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

  onClickSignin = e => {
    e.preventDefault();
    this.props.onClickSignin(this.state.mail, this.state.password);
    this.props.history.push("/home/");
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

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
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={e => this.onClickSignin(e)}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
