import React from 'react'
// import cls from './Profile.module.css'
import ProfilePosts from './ProfilePosts/ProfilePosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className='content'>
      <div className='container'>
        <ProfileInfo />
        <ProfilePosts />
        </div>
    </div>
  )
}

export default Profile
