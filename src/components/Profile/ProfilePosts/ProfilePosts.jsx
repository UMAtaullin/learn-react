import React from 'react';
import Post from './Post/Post';
import cls from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
  let refElement = React.createRef();
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  const addPost = () => {
    props.dispatch({type: 'ADD_POST'})
  }

  const changePost = () =>{
    let newText = refElement.current.value;
    props.dispatch({type: 'CHANGE_POST', printText: newText})
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
