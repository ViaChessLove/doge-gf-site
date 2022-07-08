import React from 'react'
import { roadmapData } from '../../data/RoadmapData'
import { Block } from '../../globalStyles'
import {  RoadmapBlockTitle, RoadmapCard, RoadmapCardBlockTitle, RoadmapCardList, RoadmapContainer, RoadmapGoals, RoadmapTerms, UnreachedGoal } from './Roadmap.style'
import RoadmapSingle from './RoadmapSingle'


const Roadmap = () => {
    return (
        <RoadmapContainer>
            <Block>past and future</Block>
            <RoadmapBlockTitle>Roadmap</RoadmapBlockTitle>
            <RoadmapCardList>
                {roadmapData.map(roadmap => <RoadmapSingle key={roadmap.id} id={roadmap.id} terms={roadmap.terms} goals={roadmap.goals}/>)}
            </RoadmapCardList>
        </RoadmapContainer>
    )
}

export default Roadmap
