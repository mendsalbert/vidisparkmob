import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSlider } from "../../sliderProps";

const HeroSlider = () => {
  return (
    <div className="section-padding">
      <Swiper {...homeSlider} id="homeSlider" className="swiper">
        <div className="swiper-wrapper">
          <SwiperSlide
            id="slide-1"
            className="swiper-slide slide-content-align-right"
          >
            <picture>
              <source
                type="image/avif"
                srcSet="avif/content/slider/slider-img-1.avif"
              />
              {/* <img
                src="img/content/slider/slider-img-1.png"
                width={940}
                height={640}
                alt="Slide Image"
              /> */}
              <video
                src="avif/content/slider/slider-vid.mp4"
                width={940}
                height={640}
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop
              />
            </picture>
            <div className="dark-overlay" />
            <div className="slide-content">
              <div className="slide-subtitle">WELCOME TO VIDISPARK</div>
              <div className="slide-title">
                Endless Artistic Possibilities Await.{" "}
              </div>
              <div className="gradient-border-purple-bg slide-button">
                {" "}
                <Link href="/explore">
                  <a className="btn btn-normal">Explore Now!</a>
                </Link>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="slide-2"
            className="swiper-slide slide-content-align-right"
          >
            <picture>
              <source
                type="image/avif"
                srcSet="avif/content/slider/slider-img-.avif"
              />
              {/* <img
                src="img/content/slider/slider-img-1.png"
                width={940}
                height={640}
                alt="Slide Image"
              /> */}
              <video
                src="avif/content/slider/slider-vid-2.mp4"
                width={940}
                height={640}
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop
              />
            </picture>
            <div className="dark-overlay" />
            <div className="slide-content">
              <div className="slide-subtitle">WELCOME TO VIDISPARK</div>
              <div className="slide-title">Enter a new reality.</div>
              <div className="gradient-border-purple-bg slide-button">
                {" "}
                <Link href="/metaverse">
                  <a className="btn btn-normal">Explore Now!</a>
                </Link>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide-3" className="swiper-slide">
            <picture>
              <source
                type="image/avif"
                srcSet="avif/content/slider/slider-img-2.avif"
              />
              <video
                src="avif/content/slider/slider-vid-4.mp4"
                width={940}
                height={640}
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop
              />
            </picture>
            <div className="dark-overlay" />
            <div className="slide-content">
              <div className="item-info">
                <div className="title slide-title">Endless Creativity </div>
                <div className="item-bid-section">
                  <div className="bid-item">
                    <div className="label">
                      Create, Share and Monitize with vidispark
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="homeslider-nav">
          <div className="swiper-button-next">
            <svg className="crumina-icon next-button">
              <use xlinkHref="#arrow-right2-icon" />
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg className="crumina-icon prev-button">
              <use xlinkHref="#arrow-left2-icon" />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
