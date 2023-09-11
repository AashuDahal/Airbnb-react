import React from 'react'
// import image1 from '../assets/cardimage.png'
// import starimg from '../assets/starimage.png'

const Card = (props) => {
  return (
    <div className='card_div'>
        <img src='../assets/cardimage.png' className='card_image' />
        <div className='desc'>
        <img src={`./assets/${props.starimg}`} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.rat}</span>
                <span className="gray">{props.country}</span>
        </div>
            <p>{props.text}</p>
            <p><span className="bold">{props.price}</span></p>   
    </div>
  )
}
//{`../assets/${props.image}`}
export default Card