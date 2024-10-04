import cls from './Messages.module.css';

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.person}>Ural Ataullin"</div>
      <div className={cls.person}>Elon Musk"</div>
      <div className={cls.person}>Roman Savin"</div>
      <div className={cls.person}>Tony Stark"</div>
      <div className={cls.person}>Natasha Romanova"</div>
    </div>
  );
};

export default Dialogs;
