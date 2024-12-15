import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';
import { Field, reduxForm } from 'redux-form';

const ProfilePosts = (props) => {
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  // const addPost = () => {
  //   props.addPost();
  // };

  // const changePost = (event) => {
  //   let newText = event.target.value;
  //   props.changePost(newText);
  // };

  const addNewPost = (values) => {
    alert('hi')
    // props.addPost(values.pintText)
  }

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={cls.posts}>{posts}</div>
    </div>
  );
};

const addPostForm = (props) => {
  return (
    <div className={cls.row}>
      <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name='printText'/>
      </form>
      {/* <textarea
        placeholder="What's new?"
        onChange={changePost}
        value={props.printText}
      /> */}
      <button className={cls.add}>Add</button>
    </div>
  )
}

const AddPostFormRedux = reduxForm({form: 'postForm'})(addPostForm)

export default ProfilePosts;
