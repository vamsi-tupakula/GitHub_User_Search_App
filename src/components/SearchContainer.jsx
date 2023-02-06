import './css/SearchContainer.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchContainer(props) {
    return ( 
        <div className={`search_bar_container ${props.theme}`} id='search-details'>
            <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input className="searchBar" type="text" placeholder='Enter username....' spellCheck='false' autoComplete='off' aria-autocomplete='none'/>
            <button className="searchBtn">Search</button>
        </div>
    );
}

export default SearchContainer;