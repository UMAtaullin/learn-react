import { Field } from 'redux-form';
import style from './Login.module.css';
import React from 'react';

const LoginForm = (props) => {
  // debugger
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder={'email'}
          name={'login'}
          component={'input'}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder="password"
          name={'password'}
          component={'input'}
        />
      </div>
      <div>
        <Field 
        type="checkbox" 
        name={'rememberMe'}
        component={'input'} />
        <label className={style.checkbox}> remember me </label>
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
