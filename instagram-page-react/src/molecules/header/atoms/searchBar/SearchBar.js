import React from 'react';

// Styles
import styles from './searchBar.module.css';

function SearchBar() {
    return (
        <input
            type="text"
            placeholder="&#xF002; Search"
            className={styles.searchBar}
        />
    );
}

export default SearchBar;