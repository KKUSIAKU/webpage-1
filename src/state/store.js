//http://localhost:5000/
import {createStore,applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import CONSTANTS from "../public/constants.js"; 
import { DEFAULT_STATE} from "./config";

const url = "/videos"; 
const initialState = {
  movies: DEFAULT_STATE.MOVIES,
  page:DEFAULT_STATE.PAGE,
  numberOfPages:DEFAULT_STATE.NUMBER_OF_PAGES,
  numberOfResult:DEFAULT_STATE.NUMBER_OF_RESULT
};
//const movies = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk)); 

//store.dispatch(fetchAllMovies(url)); 

export default store; 

