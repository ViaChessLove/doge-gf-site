import React from 'react';
import { IconType } from 'react-icons';
import { FaEthereum, FaGithub, FaTiktok } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import { BsCurrencyBitcoin } from 'react-icons/bs'
import {RiCoinLine, RiDiscordLine, RiInstagramLine, RiMediumLine, RiRedditLine, RiTelegramLine} from 'react-icons/ri'
import { FooterBar, FooterContainer, FooterContent, FooterIcons } from './Footer.style';


const Footer = () => {
  const icons:IconType[] = [
    FiTwitter,
    RiDiscordLine,
    RiTelegramLine,
    RiMediumLine,
    RiRedditLine,
    RiInstagramLine,
    FaTiktok,
    FaEthereum,
    BsCurrencyBitcoin,
    RiCoinLine,
    FaGithub,
  ];
  return (
    <FooterBar >
      <FooterContainer>
        <FooterContent>Contact us: dogegf@dogegf.com</FooterContent>
        <FooterContent>All Rights Reserved © DogeGF</FooterContent>
        <FooterContent color='black'>
          <FooterIcons>
              {icons.map((icon) => {
                let Icon: IconType = icon;
                return <Icon style={{marginRight: '5px'}}/>;
              })}
          </FooterIcons>
        </FooterContent>
      </FooterContainer>
    </FooterBar>
  )
}

export default Footer