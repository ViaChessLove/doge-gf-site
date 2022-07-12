import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const ArtContainer =styled(Container)`
    padding-top: 130px;
    height: 100%;
    max-width: 1400px !important;
    padding-bottom: 150px;
    ${Container}
`

export const ArtContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const ArtBlockTitle = styled(BlockTitle)`
    padding-top: 50px;
`;

export const ArtList = styled.div`
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 0px;
    
	@media screen and (max-width: 1250px){
        justify-content: center;
        gap: 20px 20px;
	}
`
export const ArtImg = styled.img`
    object-fit: cover;
    width: 302px; 
    height: 311px;
    border-radius: 8px;
    &:hover{
        cursor: pointer;
    }
`;