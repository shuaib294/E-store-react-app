import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from './BreadCrums';

const Product = () => {

  const {allproducts} = useContext(ShopContext);
  const {productid} = useParams();
  const product = allproducts.find((e) => e.id === Number(productid));
  return (
    <div>
      <BreadCrums product={product} />
    </div>
  )
}

export default Product
