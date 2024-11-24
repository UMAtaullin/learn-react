// import ava from '../static/img/user.jpeg';
import style from './Users.module.css'

let Users = (props) => {
  debugger
  return (
    <div>
      <div className={style.users}>
        {props.users.map((el) => (
          <div key={el.id}>
            <div className={style.row}>
              <div className={style.ava}>
                <img className={style.image} src={el.ava} alt="" />
                {el.followed 
                  ? <button className={style.btn} onClick={() => 
                    {props.unfollow(el.id)}}>Unfollow</button>
                  : <button className={style.btn} onClick={() => 
                    {props.follow(el.id)}}>Follow</button>}
              </div>
              <div className={style.info}>
                <div>
                  <p>{el.name}</p>
                  <p>{el.status}</p>
                </div>
                <div>
                  <p>{'el.location.country'}</p>
                  <p>{'el.location.city'}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
