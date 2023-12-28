import {headerLogo} from '../assets/images'
import {cart} from '../assets/icons'


const Nav = ({size, setShow}) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center bg-pale-blue p-5 rounded-3xl">
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
      <cart onClick={()=> setShow(false)} className="flex ">
        <img 
          src={cart}
          alt="Cart"
          width={60}
          height={50}
        />
        <span className="bg-coral-red flex justify-center items-center text-white w-[40px] h-[40px] rounded-full text-2xl font-semibold">{size}</span>
      </cart>
      </nav>
    </header>
  )
}

export default Nav
