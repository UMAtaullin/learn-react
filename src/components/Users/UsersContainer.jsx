import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.getUsers(response.data.items));
  }

  onPageChange = (page) => {
    // debugger;
    this.props.getCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.getUsers(response.data.items));
  };

  render() {

    return <Users 
      onPageChange = {this.onPageChange}
      totalCount = {this.props.totalCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage} 
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow = {this.props.unfollow} />;
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
})

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  getUsers: (users) => dispatch(setUsersAC(users)),
  getCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)