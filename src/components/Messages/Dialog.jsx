import { Route, Routes } from 'react-router-dom';
import cls from './Messages.module.css';
import DialogElon from './PersonalDialogs/DialogElon';
import DialogUral from './PersonalDialogs/DialogUral';
import SelectDialog from './PersonalDialogs/SelectDialog';

const Dialog = (props) => {
  return (
    <div className={cls.dialog}>
      <Routes>
        {renderRoutes(props.names)}
        <Route path="*" element={<SelectDialog />} />
      </Routes>
    </div>
  );
};

// Вспомогательная функция для генерации маршрутов
const renderRoutes = (names) => {
  return names.map((userName) => {
    const path = createPath(userName);
    return (
      <Route
        key={path}
        path={`/${path}/`}
        element={<DialogComponent name={userName} />}
      />
    );
  });
};

// Функция для создания пути
const createPath = (name) => {
  return name.toLowerCase().replace(' ', '');
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
