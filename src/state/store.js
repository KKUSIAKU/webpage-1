import { createStore} from "redux"; 
import rootReducer from "./reducer.js";

import CONSTANTS from "../public/constants.js"; 

const { MOVIES } = CONSTANTS; 


const store = createStore(rootReducer, {MOVIES}); 

export default store; 

