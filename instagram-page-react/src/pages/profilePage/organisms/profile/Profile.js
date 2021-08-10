import React, {useState} from 'react';

// Containers
import './profile.css'

function Profile(props) {
    const [followButton, setFollowButton] = useState(1);
    const [followButtonText, setFollowButtonText] = useState("Follow");

    const handleFollow = () => {
        setFollowButton(1);
        setFollowButtonText("Follow");
    }

    const handleUnfollow = () => {
        setFollowButton(0);
        setFollowButtonText("Unfollow");
    }

    const handleClickFollowButton = () => {
        if(followButton === 0) {
            handleFollow();
        }
        else {
            handleUnfollow();
        }
    }

    const renderProfilePicture = () => {
        return (
            <img alt="profile-picture" className="profile-picture" src="/assets/icons/profile-pic.jpeg"/>
        );
    }

    const renderProfileContentUser = () => {
        return (
            <div className="inline">
                <p className="profile-content-username">elonrmuskk</p>
                <a href="#" className={followButton? "profile-content-follow" : "profile-content-unfollow"} onClick={handleClickFollowButton}>{followButtonText}</a>
            </div>
        );
    }

    const renderProfileContentInfo = () => {
        return (
            <div className="profile-content-info">
                <p><b>148</b> posts</p>
                <p><b>2.1m</b> followers</p>
                <p><b>43</b> following</p>
            </div>
        );
    }

    const renderProfileContentDescription = () => {
        return (
            <div className="profile-content-description">
                <p className="profile-content-description-heading">Elon Musk Now</p>
                <p>Elon Musk is the CEO and CTO of SpaceX also the CEO and product architect at Tesla.</p>
                <p>This page is dedicated to his legacy.</p>
                <p>Follow <a href="https://www.instagram.com/space.xplorations/" className="profile-content-description-account-link">@space.xplorations</a></p>
                <a className="profile-content-description-external-link" href="https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2F2Xs1aLr&e=ATN687EAmhG2b5g2xm97M7jMdJo60dITseLWqy8hZwiAO8BxO5juRLb6pM1ElANeDvQis8g5pQtHc5gWnaHx_np8bZFPcU0q&s=1">bit.ly/2Xs1aLr</a>
            </div>
        );
    }
    const renderProfileContent = () => {
        return (
            <div className="profile-content">
                {renderProfileContentUser()}
                {renderProfileContentInfo()}
                {renderProfileContentDescription()}
            </div>
        );
    }

    return (
        <div className="profile">
            {renderProfilePicture()}
            {renderProfileContent()}
        </div>
    );
}

export default Profile;