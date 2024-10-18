import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
import React from 'react';
import Message from './Message/Message';


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
    <Message
      messages={state.messagePage.messagesData}
      printMessage={state.messagePage.printMessage}
      changeMessage={changeMessage}
      sentMessage={sentMessage}
    />
  );
};

export default MessagesContainer;
