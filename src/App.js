import React, { Component } from 'react'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import Portfolio from './component/Portfolio/Portfolio'
import { Route,Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Routes>
        <Route path='/' element={<Portfolio />}></Route>
        <Route path='PORTFOLIO' element={<Portfolio />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='*' element={<About />}></Route>
        </Routes>
       
      <Footer />
              </div>
    )
  }
}

