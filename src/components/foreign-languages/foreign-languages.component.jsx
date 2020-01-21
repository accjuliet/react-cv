import React from 'react';
import { Content } from '../content/content.component';
import './foreign-languages.styles.css';

const items = [
  [`TKT Module 1: Language and background to language learning and teaching (Band 3)`,
  `TKT Module 2: Lesson planning and use of resources for language teaching (Band 3)`,
  `TKT Module 3: Managing the teaching and learning process (Band 3)`],
  [`Level A2: communicate in a simple
  manner employing frequently used
  expressions related to areas of most
  immediate relevance`]
];

const headings = [
    `English`,`German`
];

export const ForeignLanguage = (props) => (
  <div>
    <Content
      title='Foreign Languages'
      headings={headings}
      subheadings={['']}
      items={items}
    >
    </Content>
  </div>
);