const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const store = {
  _state: {
    messengerPage: {
      namesData: [
      'Sergey Brin', 'Elon Musk', 'Tulsan Big', 'Alyssa Earhart', 'Billie Vite'
    ],
      messagesData: [
        { id: 1, message: 'Hi there, I\'m Ural, how are you?', name: 'Ural' },
        { id: 2, message: 'I\'m doing great!', name: 'Ural' },
        { id: 3, message: 'What about you?', name: 'Ural' },
        { id: 4, message: 'I\'m fine, thank you!', name: 'Elon' },
        { id: 5, message: 'I\'m working on a new smartphone.', name: 'Elon' },
        { id: 6, message: 'I\'m excited about it.', name: 'Elon' },
      ]
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
      default:
        return;
      }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (newText) => {
  return { type: CHANGE_POST, printText: newText };
}

export default store;