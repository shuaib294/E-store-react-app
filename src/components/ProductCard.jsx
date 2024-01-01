import React from 'react'
import {star} from '../assets/icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const ProductCard = ({product}) => {

  const {handleClick} = useContext(ShopContext);

  return (
    <div className="flex flex-1 flex-col w-full items-center max-sm:w-full rounded-xl shadow-lg p-2 bg-white">
      <Link to={`/product/${product.id}`}>
      <img 
        src={product.imgURL} alt={product.name}
        className="w-[280px] h-[280px]"
      />
      </Link>
      <div className="mt-8 flex justify-start gap-2.5">
        <img 
            src={star}
            alt="star"
            width={24}
            height={24}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">$ {product.price}</p>
      <button onClick={()=> handleClick(product)} className="rounded-lg text-white bg-coral-red font-palanquin font-semibold text-2xl p-3 m-2">Add to Cart</button>
    </div>
  )
}

export default ProductCard
