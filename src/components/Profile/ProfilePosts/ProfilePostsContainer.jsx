import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
// import React from 'react';
import ProfilePosts from './ProfilePosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const ProfilePostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState()    

//         const addPost = () => store.dispatch(addPostActionCreator())

//         const changePost = (text) =>{
//           store.dispatch(changePostActionCreator(text))
//         }

//         return <ProfilePosts
//             addPost={addPost}
//             changePost={changePost}
//             posts={state.profilePage.postsData}
//             printText={state.profilePage.printText}
//           />}
//         }
//     </StoreContext.Consumer>
//   );
// };


const mapStateToProps = (state) => ({
  posts: state.profilePage.postsData,
  printText: state.profilePage.printText,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: () => dispatch(addPostActionCreator()),
    changePost: (text) => dispatch(changePostActionCreator(text)),
})

// const _connect = connect(mapStateToProps, mapDispatchToProps)
const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;
