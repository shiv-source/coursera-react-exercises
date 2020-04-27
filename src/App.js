import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import { Navbar } from "bootstrap-4-react";

import NavbarComponent from "./components/NavbarComponent";
import Menu from "./components/MenuComponent";
import { Component } from "react";
import DISHES from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     dishes : DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <NavbarComponent />
//       <Menu />
//     </div>
//   );
// }

// export default App;
