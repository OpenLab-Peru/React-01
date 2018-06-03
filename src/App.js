import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloWorld from './Components/HelloWorld'

class App extends Component{

  state ={
    name:"Joseph"
  }

  changingName = () =>{
    this.setState({
      name: 'OpenLab'
    })
  }

  render(){
    return (
      <SingIn name={this.state.name} changeName={this.changingName} />
    );
  }
}

const mountDiv = document.querySelector('#app');

render(<App/>, mountDiv);