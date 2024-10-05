import cls from '../Messages.module.css';

const DialogUral = () => {
  return (
    <div className={cls.dialog}>
      <div className={cls.message}>
        <div className={cls.name}>Elon:</div>
        Hi there, I'm Ural, how are you?
      </div>
      <div className={cls.message}>
        <div className={cls.name}>Ural:</div>I'm doing great!
      </div>
      <div className={cls.message}>What about you?</div>
      <div className={cls.message}>
        <div className={cls.name}>Elon:</div>I'm fine, thank you!
      </div>
    </div>
  );
};

export default DialogUral;
