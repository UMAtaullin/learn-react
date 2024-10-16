import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/"
            element={<Profile
              posts={props.state.profilePage.postsData}
              printText={props.state.profilePage.printText}
              dispatch={props.dispatch} />} />
          <Route path="/messages/*"
            element={<Messenger
              messengerPage={props.state.messengerPage}
              dispatch={props.dispatch}
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
