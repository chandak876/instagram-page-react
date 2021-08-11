import React from 'react';

// Styles
import styles from './header.module.css';

// Components
import InstagramLogo from "./atoms/instagramLogo";
import SearchBar from "./atoms/searchBar";
import HeaderActions from "./atoms/headerActions";

function Header() {
    return (
        <div className={styles.header}>
            <InstagramLogo />
            <SearchBar />
            <HeaderActions />
        </div>
    );
}

export default Header;