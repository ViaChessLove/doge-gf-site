import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const BlogBlock = styled.div`
    position: relative;
    
`

export const BlogContainer = styled(Container)`
    max-width: 1410px !important;
    height: 120vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 30px;
    background-color: #f5f7fe;
    ${Container}
`;

export const BlogContainerDecoration = styled.img`
    position: relative;
    top: 170px;
    left: clamp(80px,105px, 130px);
`;

export const BlogContent = styled.div`
    padding-top: 75px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 65px;
`

export const BlogBlockTitle = styled(BlockTitle)`
    margin-top: 35px;
    ${BlockTitle}
`
