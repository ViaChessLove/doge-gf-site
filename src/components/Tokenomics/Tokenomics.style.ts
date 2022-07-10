import styled from "styled-components";
import { Block, BlockTitle, Button, Container } from "../../globalStyles";
import TokenomicsSingle from "./TokenomicsSingle";

export const TokenomicsContainer = styled(Container)`
    height: 100%;
    max-width: 832px !important;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    ${Container}
`;

export const TokenomicsBlockTitle = styled(BlockTitle)`
    font-weight: 700 !important;
    margin-top: 35px;
`;

export const TokenomicsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin-top: 35px;
    padding-bottom: 70px;
`;


export const TokenomicsCard = styled.li<{height?: boolean}>`
    height: ${props => props.height? 300:270}px;
    width: 250px;
    box-shadow: 0 25px 70px rgba(1,33,58,.07);
    border-radius: 16px;
    margin-right: 31px;
    margin-bottom: 40px;
    &:nth-child(3n) {
        margin-right: 0px;
    }
`;

export const TokenomicsCardContent = styled.div<{width?: boolean}>`
    padding: 30px 25px;
    width: 201px;
    height: 161px;
    
`

export const TokenomicsIconContainer = styled.div<{color: string; backgroundColor: string}>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    width: 80px !important;
    height: 80px !important;
    border-radius: 9999999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
export const TokenomicsCardBlockTitle = styled(BlockTitle)`
    font-size: 18px;
    margin-bottom: 13px;
    line-height: 21px;
    text-align: flex-start !important;
    width: 205px;
`;

export const TokenomicsCardBlockContent = styled(BlockTitle)`
    font-size:14px;
    font-weight: 700 !important;
    color: #404046;
    line-height: 22px;
    ${BlockTitle}
`;

export const TokenomicsButton = styled(Button)`
    margin-top: clamp(7px, 10px, 20px);
    width: 100px;
    padding: 5px 5px;
    ${Button}
`;
