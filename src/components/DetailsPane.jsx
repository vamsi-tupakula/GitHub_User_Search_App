import './css/DetailsPane.css';

function DetailsPane(props) {
  return (
    <div className={`details_pane ${props.theme}`} id='user-details'>
      <div className="githubImg">
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="github-logo" className='githubLogo' width='140px'/>
      </div>
      <div className="details"></div>
    </div>
  );
}

export default DetailsPane;
