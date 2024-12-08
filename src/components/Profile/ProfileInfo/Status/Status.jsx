import React from 'react';
import cls from '../ProfileInfo.module.css';

class Status extends React.Component {
  state = {
    editStatus: false,
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
  }

  render() {
    return (
      <div className={cls.status}>
        {!this.state.editStatus ? (
          <div>
            <span onDoubleClick={this.activateEditStatus}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivateEditStatus}
              autoFocus={true}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
