import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from '../data/user';
import data from '../data/data';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
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
      React homework template sdsd
    </div>
  );
};
