import React, { useContext } from 'react'
import Services from '../components/Services'
/*import { useState } from 'react' */
import Hero from '../components/Hero'
import { PopularProducts, LatestProducts, NewsLetter } from '../components'
import { ShopContext } from '../Context/ShopContext'

const Shop = () => {

  /*const {handleClick, cart, setCart} = useContext(ShopContext);

    const[warning, setWarning] = useState(false);

    const handleClick = (product) => {
        let isPresent = false;
        cart.forEach((item) => {
          if(product.name === item.name)
          isPresent = true;
        })
    
        if(isPresent){
          setWarning(true);
          setTimeout(()=> {
            setWarning(false);
          },2000);
          return;
        }
        setCart([...cart, product]);
    
      }*/

  return (
    <div>
      <Hero />
      <LatestProducts />
      <NewsLetter />
      <PopularProducts/>
      <Services />
    </div>
  )
}

export default Shop
