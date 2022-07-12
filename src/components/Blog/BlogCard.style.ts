import styled from "styled-components";

export const BlogCardContainer = styled.div`
    overflow: hidden;
`;

export const BlogCardImage = styled.img`
    display: block;
    object-fit: cover;
    border-radius: 8px;
    padding-bottom: 15px;
    width: 384px;
    height: 259px;
    @media screen and (max-width: 1350px){
        width: 350px;
        height: 250px;
        border-radius: 100px;
    }
`

export const BlogCardDate = styled.h5`
    color: '#404046';
    margin-bottom: 4px;
    font-weight: 400 !important;
    font-style: normal;
    line-height: 26px;
    font-size: 14px;
`;

export const BlogCardTitle = styled.h5`
    font-size: 18px;
    max-width: 270px;
    font-weight: 600 !important;
    color: #1a3454;
`;

