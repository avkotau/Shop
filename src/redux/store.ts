import { createStore } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redusers/redusers";
// @ts-ignore
import reducer from "./redusers/index.ts";


const store = configureStore({

        reducer,
    }

);


// export type AppDispatch = typeof store.dispatch
console.log(store)
debugger
export default store;
