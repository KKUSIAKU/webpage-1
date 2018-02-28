
import {ACTIONS, DEFAULT_STATE } from "../config";

function filter(state=DEFAULT_STATE.FILTER, action){
  switch(action.type){
    case ACTIONS.SET_FILTER:
      return action.filter; 
    default:
      return state; 
  }
}

export default filter; 