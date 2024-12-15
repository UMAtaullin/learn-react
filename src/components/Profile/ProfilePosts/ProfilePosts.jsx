import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';
import { useForm } from 'react-hook-form';
import { maxLength, requiredField } from '../../utils/validators';

const ProfilePosts = (props) => {
  // debugger
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    props.addPost(values.printText);
    reset(); 
  };

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <AddPostForm 
        onSubmit={handleSubmit(onSubmit)} 
        register={register} />
      <div className={cls.posts}>{posts}</div>
    </div>);
};

const AddPostForm = ({ onSubmit, register }) => {
  return (
    <div className={cls.row}>
      <form onSubmit={onSubmit}>
        <textarea
          {...register('printText', {
            required: true,
            validate: {
              requiredField,
              maxLength: maxLength(20) || 'Max length 30',
            },
          })}
        />
        <button type="submit" className={cls.add}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ProfilePosts;
