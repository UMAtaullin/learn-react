import { NavLink } from 'react-router-dom';
import cls from './Messages.module.css';

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.person}>
        <NavLink to="ural"
          className={({ isActive }) => (isActive ? cls.active : '')}
        >
          Ural Ataullin
        </NavLink>
      </div>
      <div className={cls.person}>
        <NavLink to="elon"
          className={({ isActive }) => (isActive ? cls.active : '')}
        >
          Elon Musk
        </NavLink>
      </div>
    </div>
  );
};

export default Dialogs;
