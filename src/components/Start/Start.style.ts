import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const StartSection = styled.section`
  position: relative;
  top: 0;
  height: 100vh;
  background-position: center;
  background-size: cover;
  margin-top: clamp(80px, 110px, 150px);
  margin-bottom: clamp(30px, 46px, 60px);
`

export const StartBackground = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: -1;
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
`;

export const StartContainer = styled(Container)`
  max-width: 1150px;
  padding-top: clamp(80px, 7rem, 7vh);
  ${Container}
`;


export const StartBlockTitle = styled(BlockTitle)`
  padding-top: 35px;
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  max-width: 690px;
  ${BlockTitle}
`
export const StartBlockSubTitle = styled(BlockTitle)`
  margin-top: 30px;
  color: #404046;
  ${BlockTitle}
`;
