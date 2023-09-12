import React from 'react'

const Card = (props) => {
  return (
    <div className='card_div'>
        <img src={`/${props.img}`} className='card_image' />
        <div className='desc'>
        <img src={`/${props.starimg}`} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.rat}</span>
                <span className="gray">{props.country}</span>
        </div>
            <p>{props.text}</p>
            <p><span className="bold">{props.price}</span></p>   
    </div>
  )
}

export default Card