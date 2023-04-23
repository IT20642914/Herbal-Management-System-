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
import { Autoplay,  } from "swiper";

import {
    Card,
    CardContent,
    CardMedia,
  } from "@mui/material";
  
const Banner = () => {


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
                <CardMedia style={{height: "100%", width: "100%", objectFit: "fill"}}   className={Styles.CardMedia }
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
