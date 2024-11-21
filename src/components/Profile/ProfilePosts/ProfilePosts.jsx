import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const addPost = () => {
    props.addPost();
  };

  const changePost = (event) => {
    let newText = event.target.value;
    props.changePost(newText);
  };

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea
          placeholder="What's new?"
          onChange={changePost}
          value={props.printText}
        />
        <button className={cls.add} onClick={addPost}>
          Add
        </button>
      </div>
      <div className={cls.posts}>{posts}</div>
    </div>
  );
};

export default ProfilePosts;
