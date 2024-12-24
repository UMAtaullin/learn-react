import SideBar from './components/SideBar/SideBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messenger/Messages/MessagesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { getUsersThunkCreator } from './redux/authReducer';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getUsersThunkCreator();
  }

  render() {

    return (
      <div className="app">
        <HeaderContainer />
        <SideBar />
        <div className="main">
          <Routes>
            <Route 
              exact path="/" 
              element={<Navigate to={'/profile'} 
              />} />
            <Route path="profile/:userId?"
              element={<ProfileContainer
              />} />
            <Route path="/messages/"
              element={<MessagesContainer
              />} />
            <Route path="/users/"
              element={<UsersContainer />} />
            <Route path="/login/"
              element={<Login />} />

          </Routes>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getUsersThunkCreator })
  (App)
