import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const ArtContainer =styled(Container)`
    padding-top: 170px;
    height: 100vh;
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