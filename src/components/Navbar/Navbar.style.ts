import styled, { StyledComponent } from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
    background: #fff;
    margin-bottom: -110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: start;
    height: 110px;
    background: #fff;
    ${Container}
`

export const NavLogo = styled.img`
    justify-self: flex-start;
    align-self: center;
    cursor: pointer;
    margin-right: 1rem;
    width: 14rem;
    height: 4.62rem;
    z-index: 50;
    @media screen and (max-width: 500px){
        width: 9rem;
        height: 2.8rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    z-index: 50;
    @media screen and (max-width: 990px){
        margin-top: 2%;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    };
    @media screen and (max-width: 500px){
        margin-top: clamp(5%, 5.5%, 6%);
    }
`;

export const NavMenu: StyledComponent<'ul', any, any, any> = styled.ul<{show: boolean}>`
    display: flex;
    margin-right: 30px;
    margin-top: 30px;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 990px) {
        
        margin-top: -280px;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        opacity: ${(props) => props.show? 1: 0};
        visibility: ${(props) => props.show? 'visible': 'hidden'};
        transform: translateY(${(show) => (show? '0': '-10px')});
        transition: opacity 0.5s ease;
        background-color: #fff;
    }
`;
export const NavItem = styled.li`
    height: 50px;
    cursor: pointer;
    padding-left: clamp(20px, 30px, 40px);
    color: rgba(26 , 52, 84, 0.7);
    font-weight: 600;
    @media screen and (max-width: 990px) {
        width: 100%;
        padding-left: 0;
        justify-self: flex-start;
		width: 100%;
		display: table;
		&:hover {
            cursor: pointer;
			transition: all 0.3s ease;
            border: none;
        }
    }
`;


