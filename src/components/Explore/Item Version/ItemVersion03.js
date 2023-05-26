import Link from "next/link";
import React from "react";
const ItemVersion03 = () => {
  return (
    <div className="section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Item <span className="gradient-text">Version 03</span>
        </div>
      </div>
      <div className="featured-box grid-4-columns">
        <div className="featured-item v3">
          <div className="featured-item-wrapper">
            <div className="featured-item-image-wrapper">
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-1.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
            </div>
            <div className="featured-countdown">
              {" "}
              <span className="clock">
                <svg className="crumina-icon">
                  <use xlinkHref="#clock-icon" />
                </svg>
              </span>
              <span
                className="js-countdown"
                data-timer={66400}
                data-labels="d : , h : , m : , s"
              />
            </div>
            <div className="item-meta-wrapper">
              <div className="title">
                {" "}
                <Link href="/05-product-page">
                  <a>The Molten Heart</a>
                </Link>{" "}
              </div>
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">22</span>
              </div>
            </div>
            <div className="item-meta-wrapper">
              <div className="item-meta">
                <div className="creator-box">
                  <div className="creator-info">
                    <div className="avatar box-26">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>
                          <img src="img/avatar.png" alt="" />
                        </a>
                      </Link>{" "}
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="creator-meta">
                      <div className="creator-label">CREATOR</div>
                      <div className="creator-name">
                        {" "}
                        <Link href="/08-profile-page">
                          <a>Dexter Stark</a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-pricebox">
                    <div className="price-caption">EDITION </div>
                    <div className="price">1 / 50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-meta">
              <div className="creator-box">
                <div className="creator-info">
                  <div className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-15.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </div>
                  <div className="creator-meta">
                    <div className="creator-label">Bid placed by </div>
                    <div className="creator-name">
                      {" "}
                      <Link href="/05-profile-page">
                        <a>Crimson Ray</a>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
                <div className="featured-item-pricebox">
                  <div className="price-caption">Current BID</div>
                  <div className="price">4.07 ETH</div>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="social-share-box">
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>{" "}
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
        <div className="featured-item v3">
          <div className="featured-item-wrapper">
            <div className="featured-item-image-wrapper">
              <div className="featured-item-image">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img src="img/content/items/featured-item-2.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
            </div>
            <div className="featured-countdown">
              {" "}
              <span className="clock">
                <svg className="crumina-icon">
                  <use xlinkHref="#clock-icon" />
                </svg>
              </span>
              <span
                className="js-countdown"
                data-timer={45700}
                data-labels="d : , h : , m : , s"
              />
            </div>
            <div className="item-meta-wrapper">
              <div className="title">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>Social Blockz</a>
                </Link>{" "}
              </div>
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">68</span>
              </div>
            </div>
            <div className="item-meta-wrapper">
              <div className="item-meta">
                <div className="creator-box">
                  <div className="creator-info">
                    <div className="avatar box-26">
                      <img src="img/avatar-2.png" alt="" />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="creator-meta">
                      <div className="creator-label">CREATOR</div>
                      <div className="creator-name">
                        {" "}
                        <Link href="/08-profile-page">
                          <a>Jackie Jones</a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-pricebox">
                    <div className="price-caption">EDITION </div>
                    <div className="price">7 / 100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-meta">
              <div className="creator-box">
                <div className="creator-info">
                  <div className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-8.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </div>
                  <div className="creator-meta">
                    <div className="creator-label">Bid placed by </div>
                    <div className="creator-name">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>Bearded Wonder</a>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
                <div className="featured-item-pricebox">
                  <div className="price-caption">Current BID</div>
                  <div className="price">1.96 ETH</div>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="social-share-box">
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>{" "}
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
        <div className="featured-item v3">
          <div className="featured-item-wrapper">
            <div className="featured-item-image-wrapper">
              <div className="featured-item-image">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/items/featured-item-3.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
            </div>
            <div className="featured-countdown">
              {" "}
              <span className="clock">
                <svg className="crumina-icon">
                  <use xlinkHref="#clock-icon" />
                </svg>
              </span>
              <span
                className="js-countdown"
                data-timer={91400}
                data-labels="d : , h : , m : , s"
              />
            </div>
            <div className="item-meta-wrapper">
              <div className="title">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>Breathing Nature</a>
                </Link>{" "}
              </div>
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">105</span>
              </div>
            </div>
            <div className="item-meta-wrapper">
              <div className="item-meta">
                <div className="creator-box">
                  <div className="creator-info">
                    <div className="avatar box-26">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>
                          <img src="img/avatar.png" alt="" />
                        </a>
                      </Link>{" "}
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="creator-meta">
                      <div className="creator-label">CREATOR</div>
                      <div className="creator-name">
                        {" "}
                        <Link href="/08-profile-page">
                          <a>Dexter Stark</a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-pricebox">
                    <div className="price-caption">EDITION </div>
                    <div className="price">-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-meta">
              <div className="creator-box">
                <div className="creator-info">
                  <div className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-13.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </div>
                  <div className="creator-meta">
                    <div className="creator-label">Bid placed by </div>
                    <div className="creator-name">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>JennArt</a>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
                <div className="featured-item-pricebox">
                  <div className="price-caption">Current BID</div>
                  <div className="price">2.31 ETH</div>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="social-share-box">
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>{" "}
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
        <div className="featured-item v3">
          <div className="featured-item-wrapper">
            <div className="featured-item-image-wrapper">
              <div className="featured-item-image">
                {" "}
                <Link href="/05-profile-page">
                  <a>
                    <img src="img/content/items/featured-item-11.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
            </div>
            <div className="item-meta-wrapper">
              <div className="title">
                {" "}
                <Link href="/05-profile-page">
                  <a>Canary’s Kitchen</a>
                </Link>{" "}
              </div>
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">22</span>
              </div>
            </div>
            <div className="item-meta-wrapper">
              <div className="item-meta">
                <div className="creator-box">
                  <div className="creator-info">
                    <div className="avatar box-26">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>
                          <img src="img/avatar-3.png" alt="" />
                        </a>
                      </Link>{" "}
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="creator-meta">
                      <div className="creator-label">CREATOR</div>
                      <div className="creator-name">
                        {" "}
                        <Link href="/08-profile-page">
                          <a>The Green Goo</a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-pricebox">
                    <div className="price-caption">EDITION </div>
                    <div className="price">2 / 10</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-meta">
              <div className="creator-box">
                <div className="featured-item-pricebox">
                  <div className="price-caption">Reserve price</div>
                  <div className="price">1.36 ETH</div>
                </div>
                <div className="place-bid">
                  <div className="gradient-border_white-bg">
                    <button className="btn btn-small">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="social-share-box">
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>{" "}
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
  );
};

export default ItemVersion03;
