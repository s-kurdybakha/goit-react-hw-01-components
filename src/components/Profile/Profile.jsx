import css from '../Profile/Profile.module.css';

const Profile = props => {
  const { user, usertag, location, userPhoto, followers, views, likes } = props;
  return (
    <div className="profile">
      <div className={css.description}>
        <img src={userPhoto} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user}</p>
        <p className={css.tag}>{usertag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
