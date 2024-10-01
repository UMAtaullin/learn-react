import React from 'react'
import cls from './Post.module.css'

const Post = () => {
  return (
    <div className={cls.post}>
      <div className={cls.ava}>
        <img
          src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
          alt='Ava'
        />
      </div>
      <div className={cls.message}>Hi there</div>
      <div className={cls.like}>
        <span>&#128147;</span>
        15
      </div>
    </div>
  )
}

export default Post
