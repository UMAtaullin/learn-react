import React from 'react';
import cls from '../ProfileInfo.module.css';

class Status extends React.Component {
  state = {
    editStatus: false,   
    status: this.props.status   
  };

  activateEditStatus = () => {
    this.setState ({
      editStatus: true
    })
  }
  deactivateEditStatus = () => {
    this.setState ({
      editStatus: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (event) => {
    this.setState({status: event.currentTarget.value})
  }

  render() {
    return (
      <div className={cls.status}>
        {!this.state.editStatus ? (
          <div>
            <span onDoubleClick={this.activateEditStatus}>
              {this.props.status || 'My status'}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditStatus}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
