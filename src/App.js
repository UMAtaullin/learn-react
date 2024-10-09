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
            element={<Profile posts ={props.state.profilePage.postsData} />} />
          <Route path="/messages/*" 
            element={<Messenger messengerPage={props.state.messengerPage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
