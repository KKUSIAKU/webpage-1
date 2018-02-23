
function movies(state = {}, action) {
  let newState;
  switch (action.type) {
    case "REQUEST-MOVIES":
      console.log("request sent to the server");
      return state;
    case "RECEIVE-MOVIES":
      console.log("received movies data");
      newState= Object.assign({}, state); 
      newState[action.page] = action.data; 
      
      return newState;
    case "REQUEST-MOVIES-FAILED":
      console.log("movies request failed");
      return state;
    default:
      return state;
  }
}

export default movies; 