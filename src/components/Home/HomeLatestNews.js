import Link from "next/link";
import React from "react";
const HomeLatestNews = () => {
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Latest <span className="gradient-text">News</span>
        </div>
        <div className="all-items-link">
          {" "}
          <Link href="/12-blog-grid">
            <a>View all Blog Posts</a>
          </Link>{" "}
        </div>
      </div>
      <div className="latest-news-box grid-3-columns">
        <div className="news-item">
          <div className="news-thumb">
            {" "}
            <Link href="/14-blog-post-centered">
              <a>
                <img
                  src="img/content/latest-news/news-thumb1.png"
                  width={460}
                  height={260}
                  alt=""
                  loading="lazy"
                />
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
              </Link>{" "}
              , March 26th, 2021
            </div>
            <div className="news-title h5">
              {" "}
              <Link href="/15-blog-post-sidebar">
                <a>
                  We explain with details everything you need to know about
                  crypto art and cryptocurrencies!
                </a>
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              A cryptocurrency is a digital asset designed to work as a medium
              of exchange wherein individual coin ownership records...
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
                <img
                  src="img/content/latest-news/news-thumb2.png"
                  height={260}
                  width={460}
                  alt=""
                  loading="lazy"
                />
              </a>
            </Link>{" "}
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
              by{" "}
              <Link href="/08-profile-page">
                <a>Marina Valentine</a>
              </Link>{" "}
              , March 13th, 2021
            </div>
            <div className="news-title h5">
              {" "}
              <Link href="/15-blog-post-sidebar">
                Here’s a quick guide about how to make money selling your
                artworks with Cryptoki!
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              A cryptocurrency is a digital asset designed to work as a medium
              of exchange wherein individual coin ownership records...
            </div>
            <div className="read-more-link">
              {" "}
              <Link href="/15-blog-post-sidebar">
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
            <Link href="/15-blog-post-sidebar">
              <img
                src="img/content/latest-news/news-thumb3.png"
                width={460}
                height={260}
                alt=""
                loading="lazy"
              />
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
              </Link>{" "}
              , March 4th, 2021
            </div>
            <div className="news-title h5">
              {" "}
              <Link href="/15-blog-post-sidebar">
                <a>
                  What’s ETH? An in-depth view of the currency used in the
                  market
                </a>
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              A cryptocurrency is a digital asset designed to work as a medium
              of exchange wherein individual coin ownership records...
            </div>
            <div className="read-more-link">
              {" "}
              <Link href="/15-blog-post-sidebar">
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
    </div>
  );
};

export default HomeLatestNews;
