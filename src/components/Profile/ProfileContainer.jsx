import React from 'react';
import { connect } from 'react-redux';
import cls from './Profile.module.css';
import Profile from './Profile';
import { getUserProfile, getUserStatus, saveDataThC, savePhotoTC, updateStatus } from '../../redux/profileReducer';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../utils/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = 31852;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <div className={cls.profile}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          isOwner={!this.props.router.params.userId}
          savePhoto={this.props.savePhotoTC}
          saveData={this.props.saveDataThC}
        />
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
    getUserProfile, 
    getUserStatus, 
    updateStatus,
    savePhotoTC,
    saveDataThC,
   }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);