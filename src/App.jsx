import './index.css';

import user from 'data/user.json';
import Profile from './components/Profile/Profile';

import statiсArray from 'data/staticData.json';
import Statistics from './components/Statistic/Statistic';

import friends from 'data/friends.json';
import FriendList from './components/Frendlist/FriendList';

import transactionsData from 'data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        padding: '30px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statiсArray} />
      <Statistics stats={statiсArray} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
