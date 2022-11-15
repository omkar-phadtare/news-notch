import React, { Component } from "react";
import "./Nav.css";
import {Link} from "react-router-dom"

export default class Navbar extends Component {

  render() {

    
    

    return (
      <div >
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NEWS <span className="title-brand">NOTCH</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Profile</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">LogIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/" >SignIn</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to={"/Business"}>Business</Link></li>
              <li><Link className="dropdown-item" to={"/Health"}>Health</Link></li>
              <li><Link className="dropdown-item" to={"/Sports"}>Sports</Link></li>
              <li><Link className="dropdown-item" to={"/Technology"}>Technology</Link></li>

              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      </div>
    );
  }
}
