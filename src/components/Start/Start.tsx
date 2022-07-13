import React, { useEffect, useState } from 'react'
import { Block, Button } from '../../globalStyles'
import { StartBackground, StartBlockSubTitle, StartBlockTitle, StartContainer, StartSection } from './Start.style'


const Start = () => {
  const [src, setSrc] = useState('./assets/start.png');
  useEffect(() => {
    window.addEventListener('load', () => {
      window.innerWidth > 500  ? setSrc('./assets/start.png'): setSrc('./assets/start-mobile.png')
    });
    window.addEventListener('resize', () => {
      window.innerWidth > 500  ? setSrc('./assets/start.png'): setSrc('./assets/start-mobile.png')
    });
  },[src])
  return (
    <StartSection>
      <StartBackground src={src}/>
      <StartContainer>
        <Block>DOGEGF IN A NUTSHELL</Block>
        <StartBlockTitle>A token for kind gestures based on reciprocity</StartBlockTitle>
        <StartBlockSubTitle><a target="_blank" href='https://vyacheslav-3.gitbook.io/untitled/'>Learn more in docs</a></StartBlockSubTitle>
        <Button target="_blank" href='https://vyacheslav-3.gitbook.io/untitled/'>GITBOOK DOCS</Button>
      </StartContainer>
    </StartSection>
  )
}

export default Start