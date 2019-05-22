import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo_transparent.png";

export default class Navbar extends Component {
  render() {
    let accountState;
    if (this.props.name) {
      accountState = (
        <a
          className="text-danger py-2 d-none d-md-inline-block"
          href="#"
          onClick={() => this.props.onClickLogout()}
        >
          Sign out
        </a>
      );
    } else {
      accountState = (
        <>
          <Link
            to={{
              pathname: "/signin/"
            }}
          >
            <span className="text-success py-2 d-none d-md-inline-block">
              Sign in
            </span>
          </Link>

          <Link
            to={{
              pathname: "/signup/"
            }}
          >
            <span className="text-success py-2 d-none d-md-inline-block">
              Sign up
            </span>
          </Link>
        </>
      );
    }

    return (
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#">
            <img src={Logo} alt="" width="32" height="32" />
          </a>
          <Link
            to={{
              pathname: "/home/"
            }}
          >
            <span className="py-2 d-none d-md-inline-block">Home</span>
          </Link>
          <Link
            to={{
              pathname: "/upload/"
            }}
          >
            <span className="py-2 d-none d-md-inline-block">Upload</span>
          </Link>
          <Link
            to={{
              pathname: "/discover/"
            }}
          >
            <span className="py-2 d-none d-md-inline-block">Discover</span>
          </Link>
          {this.props.name && (
            <b className="py-2 d-none d-md-inline-block text-warning">
              ({this.props.name})
            </b>
          )}
          {accountState}
        </div>
      </nav>
    );
  }
}
