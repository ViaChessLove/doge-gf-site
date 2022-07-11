import Slider from "react-slick";
import styled from "styled-components";
import { BsArrowRight, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export const CarouselContent = styled.section`
`;

export const CarouselSlider = styled(Slider)`
	max-width: 100%;
	z-index: 0.5;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`

export const StyledLeftArrow = styled(BsFillArrowLeftCircleFill)`
	z-index: 49;
	font-size: 50px;
	position: absolute;
	top: 57%;
	left: 3.5%;
	color: #1a3454;
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`
export const StyledRightArrow = styled(BsFillArrowRightCircleFill)`
	z-index: 49;
	font-size: 50px;
	position: absolute;
	top: 57%;
	right: 3.5%;
	color: #1a3454;
	&:hover{
		cursor: pointer;
		opacity: 0.8;
	}
`