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
  profileData: null
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // let newPost = {
      //   id: state.postsData.length + 1,
      //   text: state.printText,
      //   like: '0'
      // }
      // let stateCopy = {...state}
      // stateCopy.postsData = [...state.postsData]
      // stateCopy.postsData.push(newPost);
      // stateCopy.printText = '';
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
      // let stateCop = { ...state }
      // stateCop.printText = action.printText;
      return {
        ...state,
        printText: action.printText,
      };
    default:
      return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}
export const setUserProfile = (profileData) => ({ type: SET_USER_PROFILE, profileData })

export default profileReducer

/* printText: action.printText - это способ передать новое значение текста из компонента в редюсер. Это позволяет вашему приложению оставаться синхронизированным с действиями пользователя и обновлять состояние на основе их ввода.*/