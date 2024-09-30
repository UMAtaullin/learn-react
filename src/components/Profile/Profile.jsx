import React from 'react'
import cls from './Profile.module.css'

const Profile = () => {
  return (
    <div className='content'>
      <div className='container'>
        <div className={cls.profile}>
          <div className={cls.ava}>
            <img
              src='https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645cec1a20e1c7242b32db52_6460ad5c6edf700dfdf05e3a/scale_1200'
              alt=''
            />
          </div>
          <div className={cls.description}>
            <p className={cls.name}>Name: Ural Ataullin</p>
            <p className={cls.name}>Date: 24.01.1988</p>
            <p className={cls.name}>Telegram: @UMAtaullin</p>
            <p className={cls.name}>Interests: programming</p>
          </div>
        </div>
        <div className="posts">
          My posts
          <div>New post</div>
          <div className='items'>
            <div className='item'>post 1</div>
            <div className='item'>post 2</div>
            <div className='item'>post 3</div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
