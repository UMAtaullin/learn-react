import React from 'react';
import { connect } from 'react-redux';
import cls from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = 31852;
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
      debugger
      this.props.setUserProfile(response.data);
    })
    
  }

  render() {
    return (
      <div className={cls.profile}>
        <Profile 
          {...this.props}
          profile={this.props.profile}/>
      </div>
    );
  }; 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  })

let withRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
  withRouterContainer
);
