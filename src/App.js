import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
  render(){
    return (
      <h1>Hola mundo</h1>
    );
  }
}

const mountDiv = document.getElementById('app');

render(<App/>, mountDiv);