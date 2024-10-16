import DialogItem from './DialogItem';

const Dialogs = (props) => {
  // debugger
  let names = props.names.map(el => (
    <DialogItem key={el.id} name={el.name} />  
  ))
  return(
    <div className="dialogs">
      {names}
    </div>
  )
}

export default Dialogs;