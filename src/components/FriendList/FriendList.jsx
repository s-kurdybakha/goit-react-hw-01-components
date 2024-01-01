import FriendListItem from './FriendListItem/FriendListItem';

import css from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            friendName={friend.name}
            friendAvatar={friend.avatar}
            friendStatus={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
