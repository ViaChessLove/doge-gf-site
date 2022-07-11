import React from 'react'
import { artData } from '../../data/ArtData';
import { Block, BlockTitle } from '../../globalStyles';
import { ArtBlockTitle, ArtContainer, ArtContent, ArtImg, ArtList } from './Art.style';

const Art = () => {
  return (
    <ArtContainer id='art'>
      <ArtContent>
        <Block>Curated by the Dogegf Team</Block>
        <ArtBlockTitle>Community art</ArtBlockTitle>
        <ArtList>
          {artData.map((art) => <ArtImg key={art} src={"./assets/art/art" + art + ".jpg"} alt={"" + art} />)}
        </ArtList>
      </ArtContent>
    </ArtContainer>
  )
}

export default Art