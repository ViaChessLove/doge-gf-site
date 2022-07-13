
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const FooterBar = styled.footer`
    position: relative;
    bottom: 0;
    flex: 0 0 auto;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    overflow: hidden;
    max-height: 1300px;
    background-color:#f5f7fe;
    border-radius: 30px;
    height: 100%;
`

export const FooterContainer = styled(Container)`
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
    gap: 10px 20px;
    ${Container};
    @media screen and (max-width: 990px){
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterContent = styled.div<{color?: string}>`
    padding-top: 51px;
    color: ${props => props.color !== undefined? props.color : '#404046'};
    padding-right: 10px;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 51px;
    @media screen and (max-width: 990px){
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    padding-right: 10px;
`;

