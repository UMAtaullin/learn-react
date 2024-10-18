import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
import React from 'react';
import Messages from './Messages';


const MessagesContainer = (props) => {
  debugger

  let state = props.store.getState()

  const changeMessage = (newMessage) => {
    props.store.dispatch(changeMessageActionCreator(newMessage));
  };

  const sentMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  return (
    <Messages
      changeMessage={changeMessage}
      sentMessage={sentMessage}
      messages={state.messagePage.messagesData}
      printMessage={state.messagePage.printMessage}
    />
  );
};

export default MessagesContainer;
