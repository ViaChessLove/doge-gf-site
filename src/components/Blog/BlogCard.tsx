import React from 'react'
import { BlogProps } from '../../data/BlogData'
import { BlogCardContainer, BlogCardDate, BlogCardImage, BlogCardTitle } from './BlogCard.style'


const BlogCard: React.FC<BlogProps> = ({id, image, date, title}) => {
  return (
    <BlogCardContainer>
        <BlogCardImage src={image} alt={id.toString()} />
        <BlogCardDate>{date}</BlogCardDate>
        <BlogCardTitle>{title}</BlogCardTitle>
    </BlogCardContainer>
  )
}

export default BlogCard