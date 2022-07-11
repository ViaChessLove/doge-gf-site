import React from 'react'
import { Block, BlockTitle } from '../../globalStyles'
import { BlogBlock, BlogBlockTitle, BlogContainer, BlogContainerDecoration, BlogContent } from './Blog.style'
import Carousel from '../Carousel/Carousel'
import { blogData } from '../../data/BlogData'

const Blog = () => {
  return (
    <BlogBlock >
      <BlogContainerDecoration id='blog' src="./assets/blogerka.png" alt="decoration" />
      <BlogContainer>
        <BlogContent>
          <Block>Blog</Block>
          <BlogBlockTitle>Read more</BlogBlockTitle>
        </BlogContent>
        <div>
          {blogData[0].id}
        </div>
      </BlogContainer>
    </BlogBlock>
    
  )
}

export default Blog