function page(state = 0,action){
  switch(action.type){
    case "SET-PAGE": 
      return action.page; 
    default:
      return state; 
  }
}

export default page; 