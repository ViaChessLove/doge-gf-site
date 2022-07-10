
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
    height: 130px;
`

export const FooterContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${Container}
    @media screen and(max-width:990px){
        display: flex;
        order: 1;
        flex-flow: column-reverse;
    }
`;

export const FooterContent = styled.div<{color?: string}>`
    padding-top: 51px;
    color: ${props => props.color !== undefined? props.color : '#404046'};
    padding-right: 10px;
    font-size: 14px;
    font-weight: 600;
`;

export const FooterIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    padding-right: 10px;
`;

