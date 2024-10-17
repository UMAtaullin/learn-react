import messageReducer from './messageReducer'
import profileReducer from './profileReducer'

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
    this._state.profilePage = profileReducer(
      this._state.profilePage, action);
    this._state.messengerPage = messageReducer(
      this._state.messengerPage, action);
    this._rerenderTree();
  }
}

export default store;