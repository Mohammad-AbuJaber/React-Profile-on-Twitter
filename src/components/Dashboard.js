import React from 'react';
import '../stylesheets/Dashboard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faSearch,
    faBell,
    faEnvelope,
    faBookmark,
    faListAlt,
    faUser,
    faUserGroup,
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

function Icon(props) {
    return (
        <div className="icon-container">
            <div className="icon-wrapper">
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <span className="icon-description">{props.description}</span>
        </div>
    );
}

export default function Dashboard() {
    return (
        <div className="dashboard">
            <FontAwesomeIcon icon={faXTwitter} className="twitter-logo"/>
            <Icon icon={faHome} className="icon" description="Home"/>
            <Icon icon={faSearch} className="icon" description="Explore"/>
            <Icon icon={faBell} className="icon" description="Notifications"/>
            <Icon icon={faEnvelope} className="icon" description="Messages"/>
            <Icon icon={faListAlt} className="icon" description="Lists"/>
            <Icon icon={faBookmark} className="icon" description="Bookmarks"/>
            <Icon icon={faUserGroup} className="icon" description="Communities"/>
            <Icon icon={faUser} className="icon" description="Profile"/>
            <Icon icon={faEllipsisH} className="icon" description="More"/>
            <button className="post-button">Post</button>
        </div>
    );
}