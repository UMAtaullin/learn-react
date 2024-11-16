import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    totalUsers: state.usersPage.totalUsers,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer