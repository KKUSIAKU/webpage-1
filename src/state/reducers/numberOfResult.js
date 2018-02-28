function numberOfResult(state=0, action){
  switch (action.type) {
    case "SET-NUMBER-OF-RESULT":
      return action.numberOfResult;   
    default:
      return state; 
  }
}

export default numberOfResult; 