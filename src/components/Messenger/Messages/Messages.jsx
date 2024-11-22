import Message from './Message/Message';
import cls from './Messages.module.css';
import React from 'react';

const Messages = (props) => {
  let messages = props.messages.map((el) => (
    <Message key={el.id} name={el.name} text={el.message} />
  ));

  const changeMessage = (event) => {
    let newMessage = event.target.value;
    props.changeMessage(newMessage);
  };

  const sentMessage = () => {
    props.sentMessage();
  };

  return (
    <div className={cls.messages}>
      {messages}
      <div className={cls.row}>
        <textarea onChange={changeMessage} value={props.printMessage} />
        <button onClick={sentMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
