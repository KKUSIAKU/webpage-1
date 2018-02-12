import config from "../cconfig.js"; 

function rootReducer(state={}, action){

  if(action.type =="GET-MOVIES"){
    console.log("action catch up"); 
    const MongoClient = require("mongodb").MongoClient; 
    MongoClient.connect(config.uri, {nativeparser:true}, (err, database) =>{
      if (err) {
        console.log("connection failed"); 
        return state; 
      }
      console.log("connection ok");
      return database; 
      
    });
    return state; 
  }
  return state; 
}

export default rootReducer; 