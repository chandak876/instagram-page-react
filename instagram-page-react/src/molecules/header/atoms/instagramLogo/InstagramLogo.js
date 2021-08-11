import React from 'react';

// Styles
import styles from './instagramLogo.module.css';

function InstagramLogo() {
    return (
        <img
            alt="Instagram Logo"
            className={styles.logo}
            src="/assets/images/instagram-logo.jpg"
        />
    );
}

export default InstagramLogo;