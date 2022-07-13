import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const FaqContainer = styled(Container)`
    padding-top: 180px;
    height: 110%;
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    @media screen and (max-width: 990px){
        padding-left: 20px;
        padding-right: 30px;
    }
    @media screen and (max-width: 500px){
        padding-top: 140px;
    }
    ${Container};
`

export const LeftFaq = styled.div`
    max-width:321px;
`

export const RightFaq = styled.div`
    max-width:650px;
    @media screen and (max-width: 990px){
        margin-top: 30px;
        max-width: none;
    }
`

export const PlusMinus = styled.div`
    font-size: 1.75rem !important;
    margin-right: 15px;
    color: #1a3454;
    &:hover {
        cursor: pointer;
    }
`;

export const QuestionText = styled.span<{margin?: string}>`
    font-size: 24px;
    font-weight: 600;
    color: #1a3454;
    margin-bottom: ${(props) => props.margin!==undefined? '20px': '40px'};
`;

export const AnswerText = styled(motion.div)`
    color: #343a40;
    @media screen and (max-width: 990px){
        padding-left: 40px;
    }
`;

export const FaqCardContainer = styled.div<{margin?: boolean}>`
    padding-bottom: ${(props) => props.margin? '40px':'0px'};
`;


