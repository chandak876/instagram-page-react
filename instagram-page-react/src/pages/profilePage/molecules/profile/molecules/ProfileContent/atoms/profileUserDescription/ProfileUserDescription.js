import React from 'react';
// rename?
// Styles
import styles from './profileUserDescription.module.css'

function ProfileUserDescription() {
    return (
        <div className = "inline">
            <div className = {styles.username}>
                elonrmuskk
            </div>
            <div className = {styles.followButton}>
                Follow
            </div>
        </div>
    );
}

export default ProfileUserDescription;