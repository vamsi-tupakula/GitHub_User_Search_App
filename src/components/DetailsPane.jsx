import { faArrowCircleUp, faCompass, faLink, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/DetailsPane.css';

function DetailsPane(props) {
  return (
    <div className={`details_pane ${props.theme}`} id='user-details'>
      <div className="githubImg">
        <img src={props.data.avatar_url} alt="github-logo" className='githubLogo' width='140px'/>
      </div>
      <div className={`details ${props.theme}`}>
        <div className="details_header">
          <p className='profile_name'>{props.data.name}</p>
          <p className='joinedDate'>Joined on {(props.data.created_at === undefined) ? '' : props.data.created_at.substring(0, 10)}</p>
        </div>
        <div className="username">
          @{props.data.login}
        </div>
        <div className="profile_bio">{(props.data.bio === null ? "this profile has no bio" : props.data.bio)}</div>
        <div className={`profile_info ${props.theme}`}>
          <div className="repos">
            <p className="detail_heading">Repos</p>
            <p className="detail_info">{props.data.public_repos}</p>
          </div>
          <div className="followers">
            <p className="detail_heading">Followers</p>
            <p className="detail_info">{props.data.followers}</p>
          </div>
          <div className="following">
            <p className="detail_heading">Following</p>
            <p className="detail_info">{props.data.following}</p>
          </div>
        </div>
        <div className="icons">
          <div className="location box">
            <FontAwesomeIcon icon={faLocationPinLock} />
            <p>{(props.data.location === null) ? 'Not Available' : props.data.location}</p>
          </div>
          <div className="blog box">
            <FontAwesomeIcon icon={faLink} />
            <p>{(props.data.blog === "") ? 'Not Available' : props.data.blog}</p>
          </div>
          <div className="twitter box">
            <FontAwesomeIcon icon={faArrowCircleUp} />
            <p>@{(props.data.twitter_username === null) ? 'Not Available' : props.data.twitter_username}</p>
          </div>
          <div className="company box">
            <FontAwesomeIcon icon={faCompass} />
            <p>{(props.data.company === null) ? 'Not Available' : props.data.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPane;
