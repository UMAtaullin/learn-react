import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer // usersPage обслуживается usersReducer
}) 

const store = createStore(reducers)

window.store = store

export default store