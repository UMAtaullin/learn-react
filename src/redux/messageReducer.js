const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

let initialState = {
  namesData: [
    { id: 1, name: 'Sergey Brin' },
    { id: 2, name: 'Elon Musk' },
    { id: 3, name: 'Yuri Gagarin' },
    { id: 4, name: 'Vladimir Putin' }
  ],
  messagesData: [
    { id: 1, message: 'Hi there, I\'m Ural, how are you?', name: 'Ural' },
    { id: 2, message: 'I\'m doing great!', name: 'Elon' },
    { id: 3, message: 'What about you?', name: 'Elon' },
    { id: 4, message: 'I\'m fine, thank you!', name: 'Ural' },
    { id: 5, message: 'I\'m working on a new smartphone.', name: 'Elon' },
    { id: 6, message: 'I\'m excited about it.', name: 'Elon' },
  ],
  printMessage: ''
}

const messageReducer = (state=initialState, action) => {
  let stateCopy = { 
    ...state,
    messagesData: [...state.messagesData]
   };
   debugger

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.printMessage,
        name: 'Name'
      };
      stateCopy.messagesData.push(newMessage);
      stateCopy.printMessage = '';
      return stateCopy;
    case CHANGE_MESSAGE:
      stateCopy.printMessage = action.printMessage;
      return stateCopy;
    default:
      return state;
  }
}


export const changeMessageActionCreator = (newMessage) => {
  return { type: CHANGE_MESSAGE, printMessage: newMessage };
}
export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default messageReducer;