import './css/SearchContainer.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchContainer(props) {
    const changeUserName = (e) => {
        props.setUserName(e.target.value);
    }

    return ( 
        <div className={`search_bar_container ${props.theme}`} id='search-details'>
            <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input className="searchBar" type="text" placeholder='Enter username....' spellCheck='false' autoComplete='off' aria-autocomplete='none' onChange={changeUserName}/>
            <button className="searchBtn" onClick={props.fetchAPI} disabled={props.userName === ''}>Search</button>
        </div>
    );
}

export default SearchContainer;