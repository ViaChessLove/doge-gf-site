import React, {  useRef, } from 'react'
import { Block } from '../../globalStyles'
import { BlogBlock, BlogBlockTitle, BlogContainer, BlogContainerDecoration, BlogContent, SliderContainer } from './Blog.style'
import { StyledLeftArrow, StyledRightArrow } from '../Carousel/Carousel.style'
import { sliderSettings } from '../../data/CarouselData'
import Carousel from '../Carousel/Carousel'

const Blog = () => {
  const sliderRef = useRef<any>(undefined);
  return (
    <BlogBlock >
      <BlogContainerDecoration id='blog' src="./assets/blogerka.png" alt="decoration" />
      <BlogContainer>
        <StyledLeftArrow onClick={() => sliderRef?.current.slickPrev()}/>
        <StyledRightArrow onClick={() => sliderRef?.current.slickNext()}/>
        <BlogContent>
          <Block>Blog</Block>
          <BlogBlockTitle>Read more</BlogBlockTitle>
        </BlogContent>
        <Carousel sliderRef={sliderRef} sliderSettings={sliderSettings}/>
      </BlogContainer>
    </BlogBlock>
    
  )
}

export default Blog