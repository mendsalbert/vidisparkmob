import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredCarousel } from "../../sliderProps";
import Nft from "../Nft";
import { useVideo } from "../../services/videos";

const HomeFeaturedItems = () => {
  const { videoResults } = useVideo();
  return (
    <div className="container section-padding overflow-hidden">
      <div className="section-title-wrapper">
        <div className="section-title">
          <span className="gradient-text">Trending </span> Videos
        </div>
        <div className="title-navigation">
          <div className="featured-carousel-icon swiper-button-prev">
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-left2-icon" />
            </svg>
          </div>
          <div className="featured-carousel-icon swiper-button-next">
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-right2-icon" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper {...featuredCarousel} className="featured-carousel">
        <div className="swiper-wrapper">
          {videoResults &&
            videoResults.map((d, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <Nft data={d} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HomeFeaturedItems;
