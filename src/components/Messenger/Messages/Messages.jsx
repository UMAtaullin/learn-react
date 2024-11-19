import Message from './Message/Message';
import cls from './Messages.module.css';

const Messages = (props) => {
  let messages = props.messages.map((el) => (
    <Message name={el.name} text={el.message} />
  ));
  return (
    <div className={cls.messages}>
      {messages}
      <div className={cls.row}>
        <textarea />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Messages;
