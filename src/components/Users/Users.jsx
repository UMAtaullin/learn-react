import React  from 'react';
import ava from '../static/img/user.jpeg';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
  // debugger
  let pagesCount = props.totalCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pages.push(i);
  }

  return (
    <div className={style.users}>
      <div className={style.pagination}>
        {pages.map((page) => {
          return (
            <span
            className={props.currentPage === page ? style.activePage : null}
              onClick={() => {props.onPageChange(page)}}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((el) => (
        <div key={el.id}>
          <div className={style.row}>
            <div className={style.column}>
              <NavLink to={"/profile/" + el.id} className={style.ava}>
                <img
                  className={style.image}
                  src={el.photos.small != null ? el.photos.small : ava}
                  alt=""
                />
              </NavLink>
              <div className={style.btn}>
                {el.followed 
                  ? (<button onClick={() => {
                    axios.delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, 
                        {withCredentials: true,
                        headers: {'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e'}
                  })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(el.id);
                        }
                      });
                    }}>
                    Unfollow
                  </button>
                ) : (<button onClick={() => {
                  axios.post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {withCredentials: true,
                      headers: {'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e'}
                })
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(el.id);
                      }
                    });
                  }}>
                    Follow
                  </button>
                )}
              </div>
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
  );
}

export default Users
