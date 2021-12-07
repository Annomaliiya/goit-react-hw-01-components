import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import './App.css';

import data from "./data";

function App() {
  return (
    <div className="container">
      <Profile data={data.user} />
      <Statistics title="Upload stats" stats={data.statistics} />;
      <FriendList friends={data.friends} />
      <TransactionHistory props={data.transactions} />;
    </div>
  );
}

export default App;
