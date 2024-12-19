import { usersAPI } from '../api/api'
import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
// const CHANGE_POST = 'CHANGE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  postsData: [
    { id: 1, text: 'I love traveling!', like: '155' },
    { id: 2, text: 'I\'m a photographer.', like: '125' },
    { id: 3, text: 'I\'m always learning new things.', like: '185' },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        text: action.printText,
        like: '0'
      }
      return {
        ...state,
        postsData: [ ...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
    }
}

export const  addPostActionCreator = (printText) => ({ type: ADD_POST, printText })
// export const changePostActionCreator = (newText) => {
//   return { type: CHANGE_POST, printText: newText };
// }
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatusAC = (status) => ({
  type: SET_STATUS, status })

export const getUserProfile = (userId) => 
  async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatusAC(response.data));
  })
}
export const updateStatus = (status) => 
  async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
}

export default profileReducer

/* printText: action.printText - это способ передать новое значение текста из компонента в редюсер. Это позволяет вашему приложению оставаться синхронизированным с действиями пользователя и обновлять состояние на основе их ввода.*/