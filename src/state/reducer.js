
function rootReducer(state={}, action){

  if(action.type =="GET-MOVIES"){
    console.log("action catch up"); 

    return state; 
  }
  return state; 
}

export default rootReducer; 