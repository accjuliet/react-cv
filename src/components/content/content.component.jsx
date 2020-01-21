import React from 'react';
import './content.styles.css';

export const Content = ({ title, headings, subheadings, items }) => (
  <div className='content'>
    <h3>{title}</h3>
    {headings.map(heading => <h4>{heading}</h4>)}
    {subheadings.map(subheading => <h5>{subheading}</h5>)}
    <p>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </p>
  </div>
);