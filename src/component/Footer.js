import React, { Component } from "react";

var loadjs = require('loadjs');

class Footer extends Component {
  componentWillMount() {
    loadjs(['../assets/js/scripts.js'], 
    function() {
    });
  }

  render() {
    return (
      <footer className="dashboard">
        <p>
          © 2020 Collective. All Rights Reserved | Design by{" "}
          <a
            href="https://w3layouts.com/"
            target="_blank"
            className="text-primary"
          >
            W3layouts.
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
