import React from 'react';

import './inputBar.css'

function inputBar(props) {
    return (
        <input
            type = "text"
            placeholder = {props.placeholderText}
            className = "input-bar"
        />
    );
}

export default inputBar;