import React from 'react';
import { Content } from '../content/content.component';
import './profile.styles.css';

const items = [
  `High comunnication skills and excellent teamleading 
    gained by social and community project`,
  `Ability to develop goals, objectives and
    implement working strategies. Experience
    gained by being a part of the tech community
    and a novice researcher`
];

export const Profile = (props) => (
  <div>
    <Content
      title='Julieta Navarro / CS Student'
      headings={['']}
      subheadings={['']}
      items={items}
    >
    </Content>
  </div>
);