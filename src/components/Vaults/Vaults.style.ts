import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";


export const VaultsContainer = styled(Container)`
    position: relative;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    height: 100%;
    max-width: 1500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    ${Container};
`;

export const VaultsBackground = styled.img`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 60px;
`;

export const VaultsContent = styled.div`
    padding-top: clamp(60px, 80px, 100px);
    max-width: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const VaultsBlockTitle = styled(BlockTitle)`
    margin-top: 30px;
    font-weight: 700 !important;
    font-size: 40px;
    ${BlockTitle}
`

export const VaultsContentInfo = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    gap: 20px 100px;
    margin-left: 350px;
    margin-right: 100px;
`;

export const VaultsContentInfoRight = styled.div`
    width: 313px;
`;


export const VaultsContentInfoText = styled.p`
    color: #fff;
    font-size: 30px;
    font-weight: 700 !important;
    line-height: 36px;
    margin-bottom: 30px;
`;

export const VaultsContentInfoLeft = styled.div`
    max-width: 820px;
`

export const VaultsImage = styled.img`
    object-fit: contain;
    
    max-height: 486px;
`;
