import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const BlogBlock = styled.div`
    position: relative;
    margin: 0 auto;

    @media screen and (max-width: 1420px){
        margin-right: 10px;
        margin-left: 10px;
    }
`

export const BlogContainer = styled(Container)`
    max-width: 1410px !important;
    height: 100%;
    padding-bottom: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 30px;
    background-color: #f5f7fe;
    padding-left: 30px;
    padding-right: 40px;
    ${Container}
    @media screen and (max-width: 1420px){
    }
`;

export const BlogContainerDecoration = styled.img`
    position: relative;
    top: 170px;
    left: clamp(80px,105px, 130px);
    @media screen and (max-width: 1300px) {
        left: 10px;
        top: 100px;
        width: 270px;
        height: 270px;
    }
`;

export const BlogContent = styled.div`
    padding-top: 75px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 45px;
`

export const SliderContainer = styled(Container)`
`

export const BlogBlockTitle = styled(BlockTitle)`
    margin-top: 35px;
    ${BlockTitle}
`
