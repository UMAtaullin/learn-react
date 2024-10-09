import Dialogs from './Dialogs/Dialogs';
import cls from './Messenger.module.css'

const Messenger = (props) => {
  return(
    <div className={cls.messengerPage}>
      <Dialogs names={props.messengerPage.namesData} />
    </div>
  )
}

export default Messenger;