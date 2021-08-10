import React from 'react';

// Containers
import './instagramLogo.css'

function InstagramLogo(props) {
    return (
        <img alt="Instagram-logo" className={props.styleName} src="/assets/icons/instagram-logo.jpg"/>
    );
}

export default InstagramLogo;