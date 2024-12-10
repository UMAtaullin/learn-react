import React from 'react';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = (props) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo 
        profile={props.profile } 
        status={props.status} 
        updateStatus={props.updateStatus} />
      <ProfilePostsContainer
        />
    </div>
  );
};

export default Profile;
