import React from "react";
import '../stylesheets/Recommendations.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

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

function Trends(props) {
    const formatPosts = (count) => (
        count > 0 ? (count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`) + " Posts" : null
    );

    return (
        <div className="trends">
            <div className="category">
                <h3 className="category-title">{props.category}</h3>
                <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-icon"/>
            </div>
            <div className="topics">
                <h2 className="topics-title">{props.topic}</h2>
                <p className="posts">{formatPosts(props.posts)}</p>
            </div>
        </div>
    );
}

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <span className="footer-link" role="link">Terms of Service </span>
            <span className="footer-link" role="link">Privacy Policy </span>
            <span className="footer-link" role="link">Cookie Policy </span>
            <span className="footer-link" role="link">Accessibility </span>
            <span className="footer-link" role="link">Ads info </span>
            <span className="footer-link" role="link">
                More {" "}
                <FontAwesomeIcon icon={faEllipsisH}/>
            </span>
            <span> @{currentYear} X Corp.</span>
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
            <Card title="Trends for you">
                <Trends
                    category="Gaming • Trending"
                    topic="#VALORANTChampions"
                    posts={27900}
                />
                <Trends
                    category=""
                    topic="انستا"
                    posts={1400}
                />
                <Trends
                    category="Politics • Trending"
                    topic="#أسعار العملات"
                    posts={100}
                />
                <Trends
                    category="Sports • Trending"
                    topic="#الاهلي"
                    posts={200}
                />
                <Trends
                    category=""
                    topic="#Messi"
                    posts={90000}
                />
            </Card>
            <Footer/>
        </div>
    );
}
