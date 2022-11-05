import { combineReducers } from "@reduxjs/toolkit";
import counterReducer, { chooseProductAttribute } from "./redusers";
import { changeCurrency } from "./redusers";
//debugger
export default combineReducers({
    reducer: counterReducer, changeCurrency, chooseProductAttribute
    // currency: changeCurrency
})
