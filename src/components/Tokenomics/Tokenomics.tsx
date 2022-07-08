import React from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { tokenomicsData } from '../../data/TokenomicsData'
import { Block } from '../../globalStyles'
import { TokenomicsBlockTitle, TokenomicsCard, TokenomicsCardBlockContent, TokenomicsCardBlockTitle, TokenomicsCardContent, TokenomicsContainer, TokenomicsIconContainer, TokenomicsList } from './Tokenomics.style'
import TokenomicsSingle from './TokenomicsSingle'

const Tokenomics = () => {
  return (
    <TokenomicsContainer>
      <Block>numbers and stuf</Block>
      <TokenomicsBlockTitle>Tokenomics</TokenomicsBlockTitle>
      <TokenomicsList>
        {tokenomicsData.map(tokenomics => <TokenomicsSingle key={tokenomics.id} id={tokenomics.id} backgroundColor={tokenomics.backgroundColor} color={tokenomics.color} title={tokenomics.title} content={tokenomics.content}/>)}
      </TokenomicsList>
    </TokenomicsContainer>
  )
}

export default Tokenomics