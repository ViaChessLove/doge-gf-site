import styled from "styled-components";
import { Block, BlockTitle, Button, Container } from "../../globalStyles";

const howToBuyMargin: number = 40;
const howToBuyStepMargin: number = 25;


export const HowToBuyContainer = styled(Container)`
    padding-top: 180px;
    position: relative;
    top: 0;
    left: 0;
    max-width: 970px;
    padding-left: 20px;
    padding-right: 30px;
    height: 140%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 950px){
        flex-direction: column;
    }
    ${Container}
`;

export const HowToBuyInstructions = styled.div`

`

export const HowToBuyBlockTitle = styled(BlockTitle)`
    margin-top: ${howToBuyMargin}px;
    font-weight: 700 !important;
    ${BlockTitle};
    @media screen and (max-width: 950px){
        font-size: 36px;
        margin-top: 20px;
    };
    @media screen and (max-width: 500px){
        font-size: 32px;
    }
`;

export const HowToBuyStep = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${howToBuyStepMargin}px;
`

export const HowToBuyNumber = styled(Block)`
    border-radius: 99999999px;
    ${Block};
    padding: 12px 14px;
    font-weight: 700 !important;
    font-size: 18px !important;
    @media screen and (max-width: 768px){
        align-self: flex-start;
    }
`;

export const HowToBuyStepTitle = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: left !important;
    }
`;

export const HowToBuyTitle = styled(BlockTitle)`
    font-size: 24px;
    margin-left: 10px;
    text-align: left !important;
    @media screen and (max-width: 768px){
        align-self: flex-start;
        margin-left: 0px;
        margin-top: 10px;
    }
`;


export const HowToBuyStepContent = styled.div`
    margin-left: ${2*10+14*2}px;
    max-width: 370px;
    @media screen and (max-width: 950px){
        max-width: 950px;
    }
    @media screen and (max-width: 768px){
        text-align: left !important;
        margin-left: 0px;
    }
`;

export const HowToBuyText = styled(BlockTitle)`
    font-size: 14px;
    color: #404046;
    word-break: break-word;
    line-height: 26px;
    font-style: normal !important;
    font-weight: 450 !important;
`


export const RightBar = styled.div`
    max-width: 470px;
    @media screen and (max-width: 950px){
        max-width: 950px;
        display: flex;
        justify-content: center;
    }
`;

export const MobilePhone = styled.img`
    margin-top: ${2*8 + howToBuyMargin + howToBuyStepMargin + 50}px;
    @media screen and (max-width: 950px){
        display: none;
    }
`;

export const RightBarButtons = styled.div`
    margin-top: 20px;
    display: flex; 
    justify-content: space-between;
`;

export const RightBarButton = styled(Button)`
    @media screen and (max-width: 950px){
        margin-left: 10px;
    }
`