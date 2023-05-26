import Link from "next/link";
import React from "react";
const ItemVersion04 = () => {
  return (
    <div className="section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Item <span className="gradient-text">Version 04</span>
        </div>
      </div>
      <div className="featured-box grid-4-columns">
        <div className="featured-item v4">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">22</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-1.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-author">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>The Molten Heart</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>@DexterStark</a>
                    </Link>{" "}
                  </span>
                </div>
              </div>
              <div className="avatar box-42">
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
              <div className="featured-bidding-section">
                <div className="featured-item-pricebox">
                  <div className="price">4.07 ETH</div>
                  <div className="price-caption">Current BID</div>
                </div>
                <div className="place-bid">
                  <button className="btn btn-small-wide btn-dark">Bid!</button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="countdown-box">
                <div className="label">Ending in</div>
                <div className="countdown">
                  <div
                    className="value js-countdown"
                    data-timer={104400}
                    data-labels="d: , h: , m: , s"
                  />
                </div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
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
        <div className="featured-item v4">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">68</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img src="img/content/items/featured-item-2.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-2.png" alt="" />
                  </a>
                </Link>{" "}
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </div>
              <div className="featured-item-author">
                <div className="title">
                  {" "}
                  <Link href="/06-product-page-v2">
                    <a>Social Blockz</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>@JackieJ</a>
                    </Link>{" "}
                  </span>
                </div>
              </div>
              <div className="featured-bidding-section">
                <div className="featured-item-pricebox">
                  <div className="price">1.96 ETH</div>
                  <div className="price-caption">Current BID</div>
                </div>
                <div className="place-bid">
                  <button className="btn btn-small-wide btn-dark">Bid!</button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="countdown-box">
                <div className="label">Ending in</div>
                <div className="countdown">
                  <div
                    className="value js-countdown"
                    data-timer={104400}
                    data-labels="d: , h: , m: , s"
                  />
                </div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
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
        <div className="featured-item v4">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">105</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/items/featured-item-3.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="avatar box-42">
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
              <div className="featured-item-author">
                <div className="title">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>Breathing Nature</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>@DexterStark</a>
                    </Link>{" "}
                  </span>
                </div>
              </div>
              <div className="featured-bidding-section">
                <div className="featured-item-pricebox">
                  <div className="price">2.31 ETH</div>
                  <div className="price-caption">Current BID</div>
                </div>
                <div className="place-bid">
                  <button className="btn btn-small-wide btn-dark">Bid!</button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="countdown-box">
                <div className="label">Ending in</div>
                <div className="countdown">
                  <div
                    className="value js-countdown"
                    data-timer={104400}
                    data-labels="d: , h: , m: , s"
                  />
                </div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
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
        <div className="featured-item v4">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">22</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-11.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="avatar box-42">
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
              <div className="featured-item-author">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">Canary’s Kitchen</Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>@daGreenGoo</a>
                    </Link>{" "}
                  </span>
                </div>
              </div>
              <div className="featured-bidding-section">
                <div className="featured-item-pricebox">
                  <div className="price">3.47 ETH</div>
                  <div className="price-caption">Reserve price</div>
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
                <div className="social-caption">Share</div>
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
      </div>
    </div>
  );
};

export default ItemVersion04;
