import React from 'react'
import { Link } from 'react-router'
import style from './style.css'

const Home = () => (
  <div className={ style.home }>
    <div>
      <p className={ style.text }>this is the Home page</p>
      <Link to="/about">go to about</Link>      
    </div>
  </div>
)

export default Home



