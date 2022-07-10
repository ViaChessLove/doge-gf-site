import React from 'react'
import { Block } from '../../globalStyles'
import { AboutContainer, AboutBlock, AboutBlockTitle, AboutContent } from './About.style';
import { aboutData } from './../../data/AboutData';

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutBlock>Origins</AboutBlock>
            <AboutBlockTitle>{aboutData.title}</AboutBlockTitle>
            <AboutContent>{aboutData.content}</AboutContent>
            
        </AboutContainer>
    )
}

export default About
