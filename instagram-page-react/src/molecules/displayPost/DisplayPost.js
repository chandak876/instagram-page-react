import React from 'react';

// Containers
import './displayPost.css'

function DisplayPost(props) {

    const renderPostsPostImage = () => {
        return <img alt="posts-post-info-icon" className="posts-post-image" src= {"/assets/images/Post" + props.postNum + ".png"} />;
    }

    const renderPostsPostInfoLike = () => {
        return (
            <div>
                <img alt="posts-post-info-icon-" className="posts-post-info-icon" src="/assets/icons/love_icon.png"/>
                <p className="posts-post-info-likes">177k</p>
            </div>
        );
    }

    const renderPostsPostInfoComment = () => {
        return (
            <div>
                <img className="posts-post-info-icon" src="/assets/icons/comment_icon.png"/>
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

export default DisplayPost;