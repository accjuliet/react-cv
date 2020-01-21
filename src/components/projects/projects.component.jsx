import React from 'react';
import { Content } from '../content/content.component';
import './projects.styles.css';

const items = [
  `Don't treat me differently. Leader of a social
  project advocating women and LGBTQ+ rights.
  (2015-2016)`
];

export const Project = (props) => (
  <div>
    <Content
      title='Projects'
      headings={['']}
      subheadings={['']}
      items={items}
    >
    </Content>
  </div>
);