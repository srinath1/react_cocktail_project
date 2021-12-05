import React from 'react'
import phoneImg from './images/phone.svg'
import { AppContext,useGlobalContext } from './context'


const Hero = () => {
  const {closeSubmenu}=useGlobalContext()
  return <div className="hero" onMouseMove={closeSubmenu}>
  <article className="hero-info">
    <h1>The Payment Infrastructre for the Internet</h1>
    <p>Millions of companies use it..Join now</p>
    <button className="btn">
      Start now
    </button>
  </article>

<article className="hero-images">
  <img src={phoneImg} alt="home" className="phone-img"/>
</article>
  </div>
}

export default Hero
