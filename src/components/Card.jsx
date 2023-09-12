import React from 'react'


const Card = (props) => {
  return (
    <div className='card_div'>
        <img src={`/${props.img}`} className='card_image' alt=' ' />
        <div className='desc'>
        <img src={`/${props.starimg}`} className="card--star" alt=' ' />
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