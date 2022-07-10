import React from 'react'
import { Block, BlockTitle } from '../../globalStyles'
import { BlogBlock, BlogBlockTitle, BlogContainer, BlogContainerDecoration, BlogContent } from './Blog.style'
import Carousel from '../Carousel/Carousel'

const Blog = () => {
  return (
    <BlogBlock>
      <BlogContainerDecoration src="./assets/blogerka.png" alt="decoration" />
      <BlogContainer>
        <BlogContent>
          <Block>Blog</Block>
          <BlogBlockTitle>Read more</BlogBlockTitle>
        </BlogContent>
        <Carousel/>
      </BlogContainer>
    </BlogBlock>
    
  )
}

export default Blog