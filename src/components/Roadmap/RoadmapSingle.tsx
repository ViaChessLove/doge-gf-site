import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { Goal, GoalText, IsReachedGoal, RoadmapCard, RoadmapCardBlockTitle, RoadmapGoals, RoadmapTerms, UnreachedGoal } from './Roadmap.style'

export interface GoalInterface {
    isReached: boolean;
    goal: string;
}

export interface RoadmapSingleProps {
    id: number;
    terms: string;
    goals: GoalInterface[];
}

const RoadmapSingle: React.FC<RoadmapSingleProps> = ({id, terms, goals}) => {
  return (
    <RoadmapCard>
      <RoadmapCardBlockTitle>Phase {id.toString()}</RoadmapCardBlockTitle>
      <RoadmapTerms>{terms}</RoadmapTerms>
      <RoadmapGoals>
      {goals.map((goal) => {
        return (
          <Goal>
            <IsReachedGoal>{goal.isReached? <AiOutlineCheck/>: <UnreachedGoal/>}</IsReachedGoal>
            <GoalText>{goal.goal}</GoalText>
          </Goal>   
        )
      })}
      </RoadmapGoals>
    </RoadmapCard>
  )
}

export default RoadmapSingle