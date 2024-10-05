import {Routes, Route} from 'react-router-dom';
import cls from './Messages.module.css';
import DialogUral from './PersonalDialogs/DialogUral';
import DialogElon from './PersonalDialogs/DialogElon';
import SelectDialog from './PersonalDialogs/SelectDialog';
import namesData from '../data';

const Dialog = () => {
  return (
    <div className={cls.dialog}>
      <Routes>
        {namesData.map((name) => {
          let path = name.toLowerCase().replace(' ', '');
          return (
            <Route key={path} path={`/${path}/`} element={<DialogComponent name={name} />} />
          );
        })}
        <Route path="*" element={<SelectDialog />} />
      </Routes>
    </div>
  );
};

const DialogComponent = ({ name }) => {
  switch (name) {
    case 'Ural Ataullin':
      return <DialogUral />;
    case 'Elon Musk':
      return <DialogElon />;
    default:
      return null;
  }
};

export default Dialog;
