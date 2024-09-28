import React from 'react'
import cls from './Profile.module.css'

const Profile = () => {
  return (
    <div className={cls.content}>
      <div>Профиль пользователя</div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={cls.posts}>
          <div className={cls.item}>post 1</div>
          <div className='item'>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
