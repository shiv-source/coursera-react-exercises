import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { Navbar } from "bootstrap-4-react";
import  FromValidation from './FormValidation'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" dark bg="primary">
        <div className="container">
          <Navbar.Brand herf="/">Coursera</Navbar.Brand>
        </div>
      </Navbar>
      <FromValidation> </FromValidation>
    </div>
  );
}

export default App;
