import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './post.module.css'

// Components
import PostInfoList from "./molecules/postInfoList";

function Post(props) {
    const {postPath} = props;

    return (
        <div className={styles.post}>
            <img
                alt="Post uploaded by Elon Musk"
                className={styles.postImage}
                src={postPath}
            />

            <PostInfoList className={styles.postInfo}/>
        </div>
    );
}

Post.propTypes = {
    postPath: PropTypes.string,
};

Post.defaultProps = {
    postPath: '/assets/images/post0.png',
};

export default Post;