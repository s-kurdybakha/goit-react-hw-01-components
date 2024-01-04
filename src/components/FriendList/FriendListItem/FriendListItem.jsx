import css from '../FriendListItem/FriendListItem.module.css';
import { getRandomHexColor } from '../../../index';

function FriendListItem({ friendName, friendAvatar, friendStatus }) {
  return (
    <li className={css.item}>
      {friendStatus === true ? (
        <span className={css.statusGreen}></span>
      ) : (
        <span className={css.statusRed}></span>
      )}
      <img
        style={{ backgroundColor: getRandomHexColor() }}
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
