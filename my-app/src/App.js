import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <input 
            placeholder="First name" 
            value={this.state.firstName} 
            name="firstName" 
            onChange={this.handleChange}/>
         
          <br />
         
          <input 
            placeholder="Last name" 
            value={this.state.lastName} 
            name="lastName" 
            onChange={this.handleChange}/>
          
          <h1>{this.state.firstName} {this.state.lastName}</h1>
        </form>
      </div>
    );
  }
}

export default App;
