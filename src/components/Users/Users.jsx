import React from 'react';
import cls from './Users.module.css'
import ava from '../static/img/user.jpeg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = props.totalUsers / props.pageSize;
  let pages = [];
  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pages.push(i);    
  }  

  return (
    <div className={cls.users}>
      <div className={cls.pagination}>
        {pages.map((page) => (
          <span
            onClick={() => {
              props.onPageChanged(page);
            }}
            className={props.currentPage === page && cls.activePage}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={cls.usersList}>
            <div className={cls.user}>
              <NavLink to={'/profile/' + user.id} 
                className={cls.ava}>
                <img src={user.photos.small != null ? user.photos.small : ava} alt="" />
              </NavLink>

              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
            <div className={cls.info}>
              <div>
                <p>{user.name}</p>
                <p>{user.status}</p>
              </div>
              <div>
                <p>{'user.location.country'}</p>
                <p>{'user.location.city'}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Users;
