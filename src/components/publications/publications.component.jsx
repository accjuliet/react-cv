import React from 'react';
import { Content } from '../content/content.component';
import './publications.styles.css';

const items = [
  `Kuali: distributing food for a good. 
  Mexican Association on Human-Computer Interaction. (2018)`
];

export const Publication = (props) => (
  <div>
    <Content
      title='Publications'
      headings={['']}
      subheadings={['']}
      items={items}
    >
    </Content>
  </div>
);