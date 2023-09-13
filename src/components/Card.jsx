import React from 'react'

const Card = (props) => {
  let badge
  if(props.openspots==0){
    badge='SOLD OUT'
  }else if(props.country=='Online'){
    badge="ONLINE"
  }
  
  return (
    <div className='card_div'>
      {badge && <div className='card--badge'>{badge}</div>}
        <img src={`/${props.img}`} className='card_image' />
        <div className='desc'>
        <img src='/starimage.png' className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.rat}</span>
                <span className="gray">{props.country}</span>
        </div>
            <p>{props.text}</p>
            <p><span className="bold">$ {props.price}</span> / person</p>   
    </div>
  )
}

export default Card