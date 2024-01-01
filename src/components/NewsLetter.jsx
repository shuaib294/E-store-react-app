import React from 'react'
import { Newsletterphoto } from '../assets/images'

const NewsLetter = () => {
  return (
    <div className="flex justify-evenly items-center padding">
      <div className="w-1/2">
      <h2 className="text-4xl text-center font-palanquin font-bold"><span className="text-coral-red">Subscribe</span>Us!</h2>
      <p className="mt-2 text-center font-montserrat text-slate-gray text-2xl">Get the latest updates.</p>
      </div>
      <div>
        <img src={Newsletterphoto}/>
      </div>
    </div>
  )
}

export default NewsLetter
