function numberOfResult(state=0, action){
  switch (action.type) {
    case "GET-NUMBER-OF-RESULT":
      return action.numberOfResult;   
    default:
      return state; 
  }
}

export default numberOfResult; 