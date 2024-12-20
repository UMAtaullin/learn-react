import { requiredField } from '../../utils/validators';
import Message from './Message/Message';
import cls from './Messages.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Messages = (props) => {

  let messages = props.messages.map((el) => (
    <Message key={el.id} name={el.name} text={el.message} />
  ));

  // const changeMessage = (event) => {
  //   let newMessage = event.target.value;
  //   props.changeMessage(newMessage);
  // };

  // const sentMessage = () => {
  //   props.sentMessage();
  // };
 
  const addNewMessage = (values) => {
    // alert(values.printMessage)
    props.sendMessage(values.printMessage);
  };


  return (
    <div className={cls.messages}>
      {messages}
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form 
      onSubmit={props.handleSubmit}
      className={cls.row}>
        <Field 
          component='textarea' 
          name='printMessage' 
          validate={requiredField}/>
      <button className={cls.btn}>Send</button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
  );

export default Messages;
