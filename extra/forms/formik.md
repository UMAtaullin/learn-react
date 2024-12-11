При использовании **Formik** для управления формами в вашем приложении, вам не обязательно добавлять что-либо в `combineReducers`, если вы не планируете хранить состояние формы в Redux. **Formik** сам по себе управляет состоянием формы, и это может быть достаточно для большинства случаев.

Однако, если вы хотите сохранить данные формы (например, после успешного входа) в глобальном состоянии вашего приложения с помощью Redux, вам нужно будет интегрировать Redux и добавить соответствующий редюсер в `combineReducers`. Вот как это можно сделать:

### Пример интеграции Formik с Redux

1. **Создание редюсера для аутентификации**:

Если у вас уже есть `authReducer`, убедитесь, что он может обрабатывать действие для сохранения данных пользователя. Например:

```javascript
// authReducer.js
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
```

2. **Добавление редюсера в combineReducers**:

Если у вас уже есть `authReducer`, вам просто нужно убедиться, что он включен в `combineReducers`:

```javascript
import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer'; // импорт редюсера аутентификации

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer,
  auth: authReducer, // добавление редюсера аутентификации
});
```

3. **Создание действий для аутентификации**:

Создайте действия для входа и выхода:

```javascript
// actions.js
export const login = (userData) => ({
  type: 'LOGIN',
  payload: userData,
});

export const logout = () => ({
  type: 'LOGOUT',
});
```

4. **Изменение компонента Login для использования Redux**:

Теперь вы можете использовать `useDispatch` из `react-redux`, чтобы отправить данные пользователя в Redux после успешной отправки формы:

```javascript
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../actions'; // импорт действия входа
import loginFormSchema from '../FormValidation/LoginFormSchema';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(login(values)); // отправка данных пользователя в Redux
        }}
        validationSchema={loginFormSchema}
      >
        {() => (
          <Form>
            <div>
              <Field type={'text'} name={'email'} placeholder={'e-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field type={'password'} name={'password'} placeholder={'password'} />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor={'rememberMe'}> remember me </label>
            </div>

            <button type={'submit'}>Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
```

### Заключение

Таким образом, если вы хотите использовать Redux для хранения состояния аутентификации пользователя (например, после входа), вам нужно добавить соответствующий редюсер в `combineReducers` и использовать действия для обновления состояния. Если же вы просто хотите управлять состоянием формы с помощью Formik и не планируете хранить данные в Redux, то дополнительных изменений не требуется.