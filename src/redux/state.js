let rerenderTree = () => {
  console.log('Rerendering the tree...');
}

let state = {
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
};

export let addPost = () => {
  // debugger;
  let newPost = {
    id: 4,
    text: state.profilePage.printText,
    like: '0'
  };
  state.profilePage.postsData.push(newPost);
  rerenderTree();
}

export let changePost = (printText) => {
  state.profilePage.printText = printText;
  rerenderTree();
}

export const subscribe = (callback) => {
  rerenderTree = callback;
}

export default state;