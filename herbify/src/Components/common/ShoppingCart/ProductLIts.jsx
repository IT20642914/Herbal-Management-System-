import React, { useEffect } from 'react'

import { fetchProducts } from '../../../redux/action/userAction';

import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './components/productCard/ProductCard';

const ProductLIts = () => {

  const products = useSelector((state: any) => state.allProducts)
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())//using thunk middleware

  }, [dispatch]);
  console.log("products :", products);
  return (
    <div className=' ui grid container' >

      <ProductCard />

    </div>
  )
}

export default ProductLIts