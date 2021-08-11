import React from 'react';

// Lodash
import _map from 'lodash/map';

//Styles
import styles from './posts.module.css';

// Constants
import POSTS from './constants/posts.data'

// Components
import Post from "./molecules/post";

const renderPost = (post) => {
    const{
        id,
        postPath
    } = post;

    return <Post
        key={id}
        postPath={postPath}
    />;
}

function Posts() {
    return (
        <div className={styles.posts}>
            {_map(POSTS, renderPost)}
        </div>
    );
}

export default Posts;