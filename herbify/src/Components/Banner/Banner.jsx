import { Grid } from '@mui/material'
import React from 'react'
import { BannerImages } from '../../constants/constants'
import Styles from "./Banner.module.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "../../assets/imgs/BannerImgs/Bannerimg1.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Autoplay, EffectCoverflow } from "swiper";
 import  image from "../../assets/imgs/BannerImgs/Bannerimg1.jpg"
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box,
    CardMedia,
  } from "@mui/material";
  
const Banner = () => {
  return (
   <Grid className={Styles.BannerGrid}> 

<img src={image} alt="ss" />

{/* <Swiper
              loop={false}
              slidesPerView={12}
              centeredSlides={false}
              spaceBetween={20}
              grabCursor={true}
            //   autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {" "}
              {BannerImages.map((image) => (
                <SwiperSlide className="swipeSlider">
                  <Card key={image.key} className="card">
            
                        
                      <CardContent className={Styles.CardContent}>
                      <CardMedia 
              component={LazyLoadImage}
              image={image.img}
              alt='sss'
            
              className={Styles.cardMedia}
            />    </CardContent>
         
                  </Card>
                  
                </SwiperSlide>
              ))}
            </Swiper> */}
   </Grid>
  )
}

export default Banner
