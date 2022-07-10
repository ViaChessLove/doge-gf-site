import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const RoadmapContainer = styled(Container)`
    max-width: 1740px;
    height: 120%;
    margin-bottom: 200px;
    display: flex;
    flex-flow: column;
    align-items: center;
    ${Container};
`
export const RoadmapBlockTitle = styled(BlockTitle)`
    margin-top: 40px;
    ${BlockTitle}
`;

export const RoadmapCardList = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    
`;

export const RoadmapCardBlockTitle = styled(BlockTitle)`
    margin-top: 70px;

`;


export const RoadmapCard = styled.li`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 333px;
    height: 480px;
    background: #f5f7fe;
    border: 1px solid #c9d5ff;
    border-radius: 16px;
    margin-right: 30px;
    margin-bottom: 30px;
    &:last-child{
        margin-right: 0px;
    }
`;

export const RoadmapTerms = styled(BlockTitle)`
    margin-top: clamp(3px, 4px, 5px);
    font-size: 14px !important;
    font-weight: 400 !important;
    color: #404046 !important;
`;

export const RoadmapGoals = styled.ul`
    display: flex;
    flex-flow: column;
    width: 70%;
    justify-content: flex-start;
    margin-top: 30px;
    list-style-type: none;
    margin-left: 5px;
    margin-right: 10px;
`;

export const Goal = styled.li`
    color: #212529;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 15px;
    &:last-child{
        margin-bottom: 0px;
    }
`;

export const IsReachedGoal = styled.div`
    color: #0044eb;
    font-size: 14px;
`;

export const GoalText = styled.p`
    font-family: Lato;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400 !important;
`;

export const UnreachedGoal = styled.div`
    margin-left: 14px;
`;

