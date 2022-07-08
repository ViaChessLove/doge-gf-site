import React from 'react'
import { IconType } from 'react-icons';
import { AiOutlineContainer, AiOutlineDollar, AiOutlineFire, AiOutlineLock, AiOutlineWallet } from 'react-icons/ai';
import { RiAdvertisementLine } from 'react-icons/ri';
import { TokenomicsCard, TokenomicsCardBlockContent, TokenomicsCardBlockTitle, TokenomicsCardContent, TokenomicsIconContainer } from './Tokenomics.style'

export interface TokenomicsSingleProps{
    id: number;
    backgroundColor: string;
    color: string;
    title: string;
    content: string;
}

const icons: IconType[] = [
    AiOutlineDollar,
    AiOutlineLock,
    AiOutlineContainer,
    RiAdvertisementLine,
    AiOutlineFire,
    AiOutlineWallet
]

const TokenomicsSingle:React.FC<TokenomicsSingleProps> = ({backgroundColor, color, id, title, content}) => {
  const Icon: IconType = icons[id];
  return (
    <TokenomicsCard>
      <TokenomicsCardContent>
        <TokenomicsIconContainer backgroundColor={backgroundColor} color={color}>
          <Icon style={{fontSize:'30px'}}/>
        </TokenomicsIconContainer>
        <TokenomicsCardBlockTitle>{title}</TokenomicsCardBlockTitle>
        <TokenomicsCardBlockContent>{content}</TokenomicsCardBlockContent>
      </TokenomicsCardContent>
    </TokenomicsCard>
  )
}

export default TokenomicsSingle