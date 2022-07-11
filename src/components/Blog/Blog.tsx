import React from 'react'
import { Block, BlockTitle } from '../../globalStyles'
import { BlogBlock, BlogBlockTitle, BlogContainer, BlogContainerDecoration, BlogContent } from './Blog.style'
import Carousel from '../Carousel/Carousel'
import { blogData } from '../../data/BlogData'
import { BlogCardDate, BlogCardImage, BlogCardTitle } from './BlogCard.style'
import BlogCard from './BlogCard'

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
          <BlogCard id={blogData[0].id} image={blogData[0].image} date={blogData[0].date} title={blogData[0].title}/> 
        </div>
      </BlogContainer>
    </BlogBlock>
    
  )
}

export default Blog