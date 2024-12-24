import React from 'react';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './Login.module.css'
import { Navigate } from 'react-router-dom';


const Login = (props) => {

  const {register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (args) => {
    props.login(args.email, args.password)
  }

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
      />
    </div>
  );
};

const LoginForm = ({ onSubmit, register, errors, errorMessage }) => {

  return (
    <form onSubmit={onSubmit}>
      {errorMessage && (
        <p className={style.error}>{errorMessage}</p>
      )}
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: "The user's name is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="e-mail"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          placeholder="password"
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <input type="checkbox" {...register('remember me')} />
      remember me
      <button className={style.btn} type="submit">
        Log in
      </button>
    </form>
  );
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
});

export default connect(
  mapStateToProps, 
  { login })
  (Login);

