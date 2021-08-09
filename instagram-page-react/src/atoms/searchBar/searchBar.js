import React from 'react';
import './searchBar.css'

function searchBar() {
    return (
        <input
            type="text"
            placeholder="&#xF002; Search"
            className="header-search-bar"
        />
    );
}

export default searchBar;