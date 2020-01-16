import React from 'react';
import { Content } from './components/content/content.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { ProfilePic } from './components/profile-pic/profile-pic.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="center">
        <Content></Content>
        <ProfilePic></ProfilePic>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
