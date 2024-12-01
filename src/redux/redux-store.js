import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer, // usersPage обслуживается usersReducer
  auth: authReducer,
}) 

const store = createStore(reducers)

window.store = store // в любой момент времени изучить store

export default store