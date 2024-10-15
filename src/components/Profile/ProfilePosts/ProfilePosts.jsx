import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/state';

const ProfilePosts = (props) => {
  let refElement = React.createRef();
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const changePost = () =>{
    let newText = refElement.current.value;
    props.dispatch(changePostActionCreator(newText))
  }

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea 
          placeholder="What's new?" 
          ref={refElement} 
          onChange={changePost} 
          value={props.printText} />
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
