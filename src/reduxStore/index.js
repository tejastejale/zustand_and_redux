// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tempReducer from "./Reducers/tempReducer";

const reducers = combineReducers({
  tempReducer: tempReducer,
});

export default reducers;
