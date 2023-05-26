import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { artworksCarousel } from "../../../sliderProps";
const BlogGridList = () => {
  return (
    <div className="news-feed grid-3-columns">
      <div className="news-item">
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb1.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Guides</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                We explain with details everything you need to know about crypto
                art and cryptocurrencies!
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            A cryptocurrency is a digital asset designed to work as a medium of
            exchange wherein individual coin ownership records...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item">
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb2.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Guides</a>
              </span>{" "}
              <span className="tag-item">
                <a>News</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Marina Valentine</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Here’s a quick guide about how to make money selling your
                artworks with Cryptoki!
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            A cryptocurrency is a digital asset designed to work as a medium of
            exchange wherein individual coin ownership records...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item">
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb3.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Currencies</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                What’s ETH? An in-depth view of the currency used in the market
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            A cryptocurrency is a digital asset designed to work as a medium of
            exchange wherein individual coin ownership records...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
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
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb4.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Creators</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                We interviewed the artwork creator Dexter Stark about how he
                started and what’s coming
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            A cryptocurrency is a digital asset designed to work as a medium of
            exchange wherein individual coin ownership records...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item">
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb5.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Guides</a>
              </span>{" "}
              <span className="tag-item">
                <a>News</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Marina Valentine</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                A complete guide about how to collect artworks and what you can
                do with them
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            A cryptocurrency is a digital asset designed to work as a medium of
            exchange wherein individual coin ownership records...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item gallery-post-format">
        <div className="news-thumb gallery-carousel">
          <div className="post-format-icon gallery-navigation">
            <div className="swiper-button-prev">
              <svg className="crumina-icon">
                <use xlinkHref="#arrow-left2-icon" />
              </svg>
            </div>
            <div className="swiper-button-next">
              <svg className="crumina-icon">
                <use xlinkHref="#arrow-right2-icon" />
              </svg>
            </div>
          </div>
          <Swiper {...artworksCarousel}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <img src="img/content/latest-news/news-thumb6.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="img/content/latest-news/news-thumb5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="img/content/latest-news/news-thumb4.png" alt="" />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Artworks</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Gaming artworks are the new trend! Check out a curated
                collection of the best ones
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            Ethereum is a decentralized, open-source blockchain with smart
            contract functionality. Ether (ETH) is the native Ethereum is...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item">
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb7.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Guides</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Here are some of the best computer specs to work on your
                projects without worrying
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            Ethereum is a decentralized, open-source blockchain with smart
            contract functionality. Ether (ETH) is the native Ethereum is...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="news-item audio-post-format">
        <a
          className="post-format-icon"
          data-fslightbox="lightbox"
          href="https://w.soundcloud.com/"
        >
          <svg className="crumina-icon">
            <use xlinkHref="#music-icon" />
          </svg>
        </a>
        <div className="news-thumb">
          {" "}
          <Link href="/14-blog-post-centered">
            <a>
              <img src="img/content/latest-news/news-thumb8.png" alt="" />
            </a>
          </Link>{" "}
        </div>
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              {" "}
              <span className="tag-item">
                <a>News</a>
              </span>
              <span className="tag-item">
                <a>Creators</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Listen to our NFT artwork podcast! This week we’ll talk about
                new art and supporting creators
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            Ethereum is a decentralized, open-source blockchain with smart
            contract functionality. Ether (ETH) is the native Ethereum is...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
        <div className="hidden">
          <iframe
            id="audio-iframe"
            width={600}
            height={600}
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345801403&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
      <div className="news-item no-thumb">
        <div className="news-content">
          <div className="news-meta">
            <div className="news-tags">
              <span className="tag-item">
                <a>Currencies</a>
              </span>
            </div>
            by{" "}
            <Link href="/08-profile-page">
              <a>Cryptoki</a>
            </Link>
            , March 26th, 2021
          </div>
          <div className="news-title h5">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                This is how pop culture icons, art and famous memes became a
                worldwide currency
              </a>
            </Link>{" "}
          </div>
          <div className="news-excerpt">
            Ethereum was proposed in 2013 by programmer Vitalik Buterin. In
            2014, development was crowdfunded, and the network went live with an
            initial supply of 72 million coins on 30 July 2015. The platform
            allows developers to build and operate decentralized applications
            that users can interact with. Decentralized finance (DeFi)
            applications provide a broad array of financial services without the
            need for typical financial intermediaries, such as brokerages,
            exchanges, or banks, allowing cryptocurrency users to borrow against
            their holdings or lend them out for or lend them out for interest.
            Ethereum also allows for the creation and...
          </div>
          <div className="read-more-link">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                Read More
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridList;
