import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'


function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Card
    img='cardimage.png'
    starimg='starimage.png'
    rating='5.0'
    rat='(6) •'
    country='USA'
    text='Life Lessons with Kaitie Zafres'
    price='From $136 / Person'
    />
    </div>
  )
}

export default App
