Чтобы интегрировать валидацию из вашего файла `validators.js` в код вашего компонента `ProfilePosts`, вам нужно сделать несколько шагов. Предположим, что в вашем файле `validators.js` определены функции для валидации, такие как `requiredField`. Мы будем использовать эти функции для настройки валидации полей формы.

### 1. Импортируйте валидаторы

Сначала убедитесь, что вы импортировали необходимые функции в ваш компонент. Например:

```javascript
import { requiredField, maxLength } from '../../utils/validators';
```

### 2. Настройте валидацию полей

Теперь вы можете использовать эти валидаторы при регистрации поля с помощью `react-hook-form`. Вот как это можно сделать:

#### Пример кода

Вот обновленный код вашего компонента с использованием валидации из `validators.js`:

```javascript
import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';
import { useForm } from 'react-hook-form';
import { requiredField, maxLength } from '../../utils/validators';

const maxLength30 = maxLength(30); // Пример использования валидатора для максимальной длины

const ProfilePosts = (props) => {
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    props.addPost(values.printText);
    reset(); 
  };

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <AddPostForm 
        onSubmit={handleSubmit(onSubmit)} 
        register={register} 
        errors={errors} // Передаем ошибки в форму
      />
      <div className={cls.posts}>{posts}</div>
    </div>
  );
};

const AddPostForm = ({ onSubmit, register, errors }) => {
  return (
    <div className={cls.row}>
      <form onSubmit={onSubmit}>
        <textarea 
          {...register('printText', { 
            required: requiredField, // Используем валидатор для обязательного поля
            validate: {
              maxLength: value => maxLength30(value) || "Максимальная длина 30 символов"
            }
          })} 
        />
        {errors.printText && <span className={cls.error}>{errors.printText.message}</span>}
        <button type="submit" className={cls.add}>Add</button>
      </form>
    </div>
  );
};

export default ProfilePosts;
```

### Объяснение изменений:

1. **Импорт валидаторов**: Мы импортируем необходимые функции валидации из вашего файла `validators.js`.

2. **Настройка валидации**:
   - Мы используем `requiredField` для обязательного поля.
   - Добавляем дополнительную проверку на максимальную длину с помощью функции `maxLength`. В данном случае мы создаем константу `maxLength30`, которая определяет максимальную длину текста.

3. **Отображение ошибок**: Мы добавили отображение ошибок под текстовым полем. Если есть ошибка валидации (например, поле пустое или превышает максимальную длину), сообщение об ошибке будет отображаться.

4. **Использование `formState`**: Мы используем `formState` из `useForm`, чтобы получить информацию об ошибках.

### Примечания

- Убедитесь, что ваши функции валидаторов возвращают правильные значения (например, `true` или строку с сообщением об ошибке).
- Вы можете добавлять дополнительные валидаторы по мере необходимости и комбинировать их.

Теперь ваш компонент будет использовать кастомные валидаторы из файла `validators.js`, что сделает вашу форму более гибкой и удобной для пользователя!