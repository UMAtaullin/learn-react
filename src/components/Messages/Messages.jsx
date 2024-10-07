import Dialog from './Dialog';
import Dialogs from './Dialogs';
import cls from './Messages.module.css'


const Messages = (props) => {
  debugger
  return (
    <div className={cls.messagesPage}>
      <Dialogs names={props.dialogsPage.namesData} />
      <Dialog names={props.dialogsPage.namesData} />
    </div>
  );
};

export default Messages