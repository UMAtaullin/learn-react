import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
import React from 'react';
import Messages from './Messages';
import StoreContext from '../../../StoreContext';


const MessagesContainer = (props) => {
  debugger

  // let state = props.store.getState()

  // const changeMessage = (newMessage) => {
  //   props.store.dispatch(changeMessageActionCreator(newMessage));
  // };

  // const sentMessage = () => {
  //   props.store.dispatch(addMessageActionCreator())
  // }

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()

        const changeMessage = (newMessage) => {
          store.dispatch(changeMessageActionCreator(newMessage));
        };

        const sentMessage = () => {
          store.dispatch(addMessageActionCreator())
        }

       return <Messages
          changeMessage={changeMessage}
          sentMessage={sentMessage}
          messages={state.messagePage.messagesData}
          printMessage={state.messagePage.printMessage}
        />
      }
    }
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
