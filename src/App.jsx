import React from 'react'
import {PopularProducts, Services, Footer} from './components/index'
import Nav from './components/Nav'
import { useState } from 'react'
import Cart from './sections/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './sections/ShopCategory'
import Product from './sections/Product'
import LoginSignup from './sections/LoginSignup'
import Shop from './sections/Shop'
import { mens_banner, womens_banner, kids_banner } from './assets/images'


const App = () => {
 /* const[cart, setCart] = useState([]); */

  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={mens_banner} category="mens"/>}></Route>
        <Route path="/womens" element={<ShopCategory banner={womens_banner} category="womens"/>}></Route>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids"/>}></Route>
        <Route path="/product" element={<Product />}>
          <Route path=":productid" element={<Product />}/>
        </Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="login" element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App





