import { NavLink } from 'react-router-dom';
import cls from './Messages.module.css';

const DialogItem = (props) => {
  let path = props.name.toLowerCase().replace(' ', '');
  return (
    <div className={cls.dialogs}>
      <div className={cls.person}>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? cls.active : '')}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
