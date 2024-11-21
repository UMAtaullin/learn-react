import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import ProfilePosts from './ProfilePosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.postsData,
  printText: state.profilePage.printText,
});

const mapDispatchToProps = ({
  addPost: addPostActionCreator,
  changePost: changePostActionCreator,
});

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;
