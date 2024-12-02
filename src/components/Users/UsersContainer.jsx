import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { followAC, setCurrentPageAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../redux/usersReducer';
import { getUsers } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.getUsers(response.data.items);
      })
  }

  onPageChange = (page) => {
    this.props.getCurrentPage(page);
    this.props.toggleIsFetching(true);
    getUsers(page, this.props.pageSize)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.getUsers(response.data.items)});
  };

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
          <Users
            onPageChange={this.onPageChange}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow} />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
})

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  getUsers: (users) => dispatch(setUsersAC(users)),
  getCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)