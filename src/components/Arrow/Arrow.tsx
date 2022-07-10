import React from 'react'
import { BsArrowUpCircle, BsArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import useHover from '../../hooks/useHover';
import {ArrowHovered, ArrowUnHovered} from '../../globalStyles'

interface ArrowProps {
    to: string;
}

const Arrow: React.FC<ArrowProps> = ({to}) => {
  const [hoverRef, isHover] = useHover();
  return (
    <Link smooth={true} offset={10} duration={100} to={to}>
        <div ref={hoverRef}>
            {isHover ? <ArrowHovered/>: <ArrowUnHovered/>}
        </div>
    </Link>
  )
}

export default Arrow