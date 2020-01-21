import React from 'react';
import { Content } from '../content/content.component';
import './academic-background.styles.css';

const items = [
    [`Data Structures Concepts`,
        `Object-Oriented Programming`,
        `Algorithms`],
    [`Demonstrate skills in problem solving, interaction design and user experience`,
        `Design of a tool whose objective is to
        facilitate the obtaining and donation of food
        and products to avoid possible waste`,
        `Exchange of scientific results and
        applications in HCI by lecturers and
        researchers in the community of Mexico`],
    [`Promote youth leadership in our communities to
        become agents of social change and prevent
        violence and social disintegration`,
        `Transmit ideas in large groups, both in English and Spanish`],
    [`Interact with area students and teachers who are
        interested in global topics and share our
        knowledge through a test`]
];

const headings = [
    `Bachelor in Computer Science`,
    `ACM Grant Holder / Student Design Competition Partipant`,
    `Youth In Action Program Alumna`,
    `Academic Worldquest Contestant`
];

const subheadings = [
    `Autonomous University of Chihuahua (2016-Present)`,
    `Mexican ACM SIGCHI Chapter, Mexican Association on HCI (October 2018)`,
    `U.S. Department of State, La Secretaría de Educación Pública (2015 - 2016)`,
    `World Affairs Councils of America (Febraury 2016)`
];



export const AcademicBackground = (props) => (
    <div>
        <Content
            title='Academic Background'
            headings={headings}
            subheadings={subheadings}
            items={items}
        >
        </Content>
    </div>
);