import React from 'react';

// Styles
import styles from './profileContent.module.css'

// Components
import ProfileUserDescription from './atoms/profileUserDescription'
import ProfileUserDetails from './molecules/profileUserDetails'
import ProfileUserInfo from './atoms/profileUserInfo'

function ProfileContent() {
    return (
        <div className={styles.content}>
            <ProfileUserDescription />
            <ProfileUserDetails />
            <ProfileUserInfo />
        </div>
    );
}

export default ProfileContent;