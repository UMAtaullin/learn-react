import cls from './Messages.module.css';
import DialogItem from './DialogItem';
import namesData from '../data'

const Dialogs = () => {
  let name = namesData.map((name, index) => (
    <DialogItem key={index} name={name} />
  ));
  return (
    <div className={cls.dialogs}>
      {name}
    </div>
  );
};

export default Dialogs;
