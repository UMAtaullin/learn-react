import Post from './Post/Post'
import cls from'./ProfilePosts.module.css'

const messages = [
  { id: 1, text: 'Hello, world!', like: '45' },
  { id: 2, text: 'How are you?', like: '55' },
  { id: 3, text: 'I am fine, thank you!', like: '115' },
]

const ProfilePosts = () => {
  let posts = messages.map(el => 
    <Post key={el.id} text={el.text} like={el.like} />)

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea placeholder="What's new?" />
        <button className={cls.add}>Add</button>
      </div>
      <div className={cls.posts}>
        {posts}
      </div>
    </div>
  )
}

export default ProfilePosts