const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        text: state.printText,
        like: '0'
      }
      state.postsData.push(newPost);
      state.printText = '';
      return state;
    case CHANGE_POST:
      state.printText = action.printText;
      return state;
    default:
      return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}

export default profileReducer