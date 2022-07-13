import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { closeFaq, openFaq } from '../../features/faqSlice';
import { AnswerText, FaqCardContainer, PlusMinus, QuestionText } from './Faq.style';

interface FaqCardProps {
    id: number;
    question: string;
    answer: string;
    margin?: boolean;
    isShow: boolean;
}

const FaqCard: React.FC<FaqCardProps> = ({id, question, answer, margin, isShow}) => {
  const dispatch = useDispatch();

  const handleShow = () => {
    if (isShow){
      dispatch(closeFaq({id, question, answer, margin, isShow}))
    } else {
      dispatch(openFaq({id, question, answer, margin, isShow}));
    }
  }

  const initial = {opacity: 0, y: -10, x: -40};

  const animation = useAnimation();

  useEffect(() => {
    if (isShow) {
        animation.start({
            opacity: 1,
            y:0,
            x: 0
        })
    } else {
        animation.start(initial)
    }
  }, [isShow])

  return (
    <FaqCardContainer margin={isShow?margin: undefined}>
      <div style={{display: 'flex', justifySelf: 'flex-start'}}>
        <PlusMinus onClick={handleShow}>{isShow? <AiOutlineMinus/>: <AiOutlinePlus/>}</PlusMinus>
        <QuestionText margin={isShow? 'non': undefined}>{question}</QuestionText>
      </div>
      <AnswerText initial={initial} transition={{type: "spring", stiffness: 300, damping: 30}} animate={animation}>{isShow? answer: ''}</AnswerText>
    </FaqCardContainer>
  )
}

export default FaqCard;