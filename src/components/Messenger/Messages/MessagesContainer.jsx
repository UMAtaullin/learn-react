import { connect } from 'react-redux';
import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
// import React from 'react';
import Messages from './Messages';
// import StoreContext from '../../../StoreContext';


// const MessagesContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState()

//         const changeMessage = (newMessage) => {
//           store.dispatch(changeMessageActionCreator(newMessage));
//         };

//         const sentMessage = () => {
//           store.dispatch(addMessageActionCreator())
//         }

//        return <Messages
//           changeMessage={changeMessage}
//           sentMessage={sentMessage}
//           messages={state.messagePage.messagesData}
//           printMessage={state.messagePage.printMessage}
//         />
//       }
//     }
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => ({
  messages: state.messagePage.messagesData,
  printMessage: state.messagePage.printMessage,
});

const mapDispatchToProps = ({
  changeMessage: changeMessageActionCreator,
  sentMessage: addMessageActionCreator,
});

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
