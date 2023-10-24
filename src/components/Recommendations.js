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

function Card(props) {
    return (
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            {props.children}
            <button className="showMore-button">Show more</button>
        </div>
    );
}

export default function Recommendations() {
    return (
        <div className="recommendations">
            <SearchBar/>
            <Card title="You might like">
            </Card>
        </div>
    );
}
