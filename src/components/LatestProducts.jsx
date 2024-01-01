import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ShopContext } from '../Context/ShopContext' 

const LatestProducts = () => {
  const {allproducts} = useContext(ShopContext);
  return (
    <section className="padding bg-pale-blue">
    <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl text-center font-palanquin font-bold">Latest <span className="text-coral-red">Top</span> Picks</h2>
          <p className="mt-2 text-center font-montserrat text-slate-gray text-2xl">Explore some of our latest products.</p>
    </div>

    <section id="products" className="max-sm:mt-12 mt-10">
       <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm-gap-4 xl:gap-10 gap-4">
       {allproducts.map((product) => {
        console.log(product.category);
        if(product.id <= 6){
          return (
        <ProductCard key={product.name} product={product} {...product}/>
        )
        }else{
          return null;
        }
       })}
       </div>
    </section>
    </section>
  )
}

export default LatestProducts
