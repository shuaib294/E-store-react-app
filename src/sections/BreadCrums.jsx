import React from 'react'
import {star} from '../assets/icons/index'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const BreadCrums = ({product}) => {

  const {handleClick} = useContext(ShopContext);

  return (
    <div className="flex justify-evenly p-20 max-sm:block">
      <div>
      <img className="h-[600px] w-[400px]" src={product.imgURL}/>
      </div>
      <div className="mt-20">
        <h2 className="text-4xl font-palanquin font-semibold">{product.name}</h2>
        <div className="flex items-center">
        <img  className="h-3" src={star}/>
        <img  className="h-3" src={star}/>
        <img  className="h-3" src={star}/>
        <img  className="h-3" src={star}/>
        <img  className="h-3" src={star}/>
        <p className='text-slate-gray mx-2'>(122)</p>
        </div>
        <h5 className="text-3xl text-slate-gray font-montserrat font-semi-bold mt-5">$ {product.price}</h5>
        <p className="w-[400px] text-lg font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan elit at velit vehicula porta. Donec convallis purus augue, quis.</p>
        <button onClick={() => {handleClick(product)}} className="text-white bg-coral-red p-5 mt-5 rounded-md text-2xl font-palanquin font-semibold">Add to Cart</button>
      </div>
    </div>
  )
}

export default BreadCrums
