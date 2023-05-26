import Link from "next/link";
import React from "react";
const BlogClassicRecentPosts = () => {
  return (
    <div className="widget-2 recent-posts-widget">
      <div className="widget-title h5">Latest News</div>
      <div className="widget-body">
        <div className="recent-posts-widget-item">
          <div className="recent-posts-widget-item-img">
            {" "}
            <Link href="/15-blog-post-sidebar">
              <a>
                <img src="img/content/latest-news/news-thumb9.png" alt="" />
              </a>
            </Link>{" "}
          </div>
          <div className="recent-posts-widget-item-info">
            <div className="recent-posts-widget-item-tags">
              <a className="tag-item" href="#">
                Guides
              </a>
            </div>
            <div className="recent-posts-widget-item-title">
              {" "}
              <Link href="/15-blog-post-sidebar">
                <a>
                  We explain with details everything you need to know about
                  crypto art and cryptocurrencies!
                </a>
              </Link>{" "}
            </div>
            <div className="recent-posts-widget-item-meta">
              by{" "}
              <Link href="/08-profile-page">
                <a>Cryptoki</a>
              </Link>{" "}
              , March 26th, 2021
            </div>
          </div>
        </div>
        <div className="recent-posts-widget-item">
          <div className="recent-posts-widget-item-img">
            {" "}
            <Link href="/15-blog-post-sidebar">
              <a>
                <img src="img/content/latest-news/news-thumb10.png" alt="" />
              </a>
            </Link>{" "}
          </div>
          <div className="recent-posts-widget-item-info">
            <div className="recent-posts-widget-item-tags">
              <a className="tag-item" href="#">
                Guides
              </a>
              <a className="tag-item" href="#">
                News
              </a>
            </div>
            <div className="recent-posts-widget-item-title">
              {" "}
              <Link href="/15-blog-post-sidebar">
                <a>
                  Here’s a quick guide about how to make money selling your
                  artworks with Cryptoki
                </a>
              </Link>{" "}
            </div>
            <div className="recent-posts-widget-item-meta">
              by{" "}
              <Link href="/08-profile-page">
                <a>Marina Valentine</a>
              </Link>{" "}
              , March 13th, 2021
            </div>
          </div>
        </div>
        <div className="recent-posts-widget-item">
          <div className="recent-posts-widget-item-img">
            {" "}
            <Link href="/15-blog-post-sidebar">
              <a>
                <img src="img/content/latest-news/news-thumb11.png" alt="" />
              </a>
            </Link>{" "}
          </div>
          <div className="recent-posts-widget-item-info">
            <div className="recent-posts-widget-item-tags">
              <a className="tag-item" href="#">
                Currencies
              </a>
            </div>
            <div className="recent-posts-widget-item-title">
              {" "}
              <Link href="/15-blog-post-sidebar">
                <a>
                  What’s ETH? An in-depth view of the currency used in the
                  market
                </a>
              </Link>{" "}
            </div>
            <div className="recent-posts-widget-item-meta">
              by{" "}
              <Link href="/08-profile-page">
                <a>Cryptoki</a>
              </Link>{" "}
              , March 4th, 2021
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogClassicRecentPosts;
