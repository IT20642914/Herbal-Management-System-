import React, { useEffect } from 'react'

import { fetchProducts } from '../../../../redux/action/userAction';

import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/productCard/ProductCard';
import { Grid } from '@mui/material';

import Styles from "./ProductList.module.scss"
const ProductLIts = () => {

  const products = useSelector((state: any) => state.allProducts)
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())//using thunk middleware
  }, [dispatch]);
  console.log("products :", products);

  return (
    <Grid className={Styles.ProductGrid}>

      <ProductCard />

    </Grid>
  )
}

export default ProductLIts