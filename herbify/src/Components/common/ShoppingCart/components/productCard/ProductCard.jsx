import React from 'react';
import { useSelector } from 'react-redux';
import { Button,Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Styles from './productCard.module.scss';

const ProductCard = () => {
  const products = useSelector((state: any) => state.allProducts.products);

  const renderList = products.map((product: any) => {
    const { id, title, price, category, image } = product;

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={id} className={Styles.product}>
  <Card className={Styles.Card}>
    <CardMedia component="img" height="250" image={image} alt={title} style={{ objectFit: "fill" }} />
    <CardContent>
      <Typography variant="h6">{title.substring(0, 11)} ...</Typography>
      <Typography variant="subtitle1">${price}</Typography>
      <Typography variant="body1" color="textSecondary">{category}</Typography>
    </CardContent>
    <Link to={`/Product/${id}`}>
      <Box className={Styles.ButtonBox}>
         <Button className={Styles.CardButton} variant="outlined">
  Buy Now
</Button></Box>
    
    </Link>
  </Card>
</Grid>
    );
  });

  return (
    <Grid container spacing={4} sx={{ marginBottom: '13rem' }}>
      {renderList}
    </Grid>
  );
};

export default ProductCard;
