import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredCarousel } from "../../sliderProps";
const CuratedCollections = () => {
  return (
    <div className="section-padding overflow-hidden">
      <Swiper {...featuredCarousel} className="collections-carousel">
        <div className="section-title-wrapper">
          <div className="section-title">
            <span className="gradient-text">Curated</span> Collections
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
        <div className="featured-carousel">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="collection-item">
                {" "}
                <Link href="/02-explore">
                  <a>
                    <div className="cover-image">
                      <img src="img/content/artworks/artwork-2.png" alt="" />
                    </div>
                    <div className="collection-info">
                      <div className="title h3">Pop Culture</div>
                      <div className="number">364 items</div>
                    </div>
                  </a>
                </Link>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="collection-item">
                {" "}
                <Link href="/02-explore">
                  <a>
                    <div className="cover-image">
                      <img src="img/content/artworks/artwork-3.png" alt="" />
                    </div>
                    <div className="collection-info">
                      <div className="title h3">Motion Graphics</div>
                      <div className="number">590 items</div>
                    </div>
                  </a>
                </Link>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="collection-item">
                {" "}
                <Link href="/02-explore">
                  <a>
                    <div className="cover-image">
                      <img src="img/content/artworks/artwork-4.png" alt="" />
                    </div>
                    <div className="collection-info">
                      <div className="title h3">Illustrations</div>
                      <div className="number">364 items</div>
                    </div>
                  </a>
                </Link>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="collection-item">
                {" "}
                <Link href="/02-explore">
                  <a>
                    <div className="cover-image">
                      <img src="img/content/artworks/artwork-5.png" alt="" />
                    </div>
                    <div className="collection-info">
                      <div className="title h3">3D Art</div>
                      <div className="number">590 items</div>
                    </div>
                  </a>
                </Link>{" "}
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CuratedCollections;
