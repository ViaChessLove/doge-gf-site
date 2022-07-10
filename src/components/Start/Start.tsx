import React from 'react'
import { Block } from '../../globalStyles'
import { StartBackground, StartBlockSubTitle, StartBlockTitle, StartContainer, StartSection } from './Start.style'

const Start = () => {
  return (
    <StartSection id='start'>
      <StartBackground src='./assets/start.png'/>
      <StartContainer>
        <Block>DOGEGF IN A NUTSHELL</Block>
        <StartBlockTitle>A token for kind gestures based on reciprocity</StartBlockTitle>
        <StartBlockSubTitle>The future is kind</StartBlockSubTitle>
      </StartContainer>
    </StartSection>
  )
}

export default Start