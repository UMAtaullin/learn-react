import React from 'react';
import { connect } from 'react-redux';
import cls from './Profile.module.css';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
    this.props.getUserProfile(userId)
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
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);