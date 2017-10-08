import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import LogoutReducer from './logoutReducer'
import CircleReducer from './createCircleReducer'
const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    LogoutReducer,
    CircleReducer
})

export default rootReducer;