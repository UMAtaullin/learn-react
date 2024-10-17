const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

const messageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.printMessage,
        name: 'Name'
      };
      state.messagesData.push(newMessage);
      state.printMessage = '';
      return state;
    case CHANGE_MESSAGE:
      state.printMessage = action.printMessage;
      return state;
    default:
      return state;
  }
}


export const changeMessageActionCreator = (newMessage) => {
  return { type: CHANGE_MESSAGE, printMessage: newMessage };
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default messageReducer;