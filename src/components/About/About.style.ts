import styled from "styled-components";
import { Block, BlockTitle, Container } from "../../globalStyles";

export const AboutContainer = styled(Container)`
    padding-top: 140px;
    position: relative;
    top: 0;
    height: 80%;
    max-width: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 950px){
        align-items: flex-start;
        padding-left: 20px;
        padding-right: 20px;
    }

    ${Container};

    
`

export const AboutBlock = styled(Block)`
    margin-bottom: 27px;
    @media screen and (max-width: 950px){
        margin-bottom: 17px;
    }
    ${Block}
`;

export const AboutBlockTitle = styled(BlockTitle)`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 45px;

    @media screen and (max-width: 950px){
        font-size: 36px;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 500px){
        font-size: 32px;
    }

    ${BlockTitle}
    
`;

export const AboutContent = styled(BlockTitle)`
    font-size: 24px;
    color: #404046;
    font-style: normal;
    text-align: center !important;
    font-weight: 400px !important;
    line-height: 39px;
    @media screen and (max-width: 950px){
        text-align: left !important;
        font-size: 22px;
        line-height: 35px;  
    }

    @media screen and (max-width: 500px){
        font-size: 18px;
        line-height: 32px;
    }
    ${BlockTitle}
`;
