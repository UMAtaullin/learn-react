import Message from './Message';

const Messages = (props) => {
  let messages = props.messages.map(el => 
    <Message name={el.name} text={el.message} />);
  return (
    <div className="messages">
      {messages}
    </div>
  )
}

export default Messages;