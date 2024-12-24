import style from './Login.module.css';

const LoginForm = ({
  onSubmit,
  register,
  errors,
  errorMessage,
  rememberMe,
  setRememberMe,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {errorMessage && <p className={style.error}>{errorMessage}</p>}
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
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)} // Изменяем состояние чекбокса
        />
        remember me
      </div>
      <button className={style.btn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm