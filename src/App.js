import React, { Component } from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import logo from './logo.svg';
import './App.css';

/*-------------------- REDUX STARTS --------------------*/
const reducer = (state=0, action)=>{
  if(action.type === 'INC'){
    return state + action.payload;
  } else if(action.type === "DEC"){
    return state - action.payload;
  }

  return state;
}

const defaultUserState = {"name" : "Affixus"};
const userReducer = (state = defaultUserState , action)=>{
  return state;
}

const defaultTweetState = [];
const tweetsReducer = (state = defaultTweetState, action)=>{
  return state;
}

const allReducers = combineReducers({userReducer, tweetsReducer, reducer});
const allMiddlewares = applyMiddleware(logger);
const store = createStore(allReducers, allMiddlewares);

store.subscribe(()=>{
  console.log("Store Changed.", store.getState());  
});

store.dispatch({"type":"INC", "payload": 1});
store.dispatch({"type":"INC", "payload": 10});
store.dispatch({"type":"INC", "payload": 100});
store.dispatch({"type":"DEC", "payload": 100});
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
