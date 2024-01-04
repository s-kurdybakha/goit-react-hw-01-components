import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        // color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      <Profile
        user={user.username}
        usertag={user.tag}
        location={user.location}
        userPhoto={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      React homework template goit-react-hw-01-components
    </div>
  );
};
