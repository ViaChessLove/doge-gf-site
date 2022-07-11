import React from 'react'
import { BlogProps } from '../../data/BlogData'
import { BlogCardDate, BlogCardImage, BlogCardTitle } from './BlogCard.style'


const BlogCard: React.FC<BlogProps> = ({id, image, date, title}) => {
  return (
    <>
        <BlogCardImage src={image} alt={id.toString()} />
        <BlogCardDate>{date}</BlogCardDate>
        <BlogCardTitle>{title}</BlogCardTitle>
    </>
  )
}

export default BlogCard