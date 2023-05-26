import Link from "next/link";
import React from "react";
const ProfilePageTabsCollected = ({ Tab }) => {
  return (
    <Tab.Pane eventKey={"tab8"} id="tab8" className="tab">
      <div className="featured-box grid-4-columns">
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">98</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img src="img/content/items/featured-item-8.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/06-product-page-v2">
                    <a>Jellyfish Galaxy</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
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
                  </span>
                  @beardedwndr
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">0.57 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">24</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/items/featured-item-9.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>Bubblegum Dream</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
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
                  </span>
                  @daGreenGoo
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Rserve price</div>
                <div className="price">1.36 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">32</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-10.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>
                  </span>{" "}
                  <span
                    className="js-countdown"
                    data-timer={476400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Lost in Illustration</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-5.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @noirArtks
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">4.89 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">39</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img src="img/content/items/featured-item-11.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/06-product-page-v2">
                    <a>Canary’s Kitchen</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
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
                  </span>
                  @daGreenGoo
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">3.47 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">47</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/items/featured-item-12.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>Octo-Oceanic</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-5.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @noirArtks
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">0.25 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">14</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-13.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>
                  </span>{" "}
                  <span
                    className="js-countdown"
                    data-timer={86400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Vengeful Stare</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-5.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @noirArtks
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">4.07 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">41</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img src="img/content/items/featured-item-14.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/06-product-page-v2">
                    <a>Neon Stringers</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-10.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @nickstevens
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">1.96 ETH</div>
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">16</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img src="img/content/items/featured-item-15.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>
                  </span>{" "}
                  <span
                    className="js-countdown"
                    data-timer={76400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>Quartz Fantasy</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-10.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @nickstevens
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
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">38</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-16.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Crimson Planks</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
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
                  </span>
                  @daGreenGoo
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">1.36 ETH</div>
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
    </Tab.Pane>
  );
};

export default ProfilePageTabsCollected;
