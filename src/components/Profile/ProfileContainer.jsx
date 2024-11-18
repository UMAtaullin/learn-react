import React from 'react';
import { connect } from 'react-redux';
import cls from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setUserProfile(response.data);
    })
    
  }

  render() {
    return (
      <div className={cls.profile}>
        <Profile {...this.props} userProfile={this.props.userProfile} />
      </div>
    );
  }; 
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.profileData,
  })


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
