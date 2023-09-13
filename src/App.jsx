import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cardData=data.map(cardobj=>{
    return <Card
            key={item.id}
            item={item}
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
