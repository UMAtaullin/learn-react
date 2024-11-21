import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return{
    messages: state.messagePage.messagesData,
    printMessage: state.messagePage.printMessage,
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

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
  
export default MessagesContainer;
