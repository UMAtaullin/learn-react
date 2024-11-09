import React from 'react';
import cls from './Users.module.css'
import axios from 'axios';
import ava from '../static/img/user.jpeg'

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
     .then((response) => {
        props.setUsers(response.data.items);
      })
    }
 
  return (
    <div className={cls.users}>
      <h1>Users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={cls.usersList}>
            <div className={cls.user}>
              <div className={cls.ava}>
                <img src={ava} alt="" />
                {user.followed ? (
                  <button onClick={() => props.unfollow(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => props.follow(user.id)}>
                    Follow
                  </button>
                )}
              </div>
              <div className={cls.info}>
                <div>
                  <p>{user.name}</p>
                  <p>{user.status}</p>
                </div>
                <div>
                  <p>{"user.location.country"}</p>
                  <p>{"user.location.city"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
