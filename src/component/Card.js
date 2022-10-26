import React, { Component } from "react";
import "./Nav.css";

export default class Card extends Component {
  render() {

    const styleLink={
      color:"black",
      textDecoration:"none"
    }

    let { title, description, ImgUrl,NewsUrl } = this.props;
    return (
      <div className="container">
        <a href={NewsUrl} style={styleLink} target="_blank" rel="noopener noreferrer">
        <div
          className="card mb-4 rounded-4 card-style border border-3 border-end-0"
          style={{maxHeight:"250px"}}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={!ImgUrl?"https://images.indianexpress.com/2021/08/OnePlus-foldable-phone.jpg":ImgUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    );
  }
}
