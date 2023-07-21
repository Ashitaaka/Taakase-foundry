import React from 'react'
import { Link } from 'react-router-dom'

//import components
import FontFace from '../../utils/FontFace'
import { HiArrowDown } from 'react-icons/hi'

//import CSS
import './FontCard.css'

const FontCard = ({id, name, type, url, studio}) => {
    
  return (
    <div className="font_card">
      <FontFace fontFamily={name} fontFormat={type} fontUrl={url}/>
      <Link to={`font/${id}`} className="font_title">
          <HiArrowDown size={25} className='font_title_arrow'/>
          <h3 style={{fontFamily: `${name}`}}>{name}</h3>
      </Link>
          <p>By {studio ? studio : "unknown"}</p>
    </div>
  )
}

export default FontCard