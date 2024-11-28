const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  postsData: [
    { id: 1, text: 'I love traveling!', like: '155' },
    { id: 2, text: 'I\'m a photographer.', like: '125' },
    { id: 3, text: 'I\'m always learning new things.', like: '185' },
  ],
  printText: '',
  profile: null
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, {
          id: state.postsData.length + 1,
          text: state.printText,
          like: '0'
        }],
        printText: ''
      };
    case CHANGE_POST:
      return {
        ...state,
        printText: action.printText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer

/* printText: action.printText - это способ передать новое значение текста из компонента в редюсер. Это позволяет вашему приложению оставаться синхронизированным с действиями пользователя и обновлять состояние на основе их ввода.*/