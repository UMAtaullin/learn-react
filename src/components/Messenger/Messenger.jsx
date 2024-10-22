import Dialogs from './Dialogs/Dialogs';
import MessagesContainer from './Messages/MessagesContainer';
import cls from './Messenger.module.css'

const  Messenger = (props) => {

  return (
    <div className={cls.messengerPage}>
      <Dialogs 
      names={props.names} 
      />
      <MessagesContainer
        // store={props.store}
      />
    </div>
  );
}

export default Messenger;