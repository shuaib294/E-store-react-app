import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { star } from '../assets/icons';

const Cart = () => {

  const {cart, setCart} = useContext(ShopContext);

  const [price, setPrice] = useState(0);

  const handleRemove = (name) => {
    const arr = cart.filter((item) => item.name !== name);
    setCart(arr);
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans = ans + item.price;
    })
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice();
  }) 

  return (
    <div>
    <nav className="items-center bg-pale-blue p-5 rounded-3xl">
    <h2 className="text-4xl text-center font-palanquin font-bold">My<span className="text-coral-red">Cart</span></h2>
    </nav>
      {
        cart.map((item)=> (
          <div className="flex justify-between px-20 rounded-3xl shadow-xl p-10" key={item.name}>
            <img 
            src={item.imgURL}  
            className="w-[280px] h-[280px]"
            />
            <div>

               <h2 className="text-4xl font-palanquin font-semibold">{item.name}</h2>
               <div className="flex items-center">
               <img  className="h-3" src={star}/>
               <img  className="h-3" src={star}/>
               <img  className="h-3" src={star}/>
               <img  className="h-3" src={star}/>
               <img  className="h-3" src={star}/>
               <p className='text-slate-gray mx-2'>(122)</p>
            </div>
            <h5 className="text-3xl text-slate-gray font-montserrat font-semi-bold mt-5">$ {item.price}</h5>
            <button onClick={()=> handleRemove(item.name)} className="rounded-lg text-white bg-coral-red font-palanquin font-semibold text-2xl p-3 m-2">Remove</button>
            </div>
          </div>

        ))
      }
      <div className="flex justify-between mt-5 items-center px-20 rounded-3xl shadow-xl p-10">
            <span className="text-2xl text-coral-red font-semibold"> Payable Amount ($) </span>
            <span className="font-semibold text-4xl"> {price}</span>
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/"><button className="rounded-lg text-white bg-coral-red font-palanquin font-semibold text-2xl p-3 m-2">Back to Home</button></Link>
      </div>
    </div>
  )
}

export default Cart;
