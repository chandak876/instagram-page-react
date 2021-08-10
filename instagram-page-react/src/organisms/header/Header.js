import React from 'react';

// Containers
import InstagramLogo from "../../atoms/instagramLogo";
import SearchBar from "../../atoms/searchBar/searchBar";
import './header.css'

function Header() {

    const renderInstagramLogo = () => {
        return <InstagramLogo styleName={"header-logo"}/>;
    }

    const renderHeaderAction = () => {
        return (
            <ul className="header-actions">
                <li><a className="header-actions-login" href="https://www.instagram.com/accounts/login/?next=%2Felonrmuskk%2F&source=desktop_nav">Log In</a></li>
                <li><a className="header-actions-signup" href="https://www.instagram.com/accounts/emailsignup/">Sign Up</a></li>
            </ul>
        );
    }

    return (
        <div className="header">
            <nav className="header-container">
                {renderInstagramLogo()}
                <SearchBar/>
                {renderHeaderAction()}
            </nav>
        </div>
    );
}

export default Header;