import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to={'/login/'} />;
    return <Component {...props} />;
  };
  // class RedirectComponent extends React.Component {
  //   render() {
  //     if (!props.isAuth) return <Navigate to={'/login/'} />;
  //     return <Component {...props} />;
  //   }
  // }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })
  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


  return ConnectedRedirectComponent
}