import React from 'react'
import Header from './Header'
import Card from './Card'
import Money from './Money'
import Footer from './Footer'

function Container() {
  return (
    <div className='container mt-2'>
        <Header></Header>
        <Money></Money>
        <Card></Card>
        <Footer></Footer>
    </div>
  )
}

export default Container