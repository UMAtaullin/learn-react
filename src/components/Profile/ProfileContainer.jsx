import React from 'react';
import { connect } from 'react-redux';
import cls from './Profile.module.css';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profileReducer';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../utils/withRouter';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = 31852;
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div className={cls.profile}>
        <Profile 
          {...this.props} 
          profile={this.props.profile} 
          status={this.props.status} 
          updateStatus={this.props.updateStatus} />
      </div>
    );
  }; 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { 
    getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);