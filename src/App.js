import React from 'react';
import { Profile } from './components/profile/profile.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { ProfilePic } from './components/profile-pic/profile-pic.component';
import { AcademicBackground } from './components/academic-background/academic-background.component'
import { Project } from './components/projects/projects.component'
import { TechSkills } from './components/tech-skills/tech-skills.component'
import { Publication } from './components/publications/publications.component'
import { ForeignLanguage } from './components/foreign-languages/foreign-languages.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="center">
        <AcademicBackground></AcademicBackground>
        <ProfilePic></ProfilePic>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
