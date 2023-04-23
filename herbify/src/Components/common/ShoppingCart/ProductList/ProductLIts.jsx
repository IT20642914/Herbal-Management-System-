import React, { useEffect } from 'react'

import { fetchProducts } from '../../../../redux/action/userAction';

import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/productCard/ProductCard';
import { Grid } from '@mui/material';
import ProductCard1 from '../components/productCard/ProductCardSwaper';
import Styles from "./ProductList.module.scss"

const ProductLIts = () => {


  return (
    <Grid className={Styles.ProductGrid}>
      <Grid className={Styles.productGrid}></Grid>
      <Grid className={Styles.productGrid1}> 
       <ProductCard1/>
      </Grid>
    
      <Grid className={Styles.productGrid}></Grid>
    </Grid>
  )
}

export default ProductLIts