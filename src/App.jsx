import React from 'react'
import {PopularProducts, Services, Footer} from './sections/index'
import Nav from './components/Nav'
import { useState } from 'react'
import Cart from './sections/Cart'

const App = () => {
  const[cart, setCart] = useState([]);
  const[warning, setWarning] = useState(false);
  const[show, setShow] = useState(true); 

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

  }

  return (
    <>
    {
      show ? <main className="relative">
      <Nav size={cart.length} setShow={setShow}/>
       <section className="padding">
        <PopularProducts handleClick={handleClick}/>
       </section>
       {
        warning && <div className="warning">Item is already added in your cart.</div>
       }
       <section className="pt-20 pb-28 sm:px-16 px-8 bg-pale-blue">
        <Services />
       </section>
       <section className="bg-black padding-x padding-t pb-8">
        <Footer />
       </section>
    </main> : <Cart cart={cart} setCart={setCart} setShow={setShow}/> 
    }
    </>
  )
}

export default App





