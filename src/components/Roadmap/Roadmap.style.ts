import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const RoadmapContainer = styled(Container)`
    padding-top: 170px;
    max-width: 1740px;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    ${Container};
    @media screen and (max-width: 1442px){
        max-width: 1110px;
    }
    @media screen and (max-width: 1110px){
        max-width: ${333+333+60}px;
    }
    @media screen and (max-width: 720px){
        padding-right: 10px;
        max-width: 330px;
    }
    @media screen and (max-width: 380px){
        align-items: flex-start;
        margin-right: 20px;
    }
`
export const RoadmapBlockTitle = styled(BlockTitle)`
    margin-top: 40px;
    @media screen and (max-width: 720px){
        margin-top: 30px;
    }
    @media screen and (max-width: 380px){
        margin-top: 20px;
    }
    ${BlockTitle}
`;

export const RoadmapCardList = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    
    @media screen and (max-width: 1442px){
        &:nth-child(3){
            margin-right: 0px;
        }
    }
    @media screen and (max-width: 1110px){
        &:nth-child(3){
            margin-right: 30px;
        }
        &:nth-child(2n){
            margin-right:0px;
        }
    }

    @media screen and (max-width: 720px){
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

