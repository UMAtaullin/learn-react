import React, { useState } from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';
import { useForm } from 'react-hook-form';

const ProfilePosts = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [posts, setPosts] = useState(props.posts); // Локальное состояние для хранения постов

  const onSubmit = (data) => {
    const newPost = {
      id: Date.now(), // Генерация уникального ID для нового поста
      text: data.printText,
      like: 0, // Или любое другое начальное значение
    };

    setPosts((prevPosts) => [...prevPosts, newPost]); // Обновление состояния с новым постом
    props.addPost(newPost.text); // Если нужно также вызвать функцию из props
    reset(); // Сброс формы после отправки
  };

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <AddPostForm onSubmit={handleSubmit(onSubmit)} register={register} />
      <div className={cls.posts}>
        {posts.map((el) => (
          <Post key={el.id} text={el.text} like={el.like} />
        ))}
      </div>
    </div>
  );
};

const AddPostForm = ({ onSubmit, register }) => {
  return (
    <div className={cls.row}>
      <form onSubmit={onSubmit}>
        <textarea
          {...register('printText', { required: true })}
          placeholder="Напишите ваш пост..."
        />
        <button type="submit" className={cls.add}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ProfilePosts;
