import React from 'react' 
import { Block, BlockTitle, Button } from '../../globalStyles'
import {VaultsBackground, VaultsBlockTitle, VaultsContainer, VaultsContent, VaultsContentInfo, VaultsContentInfoLeft, VaultsContentInfoRight, VaultsContentInfoText, VaultsImage} from './Vaults.style'

const Vaults = () => {
  return (
      <VaultsContainer id='dogegfvaults'>
          <VaultsBackground src="./assets/vaults_bg.png" alt="" />
          <VaultsContent>
            <Block secondStyle>coming soon</Block>
            <VaultsBlockTitle secondStyle>DogeGF vaults</VaultsBlockTitle>
            <VaultsContentInfo>
              <VaultsContentInfoRight>
                <VaultsContentInfoText>Get rewards for providing liquidity</VaultsContentInfoText>
                <Button secondStyle={true}>COMING SOON</Button>
              </VaultsContentInfoRight>
              <VaultsContentInfoLeft>
                <VaultsImage src="./assets/vaults_teaser.png" alt="" />
              </VaultsContentInfoLeft>
            </VaultsContentInfo>
          </VaultsContent>
      </VaultsContainer>
  )
}

export default Vaults