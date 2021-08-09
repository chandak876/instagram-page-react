import React from 'react';

import './displayPost.css'

function displayPost(props) {
    return (
        <div className="post">
            <img className="posts-post-image" src= {"/assets/images/Post" + props.postNum + ".png"} />
            <div className=" posts-post-info">

                {/*Likes */}
                <img className=" posts-post-info-icon" width="20" height="20" src="/assets/icons/love_icon.png"/>
                <p className="posts-post-info-likes">177k</p>

                {/*Comments */}
                <img className="posts-post-info-icon" width="20" height="20" src="/assets/icons/comment_icon.png"/>
                <p>3060</p>
            </div>
        </div>
    );
}

export default displayPost;