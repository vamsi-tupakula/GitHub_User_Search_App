import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './css/Header.css';

function Header(props) {

  return (
    <div className="header">
      <p className="name">Vamsi Krishna</p>
      <div className="light_dark_change">
        <p>{(props.theme === 'light') ? 'DARK' : 'LIGHT'}</p>
        <p onClick={props.changeTheme}><FontAwesomeIcon icon={(props.theme === 'light') ? faMoon : faSun}/></p>
      </div>
    </div>
  );
}

export default Header;
