import React from 'react'

const Profile = () => {
  return (
    <div className='content'>
      <div className='container'>
        <h2>Профиль пользователя</h2>
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div className='posts'>
            <div className='item'>post 1</div>
            <div className='item'>post 2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
