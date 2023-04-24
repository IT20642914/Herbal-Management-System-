import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Styles from './productCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ProductCard = () => {
  const products = useSelector((state: any) => state.allProducts.products);

  const renderList = products.map((product: any) => {
    const { id, title, price, category, image } = product;

    return (
      <SwiperSlide key={id}>
        <Card className={Styles.Card}>
          <CardMedia component="img" height="250" image={image} alt={title} style={{ objectFit: 'fill' }} />
          <CardContent>
            <Typography variant="h6">{title.substring(0, 11)} ...</Typography>
            <Typography variant="subtitle1">${price}</Typography>
            <Typography variant="body1" color="textSecondary">{category}</Typography>
          </CardContent>
          <Link to={`/Product/${id}`}>
            <Box className={Styles.ButtonBox}>
              <Button className={Styles.CardButton} variant="outlined">
                Buy Now
              </Button>
            </Box>
          </Link>
        </Card>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
    slidesPerView={6}
    spaceBetween={30}
    pagination={{
        type: "bullets",
      }}
      navigation={true}
      className={ Styles.mySwiper}
      modules={[Pagination, Navigation]}  
    >
      {renderList}
    </Swiper>
  );
};

export default ProductCard;
