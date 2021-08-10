import React from 'react';

// Styles
import './searchBar.css'

function SearchBar() {
    return (
        <input
            type="text"
            placeholder="&#xF002; Search"
            className="header-search-bar"
        />
    );
}

export default SearchBar;