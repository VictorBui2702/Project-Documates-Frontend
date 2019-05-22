import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

export default class Discover extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="category">Category:</label>
        <select
          className="custom-select d-block w-100"
          id="category"
          onChange={e => this.props.handleChangeCategory(e.target.value)}
          required
        >
          <option value="all">All</option>
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
        <div className="invalid-feedback">Please select a valid category.</div>
        <div className="row">
          {this.props.documentList.map(document => (
            <div key={document.document} className="col-md-4 movie-card mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{document.name}</h5>
                  <p className="text-success">#{document.category}</p>
                  <Document file={document.document}>
                    <Page width={320} pageNumber={1} />
                  </Document>
                </div>
                <div className="card-footer text-center">
                  <a
                    className="btn btn-danger"
                    role="button"
                    href={document.document}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
