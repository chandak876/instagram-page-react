import React from 'react';
import PropTypes from 'prop-types';

function ProfileUserDetail(props) {
    const{
        text,
        count
    } = props;

    return (
        <div>
            <b>{count}</b>
            &nbsp;{text}
        </div>
    );
}

ProfileUserDetail.propTypes = {
    text: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
};

export default ProfileUserDetail;