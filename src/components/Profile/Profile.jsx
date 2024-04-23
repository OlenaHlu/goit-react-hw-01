import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <div>
        <ul>
          <li>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
