import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messenger/Messages/MessagesContainer';
import Header from './components/Header/Header';

const App = (props) => {
  // debugger
  return (
    <div className="app">
      <Header />
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="profile/:userId?"
            element={<ProfileContainer
              />} />
          <Route path="/messages/*"
            element={<MessagesContainer
            />} />
          <Route path="/users/"
            element={<UsersContainer />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
