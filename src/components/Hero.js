import React from 'react'
import heroImg from "../images/photo-grid.png"

export const Hero = () => {
  return (
    <div>
        <section className="hero">
            <img src={heroImg} className="hero--photo"  alt='/'/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section> 
    </div>
  )
}
