import { createStore } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redusers/redusers";
// @ts-ignore
import reducer from "./redusers/index.ts";
import { loadJobs } from "../query/productQuery";


const store = configureStore({

        reducer,

    }

);


// export type AppDispatch = typeof store.dispatch

export default store;
