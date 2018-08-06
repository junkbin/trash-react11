import React from 'react';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';

import logger from 'redux-logger';

const reducers = (state, action)=>{
    return state;
};

const refMiddleWare = applyMiddleware(logger);
const store = createStore(reducers, refMiddleWare);

store.subscribe(()=>{
    console.log("State Updatedddd", store.getState());
});

store.dispatch({"type":"INC", "payload":0});

export default store;