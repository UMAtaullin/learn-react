import React from 'react';
import { useForm } from 'react-hook-form';

const Login = (props) => {
  debugger
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Здесь вы можете обработать данные, например, отправить их на сервер
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="e-mail"
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>

        <div>
          <input
            type="password"
            {...register('password', { required: 'Required' })}
            placeholder="password"
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>

        <div>
          <input type="checkbox" {...register('rememberMe')} />
          <label htmlFor="rememberMe"> remember me </label>
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
