import { combineReducers } from "redux";
import { userReducer } from "./userReducer"
import { heroReducer } from "./heroReducer"


const reducers = combineReducers({
    users: userReducer,
    hero: heroReducer
})
export default reducers