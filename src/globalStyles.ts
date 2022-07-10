import { BsArrowUp, BsArrowUpCircle, BsArrowUpCircleFill } from "react-icons/bs";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Lato', sans-serif;
    }
`;


export const Container = styled.section`
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 10px;
`;

export const Block = styled.label<{secondStyle?: boolean}>`
    background: ${props => props.secondStyle? '#7D9CAD' : '#e3e8fa'};
    color: ${props => props.secondStyle? '#fff': '#0044eb'};
    border-radius: 60px;
    padding: 8px 25px;
    line-height: 13px;
    width: fit-content;
    text-transform: uppercase;
    font-size: 11px;
    font-family: Lato;
    font-weight: 600;
`;

export const BlockTitle = styled.h2<{secondStyle?: boolean}>`
    font-style: normal;
    font-weight: 600;
    color: ${props => props.secondStyle? '#fff':'#1a3454'};
    font-size: 36px;
    line-height: 43px;
`;

export const Button = styled.a<{secondStyle?: boolean}>`
    width: 210px;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600 !important;
    padding: 18px 8px;
    text-align: center;
    color: ${props => props.secondStyle? '#0d6efd': '#fff'};
    background-color: ${props => props.secondStyle? '#fff': '#01213a'};
    border-color: ${props => props.secondStyle? '#fff': '#01213a'};
    &:hover {
        transition: 1s;
        cursor: pointer;
        background-color: ${props => props.secondStyle? '':'#011c31'};

    }
`;

export const ArrowUnHovered = styled(BsArrowUpCircle)`
    position: fixed;
    bottom: 30px; 
    right: 30px;
    font-size: 60px; 
    z-index: 40;
`;

export const ArrowHovered = styled(BsArrowUpCircleFill)`
    position: fixed;
    bottom: 30px; 
    right: 30px; 
    font-size: 60px;
    z-index: 40;
    cursor: pointer;
`;