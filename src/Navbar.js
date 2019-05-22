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
          <b>Sign out</b>
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
            <b className="text-success py-2 d-none d-md-inline-block">
              Sign in
            </b>
          </Link>

          <Link
            to={{
              pathname: "/signup/"
            }}
          >
            <b className="text-success py-2 d-none d-md-inline-block">
              Sign up
            </b>
          </Link>
        </>
      );
    }

    return (
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#">
            <img src={Logo} alt="" width="35" height="35" />
          </a>
          <Link
            to={{
              pathname: "/"
            }}
          >
            <b className="py-2 d-none d-md-inline-block">Home</b>
          </Link>
          <Link
            to={{
              pathname: "/upload/"
            }}
          >
            <b className="py-2 d-none d-md-inline-block">Upload</b>
          </Link>
          <Link
            to={{
              pathname: "/discover/"
            }}
          >
            <b className="py-2 d-none d-md-inline-block">Discover</b>
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
