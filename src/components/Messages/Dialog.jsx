import cls from './Messages.module.css';

const Dialog = () => {
  return (
    <div className={cls.dialog}>
      <div className={cls.message}>Hi there, I'm Elon Musk</div>
      <div className={cls.message}>I'm Roman Savin</div>
      <div className={cls.message}>Nice to meet you, Natasha Romanova</div>
      <div className={cls.message}>How are you today, Ural Ataullin</div>
      <div className={cls.message}>I'm fine, thank you!</div>
      <div className={cls.message}>What about you, Tony Stark?</div>
      <div className={cls.message}>I'm happy, thank you!</div>

    </div>
  );
};

export default Dialog;
