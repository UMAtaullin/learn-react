import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Routes>
          <Route path="/profile/" element={<Profile />} />
          <Route path="/messages/*" element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
