import React from 'react';

// Styles
import styles from './profile.module.css'

//components
import ProfileContent from "./molecules/ProfileContent";

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