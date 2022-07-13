import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const StartSection = styled.section`
  padding-top: 100px;
  position: relative;
  top: 0;
  height: 100vh;
  background-position: center;
  background-size: cover;
  margin-top: clamp(80px, 110px, 150px);
  
  @media screen and (max-width: 1024px){
    padding-top: 40px;
  }
  
  @media screen and (max-width: 500px){
    padding-top: 20px;
  }
  
`

export const StartBackground = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    padding-left: 3px;
    padding-right: 3px;
    z-index: -1;
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 500px) {
      object-fit: fill;
    }
`;

export const StartContainer = styled(Container)`
  max-width: 1150px;
  padding-left: 20px;
  ${Container}
`;


export const StartBlockTitle = styled(BlockTitle)`
  padding-top: 35px;
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  max-width: 690px;
  @media screen and (max-width: 1024px){
    font-size: 45px;
    max-width: 500px;
    padding-top: 20px;
    line-height: 55px;
  }
  
  @media screen and (max-width: 768px){
    font-size: 30px;
    line-height: 45px;
    max-width: 400px;
  }

  ${BlockTitle}
  
`
export const StartBlockSubTitle = styled(BlockTitle)`
  margin-top: 30px;
  color: #404046;
  
  @media screen and (max-width: 1024px){
    font-size: 30px;
    margin-top: 15px;
  } 

  @media screen and (max-width: 768px){
    font-size: 26px;
    margin-top: 5px;
  }

  ${BlockTitle}
`;
