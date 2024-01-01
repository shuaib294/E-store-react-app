import React, { createContext, useState } from "react";
import { allproducts} from "../constants";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const[cart, setCart] = useState([]); 
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
    
    }

    const contextValue = {allproducts, handleClick, cart, setCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;