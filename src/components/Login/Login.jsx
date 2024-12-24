import React, { useEffect, useState } from 'react';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';


const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [rememberMe, setRememberMe] = useState(false); // Состояние для чекбокса

  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const savedEmail = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true'; // Преобразуем строку в булевое значение

    if (savedEmail && savedRememberMe) {
      setValue('email', savedEmail);
      setValue('password', savedPassword);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit = (data) => {
    props.login(data.email, data.password);

    // Если чекбокс установлен, сохраняем данные в localStorage
    if (rememberMe) {
      localStorage.setItem('username', data.email);
      localStorage.setItem('password', data.password);
      localStorage.setItem('rememberMe', true);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.setItem('rememberMe', false);
    }
  };


  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        errorMessage={props.errorMessage}
        setRememberMe={setRememberMe} // Передаем функцию для изменения состояния чекбокса
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
});

export default connect(
  mapStateToProps, 
  { login })
  (Login);

