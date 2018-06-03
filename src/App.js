import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloWorld from './Components/HelloWorld'

class App extends Component{
  render(){
    return (
      <HelloWorld name={Josh} />
    );
  }
}

const mountDiv = document.querySelector('#app');

render(<App/>, mountDiv);