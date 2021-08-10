import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './inputBar.css'

function InputBar(props) {
    return (
        <input
            type = "text"
            placeholder = {props.placeholderText}
            className = "input-bar"
        />
    );
}

InputBar.propTypes = {
    placeholderText: PropTypes.string,
};

InputBar.defaultProps = {
    placeholderText: undefined,
}

export default InputBar;