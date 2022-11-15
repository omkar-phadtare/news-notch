import React, { Component } from "react";
import "./Nav.css";
import {Link} from "react-router-dom"

export default class NewsType extends Component {

  render(props) {

    return (
      <div className="text-center">
        <div className="container  navbar-expand-lg navbar-dark p-3 ">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 type-font">
            <div className="col">
              <Link className="bg-l" to="/">
              <div className="p-3 border border-end-0 bg-light rounded-pill ">
                General
              </div>
              </Link>
            </div>
            <div className="col">
              <Link className="bg-l" to="Technology">
              <div className="p-3 border border-end-0 bg-light rounded-pill">
                Technology
              </div>
              </Link>
            </div>
            <div className="col">
              <Link className="bg-l" to="Health">
                <div className="p-3 border border-end-0 bg-light rounded-pill">
                Health
              </div>
              </Link>
            </div>
            <div className="col">
            <Link className="bg-l"  to="Business">
            <div className="p-3 border border-end-0 bg-light rounded-pill">
              Business
                </div>
                </Link>
            </div>
            <div className="col">
              <Link className="bg-l" to="Sports">
              <div className="p-3 border border-end-0 bg-light rounded-pill">
                Sports
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
