import Profile from './components/Profile';

import './App.css';

import user from "./data";

function App() {
  return (
    <div className="profile">
      <Profile data={user} />
    </div>
  );
}

export default App;
