import React, {useState} from "react";
import '../stylesheets/Main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faEllipsisH, faCalendarDays, faBell, faLink} from '@fortawesome/free-solid-svg-icons';

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

export default function Main() {
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
        </div>
    );
}