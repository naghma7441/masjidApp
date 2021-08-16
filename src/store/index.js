import { combineReducers } from "redux";

import {loginReducer}  from '../screen/Login/reducer'
const rootReducer=combineReducers({
    loginReducer
})

export default rootReducer;