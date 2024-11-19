import Messenger from './components/Messenger/Messenger';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  // debugger
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/"
            element={<ProfileContainer
              />} />
          <Route path="/messages/*"
            element={<Messenger
              messengerPage={props.state.messengerPage}
            />} />
          <Route path="/users/"
            element={<UsersContainer />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
