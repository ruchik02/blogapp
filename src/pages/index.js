import React from 'react'
import { Header } from 'components/Header'
import Body from 'components/Body'
import Post from 'components/Post'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const index = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Navbar/>
      <Post/>
      <Footer/>
    </div>
  )
}

export default index