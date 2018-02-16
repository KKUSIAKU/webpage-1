//http://localhost:5000/
import {createStore,applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import rootReducer from "./reducer.js";
import { fetchAllMovies } from "./actions.js"; 
import CONSTANTS from "../public/constants.js"; 

const url = "/videos"; 
const { MOVIES } = CONSTANTS; 
const store = createStore(rootReducer, {MOVIES}, applyMiddleware(thunk)); 

//store.dispatch(fetchAllMovies(url)); 

export default store; 

