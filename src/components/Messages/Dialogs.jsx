import DialogItem from './DialogItem';
import cls from './Messages.module.css';

const Dialogs = (props) => {

  let name = props.names.map((name, index) => (
    <DialogItem key={index} name={name} />
  ));
  return (
    <div className={cls.dialogs}>
      {name}
    </div>);
};

export default Dialogs;
