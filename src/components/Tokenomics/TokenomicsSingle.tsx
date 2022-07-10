import React from 'react'
import { IconType } from 'react-icons';
import { AiOutlineContainer, AiOutlineDollar, AiOutlineFire, AiOutlineLock, AiOutlineWallet } from 'react-icons/ai';
import { RiAdvertisementLine } from 'react-icons/ri';
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import { Button } from '../../globalStyles';
import { TokenomicsButton, TokenomicsCard, TokenomicsCardBlockContent, TokenomicsCardBlockTitle, TokenomicsCardContent, TokenomicsIconContainer } from './Tokenomics.style'

export interface TokenomicsSingleProps{
    id: number;
    backgroundColor: string;
    color: string;
    title: string;
    content: string;
    trust?: boolean;
    link?: string;
}

const icons: IconType[] = [
    AiOutlineDollar,
    AiOutlineLock,
    AiOutlineContainer,
    RiAdvertisementLine,
    AiOutlineFire,
    AiOutlineWallet,
    VscWorkspaceTrusted
]

const TokenomicsSingle:React.FC<TokenomicsSingleProps> = ({backgroundColor, color, id, title, content, link, trust}) => {
  const Icon: IconType = icons[id];
  return (
    <TokenomicsCard height={trust}>
      <TokenomicsCardContent>
        <TokenomicsIconContainer backgroundColor={backgroundColor} color={color}>
          <Icon style={{ fontWeight:'900 !important', fontSize:'35px'}}/>
        </TokenomicsIconContainer>
        <TokenomicsCardBlockTitle>{title}</TokenomicsCardBlockTitle>
        <TokenomicsCardBlockContent>{content}</TokenomicsCardBlockContent>
        {link!==undefined? <TokenomicsButton href={link}>view</TokenomicsButton>: <></>}
      </TokenomicsCardContent>
    </TokenomicsCard>
  )
}

export default TokenomicsSingle