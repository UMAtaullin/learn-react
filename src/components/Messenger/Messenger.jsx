import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import cls from './Messenger.module.css'

const  Messenger = (props) => {

  return (
    <div className={cls.messengerPage}>
      <Dialogs names={props.messengerPage.namesData} />
      <Messages
        names={props.messengerPage.namesData}
        messages={props.messengerPage.messagesData}
      />
    </div>
  );
}

export default Messenger;