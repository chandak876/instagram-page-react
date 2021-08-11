import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _map from 'lodash/map';

// Constants
import POST_INFO_CONFIG from './constants/postInfoList.configs'

// Components
import PostInfo from './atoms/postInfo'

const renderPostInfo = (infoAction) => {
    const {
        imageSrc,
        id,
        count,
        altText,
    } = infoAction;

    return <PostInfo
        key = {id}
        imageSrc = {imageSrc}
        iconCount = {count}
        alttext = {altText}
    />
}

function PostInfoList(props) {
    return (
        <div className={props.className}>
            {_map(POST_INFO_CONFIG, renderPostInfo)}
        </div>
    );
}

PostInfoList.propTypes = {
    className: PropTypes.string,
};

PostInfoList.defaultProps = {
    className: undefined,
}


export default PostInfoList;