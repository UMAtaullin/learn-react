import React from 'react';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = (props) => {
  // debugger
  return (
    <div className={cls.profile}>
      <ProfileInfo />
      <ProfilePostsContainer
        store={props.store} />
    </div>
  );
};

export default Profile;
