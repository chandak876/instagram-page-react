import React from 'react';

// Styles
import styles from './profile.module.css'

// Components
import ProfileContent from "./molecules/profileContent";

function Profile() {
    return (
        <div className={styles.profile}>
            <img
                alt="Profile Image of Elon Musk"
                className={styles.profilePicture}
                src="/assets/images/profile-pic.jpeg"/>
            <ProfileContent />
        </div>
    );
}

export default Profile;