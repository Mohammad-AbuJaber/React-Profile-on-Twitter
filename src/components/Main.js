import React, {useState} from "react";
import '../stylesheets/Main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faEllipsisH, faCalendarDays, faBell, faLink, faUser} from '@fortawesome/free-solid-svg-icons';
import {Page} from "./Recommendations";

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

function renderFollowers(followedBy) {
    const [firstFollower, secondFollower, ...remainingFollowers] = followedBy;
    const firstTwoFollowers = [firstFollower, secondFollower];

    return (
        <div className="followers-container">
            <div className={'followers-images-container'}>
                {firstTwoFollowers.map((follower, index) => (
                    <div key={index} className="follower">
                        <img
                            src={follower.image}
                            alt={follower.name}
                            className="follower-image"
                        />
                    </div>
                ))}
            </div>
            Followed by
            {firstTwoFollowers.length > 0 && firstTwoFollowers.map((follower, index) => (
                <div key={index} className="follower">
                    <span className="follower-name">{follower.name}</span>
                    {index < firstTwoFollowers.length - 1 && <span className="follower-comma">, </span>}
                </div>
            ))}
            {remainingFollowers.length > 0 && `, and ${remainingFollowers.length} others you follow`}
        </div>
    );
}

function Profile(props) {
    const formatCount = (count) => (count >= 1000) ? (count / 1000).toFixed(1) + 'K' : count;
    const followedBy = props.followedBy;

    return (
        <div className="profile">
            <div className="profile-cover-image">
                <img src={props.coverImage} alt="profile"/>
            </div>
            <div className="profile-profile-image">
                <img src={props.profileImage} alt="profile"/>
            </div>
            <div className="profile-actions">
                <FontAwesomeIcon icon={faEllipsisH} className="profile-options"/>
                <FontAwesomeIcon icon={faBell} className="profile-notifications"/>
                <button className="following-button">Following</button>
            </div>
            <div className="profile-info">
                <h2 className="profile-name">{props.name}</h2>
                <p className="profile-username">@{props.username}</p>
                <p className="profile-bio">{props.bio}</p>
                <div className={'site-joined'}>
                    <p className="profile-website">
                        <FontAwesomeIcon icon={faLink} className="profile-site"/> {props.website}
                    </p>
                    <p className="profile-joined">
                        <FontAwesomeIcon icon={faCalendarDays} className="profile-calendar"/> {props.joined}
                    </p>
                </div>
                <div className="following-followers">
                    <p className="profile-following">
                        {formatCount(props.following)} <span className="label">Following</span>
                    </p>
                    <p className="profile-followers">
                        {formatCount(props.followers)} <span className="label">Followers</span>
                    </p>
                </div>
                <div className="profile-followed-by">
                    {renderFollowers(followedBy)}
                </div>
            </div>
        </div>
    );
}

function ProfileTabs(props) {
    const [activeTab, setActiveTab] = useState('Posts');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="profile-tabs">
            <div
                className={`profile-tab ${activeTab === 'Posts' ? 'active' : ''}`}
                onClick={() => handleTabClick('Posts')}
            >
                Posts
            </div>
            <div
                className={`profile-tab ${activeTab === 'Replies' ? 'active' : ''}`}
                onClick={() => handleTabClick('Replies')}
            >
                Replies
            </div>
            <div
                className={`profile-tab ${activeTab === 'Media' ? 'active' : ''}`}
                onClick={() => handleTabClick('Media')}
            >
                Media
            </div>
            <div
                className={`profile-tab ${activeTab === 'Likes' ? 'active' : ''}`}
                onClick={() => handleTabClick('Likes')}
            >
                Likes
            </div>
        </div>
    );
}

function PageToFollow(props) {
    return (
        <div className="page-to-follow">
            <h2 className="page-to-follow-title">Who to follow</h2>
            {props.pages.map((page, index) => (
                <div key={index} className="page-to-follow-item">
                    <div className="followers-user-names">
                        <FontAwesomeIcon icon={faUser} className="profile-user"/>
                        <span className="followers-user-username">{page.followers}</span>
                    </div>
                    <Page
                        avatarUrl={page.avatarUrl}
                        name={page.name}
                        username={page.username}
                        isVerified={page.isVerified}
                    />
                    <div className="page-description">
                        <p className="page-description">{page.description}</p>
                    </div>
                </div>
            ))}
            <button className="showMore-button">Show more</button>
        </div>
    );
}

export default function Main() {
    const pagesToFollow = [
        {
            followers: "Node.js and 9 others",
            name: "freeCodeCamp.org",
            username: "freeCodeCamp",
            avatarUrl: "https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg",
            isVerified: true,
            description: "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity."
        },
        {
            followers: "Node.js and 5 others",
            name: "TypeScript",
            username: "typescript",
            avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
            isVerified: true,
            description: "TypeScript is a language for application-scale JavaScript development. " +
                "It's a typed superset of JavaScript that compiles to plain JavaScript."
        },
        {
            followers: "Node.js and 3 others",
            name: "Tailwind CSS",
            username: "tailwindcss",
            avatarUrl: "https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg",
            isVerified: true,
            description: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML."
        }
    ];
    return (
        <div className="main">
            <VisitedPage name="React" posts={2611}/>
            <Profile
                coverImage="https://pbs.twimg.com/profile_banners/1566463268/1470764371/1500x500"
                profileImage="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                name="React"
                username="reactjs"
                bio="The library for web and native user interfaces"
                website="react.dev"
                joined="Joined July 2013"
                following={267}
                followers={717100}
                followedBy={[
                    {
                        name: "JavaScript",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"

                    },
                    {
                        name: "Facebook",
                        image: "https://freelogopng.com/images/all_img/1658030214facebook-logo-hd.png"
                    },
                    {
                        name: "Mohammad",
                        image: ""
                    },
                    {
                        name: "Omar",
                        image: ""
                    },
                    {
                        name: "Ahmad",
                        image: ""
                    }
                ]}
            />
            <ProfileTabs/>
            <PageToFollow pages={pagesToFollow}/>
        </div>
    );
}