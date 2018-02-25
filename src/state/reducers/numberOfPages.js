function numberOfPages(state=null, action){
  switch (action.type) {
    case "SET-NUMBER-OF-PAGE":
      return action.numberOfpage;   
    default:
      return state; 
  }
}

export default numberOfPages; 