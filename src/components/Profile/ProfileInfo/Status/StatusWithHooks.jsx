import React, { useEffect, useState } from 'react';
import cls from '../ProfileInfo.module.css';

const StatusWithHooks = (props) => {

  // state = {
  //   editStatus: false,
  //   status: this.props.status,
  // };

  // let stateWithSetState = useState(false)
  // debugger
  // let editStatus = stateWithSetState[0]
  // let setEditStatus = stateWithSetState[1]

  let [editStatus, setEditStatus] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  // activateEditStatus = () => {
  //   this.setState({
  //     editStatus: true,
  //   });
  // };

  const activateStatus = () => {
    setEditStatus(true);
  }
  // deactivateEditStatus = () => {
  //   this.setState({
  //     editStatus: false,
  //   });
  //   this.props.updateStatus(this.state.status);
  // };
  const deactivateStatus = () => {
    setEditStatus(false)
    props.updateStatus(status)
  }
  // onStatusChange = (event) => {
  //   this.setState({ status: event.currentTarget.value });
  // };
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }

  return (
    <div className={cls.status}>
      {!editStatus ? (
        <div>
          <span onDoubleClick={activateStatus}>
            {props.status || 'My status'}
          </span>
        </div>
      ) : (
        <div>
          <input 
            onChange={onStatusChange}
            onBlur={deactivateStatus} 
            autoFocus={true} 
            value={status}/>
        </div>
      )}
    </div>
  );
}

export default StatusWithHooks;
