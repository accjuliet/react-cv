import React from 'react';
import './sidebar.styles.css';

export const Sidebar = (props) => (
    <div className='sidebar'>
        <div className='tabs-bar'>
            <ul className="tabs-nav">
                <li><a href="">Profile</a></li>
                <li><a href="">Academic Background</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Tech Skills</a></li>
                <li><a href="">Publications</a></li>
                <li><a href="">Foreign Languages</a></li>
            </ul>
        </div>
    </div>
);