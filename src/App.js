import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import { Navbar } from "bootstrap-4-react";

import NavbarComponent from './components/NavbarComponent';
import Menu from './components/MenuComponent';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Menu />
    </div>
  );
}

export default App;
