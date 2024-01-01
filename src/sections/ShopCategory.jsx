import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductCard from '../components/ProductCard';

const ShopCategory = (props) => {
  const {allproducts} = useContext(ShopContext);
  return (
    <>
    <div className="bg-[#dfe3e6]">
    <img className=" h-[350px] w-1/2" src={props.banner}/>
    </div>
    <section className="padding">
    <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl text-center font-palanquin font-bold"><span className="text-coral-red">{props.category}</span> Products</h2>
          <p className="mt-2 text-center font-montserrat text-slate-gray text-2xl">Explore some of our {props.category} products.</p>
    </div>
    <section id="products" className="max-sm:mt-12 mt-10">
       <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm-gap-4 xl:gap-10 gap-4">
       {allproducts.map((product) => {
        if(props.category === product.category){
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
    </>
   
  )
}

export default ShopCategory
