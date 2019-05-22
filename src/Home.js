import React, { Component } from "react";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.png";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.jpeg";
import img10 from "./images/10.jpeg";

export default class Home extends Component {
  render() {
    return (
      <div className=" text-center">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">
              Welcome to Documates
            </h1>
            <p className="lead font-weight-normal">
              Documates is a file sharing platform for various fields.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Try now
            </a>
          </div>
          <img
            className="product-device box-shadow d-none d-md-block"
            src={img2}
            alt=""
          />

          <img
            className="img-cover product-device product-device-2 box-shadow d-none d-md-block"
            src={img1}
            alt=""
          />
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>

            <img
              className="bg-light box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img3}
              alt=""
            />
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-dark box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img4}
            />
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-dark box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img5}
            />
          </div>
          <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-light box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img6}
            />
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-white box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img7}
            />
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-white box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img8}
            />
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-white box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img9}
            />
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <img
              className="bg-white box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0"
              }}
              src={img10}
            />
          </div>
        </div>
      </div>
    );
  }
}
