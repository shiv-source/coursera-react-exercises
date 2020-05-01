import React from "react";
import { Component } from "react";

class FromValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      message : "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length < 5){
        console.log("password weak");
        this.setState({
            message : "Week password"
        })
        
    }
    else if( event.target.value.length < 9 ){
        this.setState({
            message : "Good password"
        })
        
    }
    else {
        this.setState({
            message : "Strong password"
        })
        
    }
  }

  handleSubmit(event) {
    console.log(this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mt-5">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> Password : </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Type Password here..."
            />
            <input
              type="submit"
              value="SBUBMIT"
              className="btn btn-primary ml-2"
            />
            <p> Password:{this.state.password}</p><br/>
            <b> Message: {this.state.message} </b>
          </form>
        </div>
      </div>
    );
  }
}

export default FromValidation;
