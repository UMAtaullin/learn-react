import style from '../ProfileInfo.module.css';

const ProfileDataForm = ({ onSubmit, register, errors }) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <div>
        <label>Name:</label>
        <input type="text" {...register('fullName')} />
      </div>
      <div>
        <label>Looking for a job:</label>
        <input type="checkbox" {...register('lookingForAJob')} />
      </div>
      <div>
        <label>About me:</label>
        <textarea {...register('aboutMe', { required: true })} />{' '}
      </div>
      <div>
        <label>Skills:</label>
        <textarea {...register('lookingForAJobDescription')} />
      </div>

      {/* Поля для контактов */}
      <div>
        <label>GitHub:</label>
        <input
          type="text"
          {...register('github', {
            required: 'GitHub URL is required',
            pattern: {
              value: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_.-]+$/,
              message: 'Invalid GitHub URL format',
            },
          })}
        />
        {errors.github && <p className={style.errors}>{errors.github.message}</p>}{' '}
        {/* Отображение ошибки */}
      </div>
      <div>
        <label>VK:</label>
        <input type="text" {...register('vk')} />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileDataForm;

