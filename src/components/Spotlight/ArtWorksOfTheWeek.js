import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { artworksCarousel } from "../../sliderProps";
const ArtWorksOfTheWeek = () => {
  return (
    <div className="section-padding overflow-hidden">
      <Swiper {...artworksCarousel} className="artworks-carousel">
        <div className="section-title-wrapper">
          <div className="section-title">
            <span className="gradient-text">Artworks</span> of the Week
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
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="artwork-item">
              <div className="artwork-media">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/artworks/artwork-1.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="artwork-details">
                <h3 className="artwork-title">Social Blockz</h3>
                <div className="avatar-block">
                  <div className="avatar box-42">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-2.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title gradient-text">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>Jackie Jones</a>
                      </Link>{" "}
                    </div>
                    <div className="avatar-meta">@JackieJ</div>
                  </div>
                </div>
                <div className="product-meta-section">
                  <div className="product-meta-item">
                    <div className="label">Current bid</div>
                    <div className="value">2.31 ETH</div>
                    <div className="caption">125.230 U$D</div>
                  </div>
                  <div className="product-meta-item">
                    <div className="label">AUCTION ENDING IN</div>
                    <div className="countdown">
                      <div
                        className="js-countdown"
                        data-timer={104400}
                        data-labels="Days , Hours , Mins , Secs"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-description">
                  <p>
                    Social Blockz was made in a sleek and modern 3D style with a
                    wide range of elements and techniques that show what can be
                    achieved with the newest technologies...
                  </p>
                </div>
                <div className="bidding-section">
                  <div className="place-bid">
                    <button className="btn btn-wide btn-dark">
                      Place a Bid!
                    </button>
                  </div>
                  <div className="product-fav-counter gradient-background">
                    <svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg>
                    <span className="count">105</span>
                  </div>
                  <div className="more-link">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-share-box">
                    <div className="share-icons">
                      {" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#link-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#facebook-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#twitter-icon" />
                        </svg>
                      </a>
                      <a href="">
                        <svg className="crumina-icon">
                          <use xlinkHref="#instagram-icon" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="artwork-item">
              <div className="artwork-media">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/artworks/artwork-6.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="artwork-details">
                <h3 className="artwork-title">Canary’s Kitchen</h3>
                <div className="avatar-block">
                  <div className="avatar box-42">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-3.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title gradient-text">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>The Green Goo</a>
                      </Link>{" "}
                    </div>
                    <div className="avatar-meta">@daGreenGoo</div>
                  </div>
                </div>
                <div className="product-meta-section">
                  <div className="product-meta-item">
                    <div className="label">Current bid</div>
                    <div className="value">3.47 ETH</div>
                    <div className="caption">134.250 U$D</div>
                  </div>
                  <div className="product-meta-item">
                    <div className="label">AUCTION ENDING IN</div>
                    <div className="countdown">
                      <div
                        className="js-countdown"
                        data-timer={104400}
                        data-labels="Days , Hours , Mins , Secs"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-description">
                  <p>
                    Canary’s Kitchen was made in a sleek and modern 3D style
                    with a wide range of elements and techniques that show what
                    can be achieved with the newest technologies...
                  </p>
                </div>
                <div className="bidding-section">
                  <div className="place-bid">
                    <button className="btn btn-wide btn-dark">
                      Place a Bid!
                    </button>
                  </div>
                  <div className="product-fav-counter gradient-background">
                    <svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg>
                    <span className="count">95</span>
                  </div>
                  <div className="more-link">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-share-box">
                    <div className="share-icons">
                      {" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#link-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#facebook-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#twitter-icon" />
                        </svg>
                      </a>
                      <a href="">
                        <svg className="crumina-icon">
                          <use xlinkHref="#instagram-icon" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="artwork-item">
              <div className="artwork-media">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/artworks/artwork-7.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="artwork-details">
                <h3 className="artwork-title">Crimson Planks</h3>
                <div className="avatar-block">
                  <div className="avatar box-42">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-3.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title gradient-text">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>The Green Goo</a>
                      </Link>{" "}
                    </div>
                    <div className="avatar-meta">@daGreenGoo</div>
                  </div>
                </div>
                <div className="product-meta-section">
                  <div className="product-meta-item">
                    <div className="label">Current bid</div>
                    <div className="value">3.47 ETH</div>
                    <div className="caption">134.250 U$D</div>
                  </div>
                  <div className="product-meta-item">
                    <div className="label">AUCTION ENDING IN</div>
                    <div className="countdown">
                      <div
                        className="js-countdown"
                        data-timer={104400}
                        data-labels="Days , Hours , Mins , Secs"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-description">
                  <p>
                    Crimson Planks was made in a sleek and modern 3D style with
                    a wide range of elements and techniques that show what can
                    be achieved with the newest technologies...
                  </p>
                </div>
                <div className="bidding-section">
                  <div className="place-bid">
                    <button className="btn btn-wide btn-dark">
                      Place a Bid!
                    </button>
                  </div>
                  <div className="product-fav-counter gradient-background">
                    <svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg>
                    <span className="count">112</span>
                  </div>
                  <div className="more-link">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-share-box">
                    <div className="share-icons">
                      {" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#link-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#facebook-icon" />
                        </svg>
                      </a>{" "}
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#twitter-icon" />
                        </svg>
                      </a>
                      <a href="">
                        <svg className="crumina-icon">
                          <use xlinkHref="#instagram-icon" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ArtWorksOfTheWeek;
