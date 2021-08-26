import React from 'react';

// Styles
import styles from './profileUserInfo.module.css'

function ProfileUserInfo() {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userInfoHeading}>Elon Musk Now</div>
            <p>Elon Musk is the CEO and CTO of SpaceX also the CEO and product architect at Tesla.</p>
            <p>This page is dedicated to his legacy.</p>
            <div>Follow <a href="https://www.instagram.com/space.xplorations/" className={styles.userInfoAccountLink}>@space.xplorations</a></div>
            <a className={styles.userInfoExternalLink} href="https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2F2Xs1aLr&e=ATN687EAmhG2b5g2xm97M7jMdJo60dITseLWqy8hZwiAO8BxO5juRLb6pM1ElANeDvQis8g5pQtHc5gWnaHx_np8bZFPcU0q&s=1">bit.ly/2Xs1aLr</a>
        </div>
    );
}

export default ProfileUserInfo;