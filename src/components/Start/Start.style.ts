import styled from "styled-components";
import { BlockTitle, Container } from "../../globalStyles";

export const StartSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(80px, 17.2vh, 180px);
  margin-bottom: clamp(10px, 20px, 30px);
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
