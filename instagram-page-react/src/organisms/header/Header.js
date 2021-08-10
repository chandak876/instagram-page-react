import React from 'react';

// Lodash
import _map from 'lodash/map';

// Styles
import './header.css';

// Containers
import InstagramLogo from "../../atoms/instagramLogo";
import SearchBar from "../../atoms/searchBar";
import {navBarActions} from "../../constants/navBarActions"

function Header() {

    const renderInstagramLogo = () => {
        return <InstagramLogo styleName={"header-logo"}/>;
    }

    const renderHeaderAction = (navBarAction = Object.freeze({})) => {
        return (
            <li key={navBarAction.linkTo}><a className={navBarAction.styleName} href={navBarAction.linkTo}>{navBarAction.actionText}</a></li>
        );
    }

    const renderHeaderActionBar = () => {
        return (
            <ul className="header-actions">
                {_map(navBarActions, renderHeaderAction)}
            </ul>
        );
    }

    return (
        <div className="header">
            <nav className="header-container">
                {renderInstagramLogo()}
                <SearchBar />
                {renderHeaderActionBar()}
            </nav>
        </div>
    );
}

export default Header;