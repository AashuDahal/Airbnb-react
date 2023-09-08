import React from 'react'
import image1 from '../assets/cardimage.png'
import starimg from '../assets/starimage.png'

const Card = () => {
  return (
    <div className='card_div'>
        <img src={image1} className='card_image' />
        <div className='desc'>
        <img src={starimg} className="card--star" />
                <span>5.9</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
        </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>   
    </div>
  )
}

export default Card