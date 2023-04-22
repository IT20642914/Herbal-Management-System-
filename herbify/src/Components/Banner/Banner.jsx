import { Grid } from '@mui/material'
import React from 'react'
import { BannerImages } from '../../constants/constants'
import Styles from "./Banner.module.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Autoplay, EffectCoverflow } from "swiper";

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box,
    CardMedia,
  } from "@mui/material";
  
import Bannerimg1 from '../../assets/imgs/BannerImgs/Bannerimg1.jpg';
import Bannerimg2 from '../../assets/imgs/BannerImgs/bannerimg2.jpg';

const Banner = () => {
  const bannerImages = [
    {
      key: 1,
      img: Bannerimg1,
    },
    {
      key: 2,
      img: Bannerimg2,
    },
  ];

  return (
    <Grid className={Styles.BannerGrid}>
      <Grid className={Styles.BannerGridiN2}>

      </Grid>
      <Grid className={Styles.BannerGridiN1}>
            
      <Swiper
        loop={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {BannerImages.map((image) => (
          <SwiperSlide key={image.key} className="swipeSlider">
            <Card className="card">
              <CardContent className={Styles.CardContent}>
                <CardMedia className={Styles.CardMedia}
                  component={LazyLoadImage}
    
                  image={image.img}
                  alt={"    "}
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
        
        </Grid>
        <Grid className={Styles.BannerGridiN2}>
        
        </Grid>
    
    </Grid>
  )
}

export default Banner
