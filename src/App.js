import React, { Component } from 'react';
import { render } from 'react-dom';
import SignIn from './Components/SignIn'

class App extends Component{
  state = {
    name: "Joseph",
    email: "",
    password: ""
  }

  changingName = () => {
    this.setState({
      name: 'OpenLab'
    })
  }
  
  setNameAndPassword = (user) => {
    this.setState({
      email: user.email,
      password: user.password
    })
  }
  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        {this.state.email !== "" && <h2>{this.state.email}</h2>}
        {this.state.password !== "" && <h2>{this.state.password}</h2>}
        <SignIn 
          name={this.state.name} 
          changeName={this.changingName}
          setNameAndPassword={this.setNameAndPassword}
          />
      </div>
    );
  }
}

const mountDiv = document.querySelector('#app');

render(<App/>, mountDiv);