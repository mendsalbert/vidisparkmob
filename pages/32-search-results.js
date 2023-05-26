import Link from "next/link";
import React from "react";
import Layouts from "../src/layouts/Layouts";

const SearchResults = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            <span className="result-number">6</span> Search results for
            <span className="gradient-text">Animated</span>
          </h2>
        </div>
        {/* SEARCH RESULTS */}
        <div className="search-results-feed">
          {/*  TABS BLOCK */}
          <div className="tabs-block swiper-container">
            <div className="swiper-nav">
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
            {/* TABS BUTTONS AND TABS SWIPER */}
            <ul className="tabs-list swiper-wrapper">
              <li className="swiper-slide active">
                <a href="#tab1">Items</a>
              </li>
              <li className="swiper-slide">
                <a href="#tab2">People</a>
              </li>
              <li className="swiper-slide">
                <a href="#tab3">Blog Posts</a>
              </li>
            </ul>
            {/* TABS BUTTONS AND TABS SWIPER */}
            <div className="tabs-content-wrapper">
              {/*  ITEMS */}
              <div id="tab1" className="tab active">
                <div className="tab-content">
                  <div className="featured-box grid-4-columns">
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">22</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/05-product-page">
                              <a>
                                <img
                                  src="img/content/items/featured-item-1.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="featured-countdown">
                              <span className="clock">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#clock-icon" />
                                </svg>
                              </span>
                              <span
                                className="js-countdown"
                                data-timer={86400}
                                data-labels="d : , h : , m : , s"
                              />
                            </div>
                            <div className="title">
                              <Link href="/05-product-page">
                                <a>The Molten Heart</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @DexterStark
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Current BID</div>
                            <div className="price">4.07 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">68</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/06-product-page-v2">
                              <a>
                                <img
                                  src="img/content/items/featured-item-2.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="featured-countdown">
                              <span className="clock">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#clock-icon" />
                                </svg>
                              </span>
                              <span
                                className="js-countdown"
                                data-timer={76400}
                                data-labels="d : , h : , m : , s"
                              />
                            </div>
                            <div className="title">
                              <Link href="/06-product-page-v2">
                                <a>Social Blockz</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar-2.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @JackieJ
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Current BID</div>
                            <div className="price">1.96 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">105</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/items/featured-item-3.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="featured-countdown">
                              <span className="clock">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#clock-icon" />
                                </svg>
                              </span>
                              <span
                                className="js-countdown"
                                data-timer={456400}
                                data-labels="d : , h : , m : , s"
                              />
                            </div>
                            <div className="title">
                              <a>Breathing Nature</a>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @DexterStark
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Current BID</div>
                            <div className="price">2.31 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">60</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/05-product-page">
                              <a>
                                <img
                                  src="img/content/items/featured-item-4.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="featured-countdown">
                              <span className="clock">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#clock-icon" />
                                </svg>
                              </span>
                              <span
                                className="js-countdown"
                                data-timer={96400}
                                data-labels="d : , h : , m : , s"
                              />
                            </div>
                            <div className="title">
                              <Link href="/05-product-page">
                                <a>Flow of Planets</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar-8.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @beardedwndr
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Current BID</div>
                            <div className="price">1.40 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">23</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/06-product-page-v2">
                              <a>
                                <img
                                  src="img/content/items/featured-item-5.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="title">
                              <Link href="/06-product-page-v2">
                                <a>MushRoom Popcorn</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @DexterStark
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Reserve price</div>
                            <div className="price">0.96 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                          <div className="fav-counter">
                            <svg className="crumina-icon">
                              <use xlinkHref="#heart-icon" />
                            </svg>
                            <span className="count">36</span>
                          </div>
                          <div className="featured-item-image">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/items/featured-item-6.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="featured-item-info">
                            <div className="title">
                              <a>Golden Expansion</a>
                            </div>
                            <div className="item-meta">
                              <span className="avatar box-26">
                                <Link href="/08-profile-page">
                                  <a>
                                    <img src="img/avatar.png" alt="" />
                                  </a>
                                </Link>
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              </span>
                              @DexterStark
                            </div>
                          </div>
                        </div>
                        <div className="featured-item-post-content">
                          <div className="featured-item-pricebox">
                            <div className="price-caption">Reserve price</div>
                            <div className="price">1.47 ETH</div>
                          </div>
                          <div className="social-share-box">
                            <div className="social-caption">Share</div>
                            <div className="share-icons">
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#facebook-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#twitter-icon" />
                                </svg>
                              </a>
                              <a href="#">
                                <svg className="crumina-icon">
                                  <use xlinkHref="#instagram-icon" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  ITEMS */}
              {/*  PEOPLE */}
              <div id="tab2" className="tab">
                <div className="tab-content">
                  <div className="creators-box grid-4-columns">
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-1.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>Dexter Stark</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">
                                @DexterStark
                              </span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-dark">
                              Follow!
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            I am a self-taught digital artist who specializes in
                            3d art and motion graphics. Most of my...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-1.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-2.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-21.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box more-projects">
                            <Link href="/08-profile-page">
                              <a>
                                <svg className="crumina-icon">
                                  <use xlinkHref="#dots-icon" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">135</div>
                        </div>
                      </div>
                    </div>
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-2.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar-2.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>Jackie Jones</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">@JackieJ</span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-dark">
                              Follow!
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            This is an example for the bio text space of the
                            creator’s profile boxes. Only an extract will...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-5.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-9.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-10.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box more-projects">
                            <Link href="/08-profile-page">
                              <a>
                                <svg className="crumina-icon">
                                  <use xlinkHref="#dots-icon" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">16</div>
                        </div>
                      </div>
                    </div>
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-3.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar-3.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>The Green Goo</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">@daGreenGoo</span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-fuchsia">
                              Unfollow
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            I am a self-taught digital artist who specializes in
                            3d art and motion graphics. Most of my...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-13.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-14.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-8.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box more-projects">
                            <Link href="/08-profile-page">
                              <a>
                                <svg className="crumina-icon">
                                  <use xlinkHref="#dots-icon" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-4.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar-4.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>3dB0utik</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">
                                @3db0utikart
                              </span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-dark">
                              Follow!
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            This is an example for the bio text space of the
                            creator’s profile boxes. Only an extract will...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-23.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-24.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-25.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box more-projects">
                            <Link href="/08-profile-page">
                              <a>
                                <svg className="crumina-icon">
                                  <use xlinkHref="#dots-icon" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">7</div>
                        </div>
                      </div>
                    </div>
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-5.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar-5.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>Noir Artworks</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">@noirArtks</span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-fuchsia">
                              Unfollow
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#pinterest-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#reddit-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            I am a self-taught digital artist who specializes in
                            3d art and motion graphics. Most of my...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-4.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-11.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-12.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box more-projects">
                            <Link href="/08-profile-page">
                              <a>
                                <svg className="crumina-icon">
                                  <use xlinkHref="#dots-icon" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">7</div>
                        </div>
                      </div>
                    </div>
                    <div className="creator-item">
                      <div className="creator-cover">
                        <img
                          src="img/content/creators/creator-cover-6.png"
                          alt=""
                        />
                      </div>
                      <div className="creator-wrapper">
                        <div className="creator-info-wrapper">
                          <div className="creator-info">
                            <div className="avatar box-64">
                              <Link href="/08-profile-page">
                                <a>
                                  <img src="img/avatar-6.png" alt="avatar" />
                                  <span className="verified">
                                    <svg className="crumina-icon">
                                      <use xlinkHref="#check-icon" />
                                    </svg>
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="title">
                              <Link href="/08-profile-page">
                                <a>BeemBoxArt</a>
                              </Link>
                            </div>
                            <div className="item-meta">
                              <span className="gradient-text">@beemb</span>
                            </div>
                          </div>
                          <div className="follow-me">
                            <button className="btn btn-small btn-dark">
                              Follow!
                            </button>
                          </div>
                        </div>
                        <ul className="social-icons-list">
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-icon icon-border">
                            <a href="#">
                              <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                        <div className="about-creator">
                          <p>
                            This is an example for the bio text space of the
                            creator’s profile boxes. Only an extract will...
                          </p>
                        </div>
                        <div className="projects-previews">
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-26.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="preview-box">
                            <Link href="/07-product-page-v3">
                              <a>
                                <img
                                  src="img/content/previews/project-thumb-27.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="creator-stats">
                        <div className="stats-item">
                          <div className="label">Followers</div>
                          <div className="number">903</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Following</div>
                          <div className="number">56</div>
                        </div>
                        <div className="stats-item">
                          <div className="label">Created</div>
                          <div className="number">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  PEOPLE */}
              {/*  BLOG POSTS */}
              <div id="tab3" className="tab">
                <div className="tab-content">
                  <div className="news-feed grid-3-columns">
                    <div className="news-item">
                      <div className="news-thumb">
                        <Link href="/14-blog-post-centered">
                          <a>
                            <img
                              src="img/content/latest-news/news-thumb1.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="news-tags">
                            <span className="tag-item">
                              <a>Guides</a>
                            </span>
                          </div>
                          by
                          <Link href="/08-profile-page">
                            <a>Cryptoki</a>
                          </Link>
                          , March 26th, 2021
                        </div>

                        <div className="news-title h5">
                          <Link href="/14-blog-post-centered">
                            <a>
                              We explain with details everything you need to
                              know about crypto art and cryptocurrencies!
                            </a>
                          </Link>
                        </div>
                        <div className="news-excerpt">
                          A cryptocurrency is a digital asset designed to work
                          as a medium of exchange wherein individual coin
                          ownership records...
                        </div>
                        <div className="read-more-link">
                          <Link href="/14-blog-post-centered">
                            <a>
                              Read More
                              <svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="news-item">
                      <div className="news-thumb">
                        <Link href="/14-blog-post-centered">
                          <a>
                            <img
                              src="img/content/latest-news/news-thumb2.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="news-tags">
                            <span className="tag-item">
                              <a>Guides</a>
                            </span>
                            <span className="tag-item">
                              <a>News</a>
                            </span>
                          </div>
                          by
                          <Link href="/08-profile-page">
                            <a>Marina Valentine</a>
                          </Link>
                          , March 26th, 2021
                        </div>
                        <div className="news-title h5">
                          <Link href="/14-blog-post-centered">
                            <a>
                              Here’s a quick guide about how to make money
                              selling your artworks with Cryptoki!
                            </a>
                          </Link>
                        </div>
                        <div className="news-excerpt">
                          A cryptocurrency is a digital asset designed to work
                          as a medium of exchange wherein individual coin
                          ownership records...
                        </div>
                        <div className="read-more-link">
                          <Link href="/14-blog-post-centered">
                            <a>
                              Read More
                              <svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="news-item">
                      <div className="news-thumb">
                        <Link href="/14-blog-post-centered">
                          <a>
                            <img
                              src="img/content/latest-news/news-thumb3.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="news-tags">
                            <span className="tag-item">
                              <a>Currencies</a>
                            </span>
                          </div>
                          by
                          <Link href="/08-profile-page">
                            <a>Cryptoki</a>
                          </Link>
                          , March 26th, 2021
                        </div>
                        <div className="news-title h5">
                          <Link href="/14-blog-post-centered">
                            <a>
                              What’s ETH? An in-depth view of the currency used
                              in the market
                            </a>
                          </Link>
                        </div>
                        <div className="news-excerpt">
                          A cryptocurrency is a digital asset designed to work
                          as a medium of exchange wherein individual coin
                          ownership records...
                        </div>
                        <div className="read-more-link">
                          <Link href="/14-blog-post-centered">
                            <a>
                              Read More
                              <svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="news-item video-post-format">
                      <a
                        className="post-format-icon"
                        data-fslightbox=""
                        data-type="youtube"
                        href="https://www.youtube.com/embed/Ik05cmjalXw"
                      >
                        <svg className="crumina-icon">
                          <use xlinkHref="#play-icon" />
                        </svg>
                      </a>
                      <div className="news-thumb">
                        <Link href="/14-blog-post-centered">
                          <a>
                            <img
                              src="img/content/latest-news/news-thumb4.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <div className="news-tags">
                            <span className="tag-item">
                              <a>Creators</a>
                            </span>
                          </div>
                          by
                          <Link href="/08-profile-page">
                            <a>Cryptoki</a>
                          </Link>
                          , March 26th, 2021
                        </div>
                        <div className="news-title h5">
                          <Link href="/14-blog-post-centered">
                            <a>
                              We interviewed the artwork creator Dexter Stark
                              about how he started and what’s coming
                            </a>
                          </Link>
                        </div>
                        <div className="news-excerpt">
                          A cryptocurrency is a digital asset designed to work
                          as a medium of exchange wherein individual coin
                          ownership records...
                        </div>
                        <div className="read-more-link">
                          <Link href="/14-blog-post-centered">
                            <a>
                              Read More
                              <svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  BLOG POSTS */}
            </div>
          </div>
          {/*  TABS BLOCK */}
        </div>
        {/* SEARCH RESULTS */}
      </div>
    </Layouts>
  );
};
export default SearchResults;
