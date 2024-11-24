import { connect } from 'react-redux';
import Users from './Users'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
})

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  getUsers: (users) => dispatch(setUsersAC(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)