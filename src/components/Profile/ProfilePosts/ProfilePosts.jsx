import Post from './Post/Post';
import cls from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
  let posts = props.posts.map((el) => (
    <Post key={el.id} text={el.text} like={el.like} />
  ));

  return (
    <div className={cls.container}>
      <h2>Posts</h2>
      <div className={cls.row}>
        <textarea placeholder="What's new?" />
        <button className={cls.add}>Add</button>
      </div>
      <div className={cls.posts}>{posts}</div>
    </div>
  );
};

export default ProfilePosts;
