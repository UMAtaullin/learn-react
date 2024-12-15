import { addPostActionCreator} from '../../../redux/profileReducer';
import ProfilePosts from './ProfilePosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.postsData,
  printText: state.profilePage.printText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (printText) => dispatch(addPostActionCreator(printText)),
  // changePost: (text) => dispatch(changePostActionCreator(text)),
});

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;
