import React from 'react'
import { Block, BlockTitle } from '../../globalStyles';
import { ArtBlockTitle, ArtContainer, ArtContent } from './Art.style';

const Art = () => {
  return (
    <ArtContainer id='art'>
      <ArtContent>
        <Block>Curated by the Dogegf Team</Block>
        <ArtBlockTitle>Community art</ArtBlockTitle>
        
      </ArtContent>
    </ArtContainer>
  )
}

export default Art