import React from 'react'
import { Block, BlockTitle, Container } from '../../globalStyles'
import { StartBackground, StartBlockTitle, StartContainer, StartSection } from './Start.style'

const Start = () => {
  return (
    <StartSection>
      <StartBackground src='./assets/start.png'/>
      <StartContainer>
        <Block>DOGEGF IN A NUTSHELL</Block>
        <StartBlockTitle>A token for kind gestures based on reciprocity</StartBlockTitle>
        <BlockTitle>The future is kind</BlockTitle>
      </StartContainer>
    </StartSection>
  )
}

export default Start