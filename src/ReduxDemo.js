import React from 'react';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const reducers = (state, action)=>{
    switch(action.type){
        case "FETCH_REQ_START" : {
            state = {...state, fetching: true};
            break;
        }

        case "FETCH_REQ_ERROR" : {
            state = {...state, error:action.payload};
            break;
        }

        case "FETCH_REQ_DONE" : {
            state = {...state, fetching:false, fetched:true, data:action.payload};
            break;
        }
    }
    return state;
};

const refMiddleWare = applyMiddleware(thunk, logger);
const store = createStore(reducers, refMiddleWare);

store.subscribe(()=>{
    console.log("State Updatedddd", store.getState());
});

store.dispatch({"type":"INC", "payload":0});

store.dispatch((dispatch)=>{
    dispatch({type:'FETCH_REQ_START'});

    let url = "https://jsonplaceholder.typicode.com/posts";
    let mpromise = axios.get(url);
    mpromise.then((data)=>{

        dispatch({type:"FETCH_REQ_DONE", payload:data.data});
    }).catch((err)=>{
        dispatch({"type":"FETCH_REQ_ERROR", payload:err});
    });
});

export default store;