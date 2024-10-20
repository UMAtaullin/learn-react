import React from 'react';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import ProfilePosts from './ProfilePosts';
import StoreContext from '../../../StoreContext';

const ProfilePostsContainer = (props) => {

  // let state = props.store.getState()    

  // const addPost = () => {
  //   props.store.dispatch(addPostActionCreator())
  // }

  // const changePost = (text) =>{
  //   props.store.dispatch(changePostActionCreator(text))
  // }

  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState()    

        const addPost = () => store.dispatch(addPostActionCreator())

        const changePost = (text) =>{
          store.dispatch(changePostActionCreator(text))
        }

        return <ProfilePosts
            addPost={addPost}
            changePost={changePost}
            posts={state.profilePage.postsData}
            printText={state.profilePage.printText}
          />}
        }
    </StoreContext.Consumer>
  );
};

export default ProfilePostsContainer;
