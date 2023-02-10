import './css/DetailsPane.css';

function DetailsPane(props) {
  return (
    <div className={`details_pane ${props.theme}`} id='user-details'>
      <div className="githubImg">
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="github-logo" className='githubLogo' width='140px'/>
      </div>
      <div className={`details ${props.theme}`}>
        <div className="details_header">
          <p className='profile_name'>The Octacat</p>
          <p className='joinedDate'>Joined on 23-July-2003</p>
        </div>
        <div className="username">
          @octacat
        </div>
        <div className="profile_bio">this profile has no bio</div>
        <div className={`profile_info ${props.theme}`}>
          <div className="repos">
            <p className="detail_heading">Repos</p>
            <p className="detail_info">8</p>
          </div>
          <div className="followers">
            <p className="detail_heading">Followers</p>
            <p className="detail_info">3245</p>
          </div>
          <div className="following">
            <p className="detail_heading">Following</p>
            <p className="detail_info">13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPane;
