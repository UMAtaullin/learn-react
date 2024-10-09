import DialogItem from './DialogItem';

const Dialogs = (props) => {
  let names = props.names.map(el => (
    <DialogItem name={el} />  
  ))
  return(
    <div className="dialogs">
      {names}
    </div>
  )
}

export default Dialogs;