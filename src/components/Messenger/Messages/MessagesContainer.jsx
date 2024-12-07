import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return{
    messages: state.messagePage.messagesData,
    printMessage: state.messagePage.printMessage,
    // isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (newMessage) => {
           dispatch(changeMessageActionCreator(newMessage))},
    sentMessage: () => {
          dispatch(addMessageActionCreator())},
  }
}

let AuthRedirectComponent = withAuthRedirect(Messages);

// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) return <Navigate to={'/login/'} />;
//   return <Messages {...props} />;
// };

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
  
export default MessagesContainer;
