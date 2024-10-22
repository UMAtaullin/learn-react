import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer
})

const store = createStore(reducers)

window.store = store

export default store