import React from 'react'
import logo1 from '../assets/p2.png';


const Hero = () => {
  return (
    <div className='hero-div'>
    <img src={logo1} className='pic_logo' />
    <h1 className='hero_header'>Online Experiences</h1>
    <p className='hero_para'>Join in an unique experiences using airbnb</p>
    </div>
  )
}

export default Hero