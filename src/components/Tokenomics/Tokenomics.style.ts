import styled from "styled-components";
import { Block, BlockTitle, Container } from "../../globalStyles";

export const TokenomicsContainer = styled(Container)`
    height: 150vh;
    max-width: 900px !important;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 25px;
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
`;


export const TokenomicsCard = styled.li`
    height: 270px;
    width: 250px;
    box-shadow: 0 25px 70px rgba(1,33,58,.07);
    border-radius: 16px;
    margin-right: 31px;
    margin-bottom: 40px;
    &:last-child {
        margin-right: 0px;
    }
`;

export const TokenomicsCardContent = styled.div`
    padding: 30px 30px;
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
    width: 201px;
`;

export const TokenomicsCardBlockContent = styled(BlockTitle)`
    font-size:14px;
    font-weight: 700 !important;
    color: #404046;
    ${BlockTitle}
`;



