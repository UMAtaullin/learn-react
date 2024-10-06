import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/" 
            element={<Profile posts ={props.posts} />} />
          <Route path="/messages/*" element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
