import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './instagramLogo.css'

// Containers
import InputBar from "../inputBar";

function InstagramLogo(props) {
    return (
        <img alt="Instagram-logo" className={props.styleName} src="/assets/icons/instagram-logo.jpg"/>
    );
}

InputBar.propTypes = {
    styleName: PropTypes.string,
};

InputBar.defaultProps = {
    styleName: undefined,
}

export default InstagramLogo;