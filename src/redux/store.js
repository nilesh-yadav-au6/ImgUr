import { createStore, applyMiddleware , combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "../redux/reducers/userREducer"
import thunk from "redux-thunk"

const reducer = combineReducers({
    user:userReducer
})

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))


// store.dispatch(userLogin({type:"USER_LOGIN" , payload:{email:"nilesh@gmail.com" , password:7894}}))

export default store