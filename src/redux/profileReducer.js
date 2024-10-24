const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'

let initialState = {
  postsData: [
    { id: 1, text: 'I love traveling!', like: '155' },
    { id: 2, text: 'I\'m a photographer.', like: '125' },
    { id: 3, text: 'I\'m always learning new things.', like: '185' },
  ],
  printText: ''
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        text: state.printText,
        like: '0'
      }

      let copyState = {...state}
      copyState.postsData = [...state.postsData]
      copyState.postsData.push(newPost);
      copyState.printText = '';
      return copyState;
    case CHANGE_POST:
      let stateCopy = { ...state }
      stateCopy.printText = action.printText;
      return stateCopy;
    default:
      return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}

export default profileReducer