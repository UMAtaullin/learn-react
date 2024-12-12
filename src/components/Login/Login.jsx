import React from 'react';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';


const Login = (props) => {

  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
