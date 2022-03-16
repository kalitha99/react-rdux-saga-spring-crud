import { combineReducers } from "redux";
import userRducer from "./reducer";

const rootReducer = combineReducers({
    data:userRducer,
})

export default rootReducer;