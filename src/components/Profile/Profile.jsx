import React from 'react';
import cls from './Profile.module.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  // debugger
  return (
    <div className={cls.profile}>
      <ProfileInfo />
      <ProfilePosts 
        printText={props.printText} 
        posts={props.posts} 
        addPost={props.addPost} 
        changePost={props.changePost} />
    </div>
  );
};

export default Profile;
