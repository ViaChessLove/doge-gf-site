import React from 'react'
import { howToBuyData } from '../../data/HowToBuyData'
import { Block, Button } from '../../globalStyles'
import { HowToBuyBlockTitle, HowToBuyContainer, HowToBuyNumber, HowToBuyStep, HowToBuyStepContent, HowToBuyStepTitle, HowToBuyText, HowToBuyTitle, MobilePhone, RightBar, RightBarButtons } from './HowToBuy.style'
import StepCard from './StepCard'

const HowToBuy = () => {
    console.log(HowToBuyBlockTitle + ' qw');
    return (
        <HowToBuyContainer>
            <div style={{maxWidth:'420px'}}>
                <Block>tutorial</Block>
                <HowToBuyBlockTitle>How to buy $DOGEGF</HowToBuyBlockTitle>
                {howToBuyData.map(step => <StepCard id={step.id} title={step.title} text={step.text}/>)}
            </div>
            <RightBar>
                <MobilePhone src='./assets/phone.png' alt='manual'/>
                <RightBarButtons>
                    <Button href='https://app.uniswap.org/#/swap?outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5&chain=mainnet'>
                        Buy on uniswap
                    </Button>
                    <Button href='https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xfb130d93E49DcA13264344966A611dc79a456Bc5'>
                        Buy on sushiswap
                    </Button>
                </RightBarButtons>
            </RightBar>
        </HowToBuyContainer>
    )
}

export default HowToBuy
