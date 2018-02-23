//http://localhost:5000/
import {createStore,applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import CONSTANTS from "../public/constants.js"; 

const url = "/videos"; 
//const movies = CONSTANTS.MOVIES; 
const movies = {};
const page = 0; 
const store = createStore(rootReducer, {movies,page}, applyMiddleware(thunk)); 

//store.dispatch(fetchAllMovies(url)); 

export default store; 

