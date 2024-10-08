import Message from './Message';

const Messages = (props) => {
  let text = props.messages.map(el => <Message text={el.message} />);
  return (
    <div className="messages">
      {text}
    </div>
  )
}

export default Messages;