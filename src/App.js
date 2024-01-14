import React from 'react'
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import './App.css'

import { Footer, Blog, Possibility, Features, Header, About } from './containers';


const App = () => {
  return(
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;