import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cardData=data.map(cardobj=>{
    return <Card
        img={cardobj.coverImg}
        rating={cardobj.rating}
        rat={cardobj.reviewCount}
        country={cardobj.location}
        text={cardobj.title}
        price={cardobj.price}
        openspots={cardobj.openSpots}
             />
  })
  return (
    <div>
    <Navbar />
    <Hero />
    <section className='cards-list'>
    {cardData}
    </section>
    </div>
  )
}

export default App
