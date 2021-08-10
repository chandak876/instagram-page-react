import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './displayPost.css'

function DisplayPost(props) {

    const renderPostsPostImage = () => {
        return <img alt="posts-post-info-icon" className="posts-post-image" src= {"/assets/images/Post" + props.postNumber + ".png"} />;
    }

    const renderPostsPostInfoLike = () => {
        return (
            <div className="inline">
                <img alt="posts-post-info-icon-" className="posts-post-info-icon" src="/assets/icons/love-icon.png"/>
                <p className="posts-post-info-likes">177k</p>
            </div>
        );
    }

    const renderPostsPostInfoComment = () => {
        return (
            <div className="inline">
                <img alt="posts-post-info-icon" className="posts-post-info-icon" src="/assets/icons/comment-icon.png"/>
                <p>3060</p>
            </div>
        );
    }

    const renderPostsPostInfo = () => {
        return(
            <div className=" posts-post-info">
                {renderPostsPostInfoLike()}
                {renderPostsPostInfoComment()}
            </div>
        );
    }

    return (
        <div className="post">
            {renderPostsPostImage()}
            {renderPostsPostInfo()}
        </div>
    );
}

DisplayPost.propTypes = {
    postNumber: PropTypes.number.isRequired,
};

export default DisplayPost;