import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../../redux/messageReducer';
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
    // changeMessage: (newMessage) => {
    //   dispatch(changeMessageActionCreator(newMessage));
    // },
    sendMessage: (printMessage) => {
      dispatch(addMessageActionCreator(printMessage));
    },
  };
}

// let AuthRedirectComponent = withAuthRedirect(Messages);

// const MessagesContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
  
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,

)(Messages);
