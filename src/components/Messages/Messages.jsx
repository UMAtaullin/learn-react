import cls from './Messages.module.css'

const Messages = () => {
  return (
    <div className={cls.messages}>
      <div className={cls.message}>
        <span>Ural Ataullin:</span> Hello, world!
      </div>
      <div className={cls.message}>
        <span>Ural Ataullin:</span> How are you?
      </div>
      <div className={cls.message}>
        <span>Ural Ataullin:</span> I am fine, thank you!
      </div>
      <div className={cls.message}>
        <span>Elon Musk:</span> Hello, Ural! How are you?
      </div>
    </div>
  )
}

export default Messages