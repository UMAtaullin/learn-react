import cls from './Message.module.css'

const Message =(props) =>{
  // debugger
  return (
    <div className={cls.message}>
      <div className={cls.title}>
        <span className={cls.name}>{props.name}</span>
        <span className={cls.time}>11:11</span>
      </div>
      <div className={cls.text}>{props.text}</div>
    </div>
  );
}

export default Message;