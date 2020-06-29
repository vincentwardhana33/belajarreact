import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-menu sticky-sidebar-menu">
        <div className="logo">
          <h1>
            <Link to="/">Collective</Link>
          </h1>
        </div>
        <div className="logo-icon text-center">
          <Link to="/">
            <img src="assets/images/logo.png" alt="logo-icon" />
          </Link>
        </div>
        <div className="sidebar-menu-inner">
          <ul className="nav nav-pills nav-stacked custom-nav">
            <li className="active">
              <Link to="/">
                <i className="fa fa-tachometer" />
                <span> Dashboard</span>
              </Link>
            </li>
            <li className="menu-list">
              <a href="#">
                <i className="fa fa-cogs" />
                <span>
                  Elements <i className="lnr lnr-chevron-right" />
                </span>
              </a>
              <ul className="sub-menu-list">
                <li>
                  <a href="carousels.html">Carousels</a>
                </li>
                <li>
                  <a href="cards.html">Default cards</a>
                </li>
                <li>
                  <a href="people.html">People cards</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">
                <i className="fa fa-table" /> <span>Pricing tables</span>
              </Link>
            </li>
            <li>
              <a href="blocks.html">
                <i className="fa fa-th" /> <span>Content blocks</span>
              </a>
            </li>
            <li>
              <a href="forms.html">
                <i className="fa fa-file-text" /> <span>Forms</span>
              </a>
            </li>
          </ul>
          <a className="toggle-btn">
            <i className="fa fa-angle-double-left menu-collapsed__left">
              <span>Collapse Sidebar</span>
            </i>
            <i className="fa fa-angle-double-right menu-collapsed__right" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
