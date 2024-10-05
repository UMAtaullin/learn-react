import {Routes, Route} from 'react-router-dom';
import cls from './Messages.module.css';
import DialogUral from './PersonalDialogs/DialogUral';
import DialogElon from './PersonalDialogs/DialogElon';
import SelectDialog from './PersonalDialogs/SelectDialog';

const Dialog = () => {
  return (
    <div className={cls.dialog}>
      <Routes>
        <Route path="/ural/" element={<DialogUral />} />
        <Route path="/elon/" element={<DialogElon />} />
        <Route path="*" element={<SelectDialog />} />
      </Routes>
    </div>
  );
};

export default Dialog;
