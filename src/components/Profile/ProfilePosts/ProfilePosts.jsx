import Post from './Post/Post'
import cls from'./ProfilePosts.module.css'

const ProfilePosts = () => {
  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea placeholder="What's new?" />
        <button>Add</button>
      </div>
      <div className={cls.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default ProfilePosts