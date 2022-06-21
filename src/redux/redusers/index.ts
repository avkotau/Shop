import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./redusers";

export default combineReducers({
    reducer: counterReducer,

})
