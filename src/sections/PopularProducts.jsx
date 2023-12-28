import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = ({handleClick}) => {
  return (
    <section id="products" className="max-sm:mt-12 mt-10">
       <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl text-center font-palanquin font-bold">Latest <span className="text-coral-red">Top</span> Picks</h2>
          <p className="mt-2 text-center font-montserrat text-slate-gray text-2xl">Explore some of our latest products.</p>
       </div>

       <div className="mt-16 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm-gap-4 xl:gap-10 gap-4">
       {products.map((product) => (
        <PopularProductCard key={product.name} product={product} {...product} handleClick={handleClick}/>
        ))}
       </div>
    </section>
  )
}

export default PopularProducts
