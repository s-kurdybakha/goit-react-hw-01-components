import css from '../FriendListItem/FriendListItem.module.css';

function FriendListItem({ friendName, friendAvatar, friendStatus }) {
  return (
    <li className={css.item}>
      <span className={css.status}>{friendStatus}</span>
      <img
        className={css.avatar}
        src={friendAvatar}
        alt="User avatar"
        width={48}
      />
      <p className={css.name}>{friendName}</p>
    </li>
  );
}

export default FriendListItem;
