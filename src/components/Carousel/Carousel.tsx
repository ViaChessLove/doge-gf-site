import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarouselContent, CarouselSlider } from './Carousel.style';
import { blogData } from '../../data/BlogData';
import BlogCard from '../Blog/BlogCard';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface CarouselProps {
  sliderSettings: any,
  sliderRef?: any
}

const Carousel: React.FC<CarouselProps> = ({sliderSettings, sliderRef}) => {
  return (
    <> 
      <CarouselSlider {...sliderSettings} ref={sliderRef}>
          {blogData.map(blog => <BlogCard key={blog.id} id={blog.id} image={blog.image} title={blog.title} date={blog.date}/>)}
      </CarouselSlider>
    </>
  )
}

export default Carousel