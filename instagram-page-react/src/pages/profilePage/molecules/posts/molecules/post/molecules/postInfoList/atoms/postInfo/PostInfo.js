import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './postInfo.module.css'

function PostInfo(props) {
    const {
        imageSrc,
        count,
        altText,
    } = props;

    return (
        <div className={`inline ${styles.postInfo}`}>
            <img
                alt={altText}
                className={styles.postInfoIcon}
                src={imageSrc}
            />
            <div>{count}</div>
        </div>
    );
}

PostInfo.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

PostInfo.defaultProps = {
    altText: 'Icon Missing',
}

export default PostInfo;