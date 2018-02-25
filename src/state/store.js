//http://localhost:5000/
import {createStore,applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import CONSTANTS from "../public/constants.js"; 

const url = "/videos"; 
const initialState = {
  movies: {},
  page:0,
  numberOfPages:4,
  numberOfResult:0
};
//const movies = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk)); 

//store.dispatch(fetchAllMovies(url)); 

export default store; 

