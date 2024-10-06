import React from 'react';
import cls from './Profile.module.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={cls.profile}>
      <ProfileInfo />
      <ProfilePosts posts={props.posts} />
    </div>
  );
};

export default Profile;
