import styled from "styled-components";
import { Block, BlockTitle, Container } from "../../globalStyles";

export const AboutContainer = styled(Container)`
    height: 80vh;
    max-width: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Container}
`

export const AboutBlock = styled(Block)`
    margin-bottom: 27px;
    ${Block}
`;

export const AboutBlockTitle = styled(BlockTitle)`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 45px;
    ${BlockTitle}
`;

export const AboutContent = styled(BlockTitle)`
    font-size: 24px;
    color: #404046;
    font-style: normal;
    text-align: center !important;
    font-weight: 400px;
    line-height: 39px;
    ${BlockTitle}
`;
