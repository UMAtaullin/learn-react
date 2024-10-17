import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import cls from './Messenger.module.css'

const Messenger = (props) => {
  debugger
  return (
    <div className={cls.messengerPage}>
      <Dialogs names={props.names} />
      <Messages
        names={props.names}
        messages={props.messages}
        printMessage={props.printMessage}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Messenger;