import React from "react";
import '../stylesheets/Main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

function VisitedPage(props) {
    const formattedPosts = props.posts.toLocaleString();
    return (
        <div className="visited-page">
            <FontAwesomeIcon icon={faArrowLeft} className="back-arrow"/>
            <div className="page-info">
                <h2 className="page-name">{props.name}</h2>
                <p className="posts-count">{formattedPosts} posts</p>
            </div>
        </div>
    );
}

export default function Main() {
    return (
        <div className="main">
            <VisitedPage name="React" posts={2611}/>
        </div>
    );
}