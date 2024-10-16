const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
const store = {
  _state: {
    messengerPage: {
      namesData: [
        {id: 1, name: 'Sergey Brin'},
        {id: 2, name: 'Elon Musk'},
        {id: 3, name: 'Yuri Gagarin'},
        {id: 4, name: 'Vladimir Putin'}
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
  },
    profilePage: {
      postsData: [
        { id: 1, text: 'I love traveling!', like: '155' },
        { id: 2, text: 'I\'m a photographer.', like: '125' },
        { id: 3, text: 'I\'m always learning new things.', like: '185' },
      ],
      printText: ''
    }
  },

  getState () {
    return this._state;
  },

  _rerenderTree() {
    console.log('Rerendering the tree...');
  },

  subscribe(callback) {
    this._rerenderTree = callback;
  },
  
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: this._state.profilePage.postsData.length + 1,
          text: this._state.profilePage.printText,
          like: '0'
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.printText = '';
        this._rerenderTree();
        break;
      case CHANGE_POST:
        this._state.profilePage.printText = action.printText;
        this._rerenderTree();
        break;
      case ADD_MESSAGE:
        let newMessage = {
          id: this._state.messengerPage.messagesData.length + 1,
          message: this._state.messengerPage.printMessage,
          name: 'Name'
        };
        this._state.messengerPage.messagesData.push(newMessage);
        this._state.messengerPage.printMessage = '';
        this._rerenderTree();
        break;
      case CHANGE_MESSAGE:
        this._state.messengerPage.printMessage = action.printMessage;
        this._rerenderTree();
        break;
      default:
        return;
      }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}
export const changeMessageActionCreator = (newMessage) => {
  return { type: CHANGE_MESSAGE, printMessage: newMessage };
}

export default store;