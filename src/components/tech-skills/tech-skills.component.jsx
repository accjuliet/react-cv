import React from 'react';
import { Content } from '../content/content.component';
import './tech-skills.styles.css';

const items = [
  `Java, C/C++, Python, JavaScript`,`Oracle SQL, PL/SQL`,`Angular`
];

const headings = [
    `Programming Languages`,
    `Databases`,
    `Frameworks`
];



export const TechSkills = (props) => (
  <div>
    <Content
      title='Tech Skills'
      headings={headings}
      subheadings={['']}
      items={items}
    >
    </Content>
  </div>
);