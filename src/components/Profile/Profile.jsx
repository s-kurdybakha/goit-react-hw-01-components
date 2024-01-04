import css from '../Profile/Profile.module.css';

function Profile({
  user,
  usertag,
  location,
  userPhoto,
  followers,
  views,
  likes,
}) {
  // const { user, usertag, location, userPhoto, followers, views, likes } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={userPhoto} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user}</p>
        <p className={css.tag}>{usertag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.items}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.items}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.items}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
