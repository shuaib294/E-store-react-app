import React, { useEffect, useState } from 'react'

const Cart = ({cart, setCart, setShow}) => {

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
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{item.name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">$ {item.price}</p>
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
        <button onClick={() => setShow(true)} className="rounded-lg text-white bg-coral-red font-palanquin font-semibold text-2xl p-3 m-2">Back to Home</button>
      </div>
    </div>
  )
}

export default Cart;
