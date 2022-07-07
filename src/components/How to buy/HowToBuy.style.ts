import styled from "styled-components";
import { Block, BlockTitle, Container } from "../../globalStyles";

const howToBuyMargin: number = 40;
const howToBuyStepMargin: number = 25;


export const HowToBuyContainer = styled(Container)`
    max-width: 970px;
    height: 140vh;
    margin-bottom: clamp(30px, 45px, 60px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    ${Container}
`;

export const HowToBuyBlockTitle = styled(BlockTitle)`
    margin-top: ${howToBuyMargin}px;
    font-weight: 700 !important;
    ${BlockTitle}
`;

export const HowToBuyStep = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${howToBuyStepMargin}px;
`

export const HowToBuyNumber = styled(Block)`
    border-radius: 99999999px;
    ${Block};
    padding: 10px 14px;
    font-weight: 700 !important;
    font-size: 18px !important;
`;

export const HowToBuyStepTitle = styled.div`
    display: flex;
    align-items: center;
`;

export const HowToBuyTitle = styled(BlockTitle)`
    font-size: 24px;
    margin-left: 10px;
`;


export const HowToBuyStepContent = styled.div`
    margin-left: ${2*10+14*2}px;
    max-width: 370px;
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
`;

export const MobilePhone = styled.img`
    margin-top: ${2*8 + howToBuyMargin + howToBuyStepMargin + 50}px;
`;

export const RightBarButtons = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;