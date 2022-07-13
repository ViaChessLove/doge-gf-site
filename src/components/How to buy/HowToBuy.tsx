import React from 'react'
import { howToBuyData, howToBuyLinks } from '../../data/HowToBuyData'
import { Block, Button } from '../../globalStyles'
import { HowToBuyBlockTitle, HowToBuyContainer, HowToBuyInstructions, HowToBuyNumber, HowToBuyStep, HowToBuyStepContent, HowToBuyStepTitle, HowToBuyText, HowToBuyTitle, MobilePhone, RightBar, RightBarButton, RightBarButtons } from './HowToBuy.style'
import StepCard from './StepCard'

export interface ButtonInterface {
    id: string;
    place: string;
    href: string;
}


const HowToBuy = () => {
    
    return (
        <HowToBuyContainer id='howtobuy'>
            <HowToBuyInstructions>
                <Block>tutorial</Block>
                <HowToBuyBlockTitle>How to buy $DOGEGF</HowToBuyBlockTitle>
                {howToBuyData.map(step => <StepCard key={step.id} id={step.id} title={step.title} text={step.text}/>)}
            </HowToBuyInstructions>
            <RightBar>
                <MobilePhone src='./assets/phone.png' alt='manual'/>
                <RightBarButtons>
                    {howToBuyLinks.map(link => <RightBarButton key={link.id} href={link.href}>Buy on {link.place.charAt(0).toUpperCase() + link.place.slice(1)}</RightBarButton>)}
                </RightBarButtons>
            </RightBar>
        </HowToBuyContainer>
    )
}

export default HowToBuy
