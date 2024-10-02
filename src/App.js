import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      {/* <Profile/> */}
      <Messages />
    </div>
  );
}

export default App;
