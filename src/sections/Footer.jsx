import React from 'react'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <foooter className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <a href="/">
            <h1 className="text-white-400 font-palanquin font-semibold text-4xl">E-Store</h1>
          </a>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon) => (
                <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img 
                    src={icon.src}
                    alt={icon.alt}
                    height={24}
                    width={24}
                  />
                </div>
              ))
            }
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-3xl text-white-400 font-palanquin font-semibold">Get in Touch</h3>
            <p className="text-white-400 text-2xl font-montserrat">customer@estore.com</p>
            <p className="text-white-400 text-2xl font-montserrat">+91-9531618964</p>
          </div>
        </div>
    </foooter>
  )
}

export default Footer
