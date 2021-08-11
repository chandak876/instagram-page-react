import React from 'react';

// Styles
import './profilePage.css'

// Components
import Header from '../../molecules/header'
import Profile from './molecules/profile'
import ProfileTabbar from './molecules/profileTabbar'
import Posts from './molecules/posts'

function ProfilePage() {
    return (
        <div>
            {/*Header section*/}
            <Header/>

            {/*Profile section containing info about the user*/}
            <Profile/>

            {/*Tabbar section*/}
            <ProfileTabbar/>

            {/*Section displaying the posts uploaded by the user*/}
            <Posts/>
        </div>
    );
}

export default ProfilePage;