import React, { Component } from 'react';
import {createStore} from 'redux';

import logo from './logo.svg';
import './App.css';

/*-------------------- REDUX STARTS --------------------*/
const reducer = (state, action)=>{
  console.log(state, action);
  return "Hello World";
}

const store = createStore(reducer, 0);

store.subscribe(()=>{
  console.log("Store Changed",store.getState());  
});

store.dispatch({"type":"INC", "payload": 1});
/*-------------------- REDUX ENDS ----------------------*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
