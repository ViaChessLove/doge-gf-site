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


export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 10px;
`;

export const Block = styled.label<{secondStyle?: boolean}>`
    background: ${props => props.secondStyle? '#0dcaf0' : '#e3e8fa'};
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

export const BlockTitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    color: #1a3454;
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
    color: ${props => props.secondStyle? '': '#fff'};
    background-color: ${props => props.secondStyle? '': '#01213a'};
    border-color: ${props => props.secondStyle? '': '#01213a'};
    &:hover {
        transition: 1s;
        cursor: pointer;
        background-color: ${props => props.secondStyle? '':'#011c31'};

    }
`