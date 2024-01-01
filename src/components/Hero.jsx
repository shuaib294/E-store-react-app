import React from 'react'
import {HeroImage} from '../assets/images/index'


const Hero = () => {
  return (
    <div className='flex justify-evenly items-center'>
      <div className='flex flex-col justify-between items-left pl-20'>
        <h2 className="text-4xl font-palanquin font-bold text-left">Latest <span className="text-coral-red">Trends</span> <br />for EveryOne</h2>
        <button className="rounded-lg text-white bg-coral-red w-60 font-palanquin font-semibold text-2xl p-3 m-2">Latest Collections</button>
      </div>

      <div>
        <img src={HeroImage}></img>
      </div>
    </div>
  )
}

export default Hero
