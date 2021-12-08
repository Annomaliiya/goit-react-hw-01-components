import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import styles from './App.module.css';

import data from "./data";

function App() {
  return (
    <div className={styles.container}>
      <Profile username={data.user.username}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats} />
      <Statistics title="Upload stats" stats={data.statistics} />;
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />;
    </div>
  );
}

export default App;
