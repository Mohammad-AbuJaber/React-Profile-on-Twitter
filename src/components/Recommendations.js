import React from "react";
import '../stylesheets/Recommendations.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';

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

export function Page(props) {
    return (
        <div className="page">
            <div className="avatar">
                <img src={props.avatarUrl} alt="Avatar"/>
            </div>
            <div className="info">
                <h2 className="name">{props.name} {props.isVerified &&
                    <FontAwesomeIcon icon={faCheckCircle} className="verified-badge"/>}</h2>
                <p className="username">@{props.username}</p>
            </div>
            <button className="follow-button">Follow</button>
        </div>
    );
}

export default function Recommendations() {
    return (
        <div className="recommendations">
            <SearchBar/>
            <Card title="You might like">
                <Page
                    name="Tailwind CSS"
                    username={"tailwindcss"}
                    avatarUrl="https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg"
                    isVerified={true}
                />
                <Page
                    name="TypeScript"
                    username={"typescript"}
                    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                    isVerified={false}
                />
                <Page
                    name="freeCodeCamp.org"
                    username={"freeCodeCamp"}
                    avatarUrl="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
                    isVerified={true}
                />
            </Card>
        </div>
    );
}
