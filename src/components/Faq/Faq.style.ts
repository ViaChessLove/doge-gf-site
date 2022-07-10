import styled from "styled-components";
import { Container } from "../../globalStyles";

export const FaqContainer = styled(Container)`
    height: 110%;
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    ${Container};
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

export const AnswerText = styled.span`
    color: #343a40;
`;

export const FaqCardContainer = styled.div<{margin?: boolean}>`
    padding-bottom: ${(props) => props.margin? '40px':'0px'};
`;


