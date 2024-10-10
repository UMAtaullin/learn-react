import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
  let refElement = React.createRef();
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const addPost = () => {
    debugger
    let newPostText = refElement.current.value;
    if (newPostText) {
      props.addPost(newPostText);
      refElement.current.value = '';
    }
  }

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea 
          placeholder="What's new?" 
          ref={refElement} />
        <button 
          className={cls.add}
          onClick={addPost}>
            Add
          </button>
      </div>
      <div className={cls.posts}>{posts}</div>
    </div>
  );
};

export default ProfilePosts;
