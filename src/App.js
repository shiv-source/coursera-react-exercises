import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { Navbar } from "bootstrap-4-react";
//import { Alert } from "bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" dark bg="primary">
        <div className="container">
          <Navbar.Brand herf="/">Coursera</Navbar.Brand>
        </div>
      </Navbar>
      <div className="container col-sm-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="loginForm">
          <label for="loginForm">Login Form</label>
        </div>

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
