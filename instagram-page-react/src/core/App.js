import React from 'react';
import { Provider } from "react-redux";

// Containers
import ProfilePage from '../pages/profilePage'
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div>
            <ProfilePage />
          </div>
      </Provider>
  );
}

export default App;