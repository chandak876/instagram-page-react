import React from 'react';

// Styles
import '../styles/index.css'

// Components
import ProfilePage from '../pages/profilePage'
import Header from "../molecules/header";

function App() {
  return (
      <div>
        {/*Header Section*/}
        <Header />

        {/*Profile Page*/}
        <ProfilePage />
      </div>
  );
}

export default App;