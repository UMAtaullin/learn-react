import React from 'react';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './Login.module.css'


const Login = (props) => {
  debugger

  const {register, handleSubmit } = useForm()

  const onSubmit = (args) => {
    props.login(args.email, args.password)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm 
        onSubmit={handleSubmit(onSubmit)}
        register={register}/>
    </div>
  );
};

const LoginForm = ({ onSubmit, register }) => {

  return (
    <form onSubmit={onSubmit}>
      <input type='email' {...register('email')} />
      <input type='password' {...register('password')} />
      <button className={style.btn} type="submit">Log in</button>
    </form>
  );
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
