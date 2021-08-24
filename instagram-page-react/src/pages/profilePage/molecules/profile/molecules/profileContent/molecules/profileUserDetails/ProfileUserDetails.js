import React from 'react';

// Lodash
import _map from 'lodash/map';

// Styles
import styles from './profileUserDetails.module.css'

// Constants
import USER_DETAILS_CONFIG from './constants/profileUserDetails.configs'

// Component
import ProfileUserDetail from './atoms/profileUserDetail'

const renderUserDetail = (userInfo) => {
    const{
        text,
        count,
        id
    } = userInfo;

    return <ProfileUserDetail
        key= {id}
        text = {text}
        count = {count}
    />
}

function ProfileUserDetails() {
    return (
        <div className = { styles.userDetails }>
            {_map(USER_DETAILS_CONFIG, renderUserDetail)}
        </div>
    );
}

export default ProfileUserDetails;