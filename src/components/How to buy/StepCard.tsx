import React from 'react'
import { HowToBuyNumber, HowToBuyStep, HowToBuyStepContent, HowToBuyStepTitle, HowToBuyText, HowToBuyTitle } from './HowToBuy.style'

export interface StepCardProps {
    id: number | string;
    title: string;
    text: string;
}

const StepCard: React.FC<StepCardProps> = ({id, title, text}) => {
  return (
  <HowToBuyStep>    
    <HowToBuyStepTitle>
        <HowToBuyNumber>{id}</HowToBuyNumber>
        <HowToBuyTitle>{title}</HowToBuyTitle>
    </HowToBuyStepTitle>
    <HowToBuyStepContent>
        <HowToBuyText>{text}</HowToBuyText>
    </HowToBuyStepContent>
  </HowToBuyStep>
  )
}

export default StepCard