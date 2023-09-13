import React from 'react'

const Card = (props) => {
  const {item}=props
  let badge
  if(props.openspots==0){
    badge='SOLD OUT'
  }else if(props.country=='Online'){
    badge="ONLINE"
  }
  
  return (
    <div className='card_div'>
      {badge && <div className='card--badge'>{badge}</div>}
        <img src={`/${item.coverImg}`} className='card_image' />
        <div className='desc'>
        <img src='/starimage.png' className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">{item.stats.reviewCount}</span>
                <span className="gray">{item.location}</span>
        </div>
            <p>{item.title}</p>
            <p><span className="bold">$ {item.price}</span> / person</p>   
    </div>
  )
}

export default Card