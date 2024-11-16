import React from 'react';
import cls from './Users.module.css'
import axios from 'axios';
import ava from '../static/img/user.jpeg'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
     .then((response) => {
        this.props.setUsers(response.data.items);
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    let pagesCount = this.props.totalUsers / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
      pages.push(i);    
    }  
    return (
      <div className={cls.users}>

        <div className={cls.pagination}>
          {pages.map(page => <span 
          onClick={() => {this.onPageChanged(page)}} 
          className={
              this.props.currentPage === page && cls.activePage}
            >{page}</span>)}
             
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div className={cls.usersList}>
              <div className={cls.user}>
                <div className={cls.ava}>
                  <img src={ava} alt="" />
                  {user.followed ? (
                    <button onClick={() => this.props.unfollow(user.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(user.id)}>
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
 
}

export default Users;
