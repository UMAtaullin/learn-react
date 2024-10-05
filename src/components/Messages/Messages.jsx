import Dialog from './Dialog';
import Dialogs from './Dialogs';
import cls from './Messages.module.css'


const Messages = () => {
  return (
    <div className={cls.messagesPage}>
      <Dialogs />
      <Dialog />
    </div>
  );
};

export default Messages