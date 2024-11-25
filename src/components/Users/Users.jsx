import React  from 'react';
import ava from '../static/img/user.jpeg';
import axios from 'axios';
import style from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.getUsers(response.data.items)); 
  }

  render() {
    return (
      <div className={style.users}>
        {this.props.users.map((el) => (
          <div key={el.id}>
            <div className={style.row}>
              <div className={style.ava}>
                <img
                  className={style.image}
                  src={el.photos.small != null ? el.photos.small : ava}
                  alt=""
                />
                {el.followed ? (
                  <button
                    className={style.btn}
                    onClick={() => {
                      this.props.unfollow(el.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={style.btn}
                    onClick={() => {
                      this.props.follow(el.id);
                    }}
                  >
                    Follow
                  </button>
                )}
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
}

export default Users
