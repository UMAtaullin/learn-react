import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  // debugger
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/"
            element={<Profile
              // store={props.store} 
              />} />
          <Route path="/messages/*"
            element={<Messenger
              names={props.state.messagePage.namesData}
              // store={props.store} 
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
