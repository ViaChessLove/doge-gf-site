import React from 'react'
import { Block } from '../../globalStyles'
import { AboutContainer, AboutBlock, AboutBlockTitle, AboutContent } from './About.style';
import { aboutData } from './../../data/AboutData';

const About = () => {
    return (
        <AboutContainer>
            <AboutBlock>Origins</AboutBlock>
            <AboutBlockTitle>{aboutData.title}</AboutBlockTitle>
            <AboutContent>{aboutData.content}</AboutContent>
            
        </AboutContainer>
    )
}

export default About
