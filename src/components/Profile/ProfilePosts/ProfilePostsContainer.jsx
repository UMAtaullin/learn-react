import React from 'react';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import ProfilePosts from './ProfilePosts';

const ProfilePostsContainer = (props) => {

  let state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const changePost = (text) =>{
    props.store.dispatch(changePostActionCreator(text))
  }

  return (
    <ProfilePosts 
      addPost={addPost}
      changePost={changePost}
      posts={state.profilePage.postsData}
      printText={state.profilePage.printText}
      />
  );
};

export default ProfilePostsContainer;
