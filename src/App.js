import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  // debugger
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/"
            element={<Profile
              />} />
          <Route path="/messages/*"
            element={<Messenger
              names={props.state.messagePage.namesData}
            />} />
          <Route path="/users/"
            element={<UsersContainer />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
