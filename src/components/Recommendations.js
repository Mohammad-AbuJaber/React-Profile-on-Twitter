import React from "react";
import '../stylesheets/Recommendations.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div className={`search-bar`}>
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
            />
        </div>
    );
}

export default function Recommendations() {
    return (
        <div className="recommendations">
            <SearchBar/>
        </div>
    );
}
