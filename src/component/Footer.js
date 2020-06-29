import React, { Component } from "react";

class Footer extends Component {
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
