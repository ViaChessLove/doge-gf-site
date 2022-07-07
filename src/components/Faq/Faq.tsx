import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Block, BlockTitle } from '../../globalStyles'
import { FaqContainer } from './Faq.style'
import FaqCard from './FaqCard';
import { FaqContent } from './../../data/FaqData';

const Faq = () => {
  const faqList: FaqContent[] = useSelector((state: RootState) => state.faq.values);
  return (
    <FaqContainer>
        <div style={{maxWidth:'321px'}}>
            <Block>
                Knowledge base
            </Block>
            <BlockTitle style={{marginTop:'31px', fontWeight: '900'}}>
                Frequently asked questions.
            </BlockTitle>
        </div>
        <div style={{maxWidth:'650px'}}>
            {faqList.map((fa: FaqContent) => <FaqCard key={fa.id} id={fa.id} question={fa.question} answer={fa.answer} margin={fa.margin} isShow={fa.isShow}/>)}
        </div>
    </FaqContainer>
  )
}

export default Faq