import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { followAC, getUsersThunkCreator, setCurrentPageAC, setDisabledButton, unfollowAC } from '../../redux/usersReducer';
 
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage, this.props.pageSize)
    // this.props.toggleIsFetching(true);
    // getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((response) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.getUsers(response.data.items);
    //   })
  }

  onPageChange = (page) => {
    this.props.getCurrentPage(page);
    this.props.getUsersThunkCreator(page, this.props.pageSize);
  };

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChange={this.onPageChange}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          disabledButton={this.props.disabledButton}
          // setDisabledButton={this.props.setDisabledButton}
        />
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
  disabledButton: state.usersPage.disabledButton,
});

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  // getUsers: (users) => dispatch(setUsersAC(users)),
  getCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  // toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
  setDisabledButton: (isDisabling) => dispatch(setDisabledButton(isDisabling)),
  getUsersThunkCreator: (currentPage, pageSize) => {
    dispatch(getUsersThunkCreator(currentPage, pageSize))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)