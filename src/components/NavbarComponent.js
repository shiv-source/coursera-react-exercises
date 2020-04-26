import React, { Component } from "react";
import { Navbar } from "bootstrap-4-react";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" dark bg="primary">
          <div className="container">
            <Navbar.Brand herf="/">Coursera</Navbar.Brand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
