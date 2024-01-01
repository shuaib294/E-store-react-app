import {headerLogo} from '../assets/images'
import {carticon} from '../assets/icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const Nav = () => {

  const {cart} = useContext(ShopContext);
  let size = cart.length;

  return (
    <header className="padding-x z-10 w-full">
      <nav className="flex justify-between items-center bg-pale-blue p-5">
      <logo className="flex justify-center items-center">
      <a href="/">
         <img 
          src={headerLogo}
          alt="Logo"
          width={100}
          height={20}
         />
      </a>
      <h2 className="text-4xl ml-5 text-center font-palanquin font-bold"><span className="text-coral-red">E</span>-Store</h2>
      </logo>
      <div>
        <ul className="flex justify-evenly items-center md:space-x-10 text-coral-red font-palanquin font-semibold text-3xl ">
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/mens'>Mens</Link></li>
          <li><Link to='/womens'>womens</Link></li>
          <li><Link to='kids'>kids</Link></li>
        </ul>  
          
      </div>
      <div className='flex justify-between space-x-5'>
        <Link to='/login'><button className="rounded-lg text-white bg-coral-red font-palanquin font-semibold text-2xl p-3 m-2">Login</button></Link>
        <Link to="/cart">
          <cart  className="flex ">
            <img 
              src={carticon}
              alt="Cart"
              width={60}
              height={50}
            />
            <span className="bg-coral-red flex justify-center items-center text-white w-[40px] h-[40px] rounded-full text-2xl font-semibold">{size}</span>
          </cart>
        </Link>
      </div>
      </nav>
    </header>
  )
}

export default Nav
