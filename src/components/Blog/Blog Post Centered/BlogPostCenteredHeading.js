import Link from "next/link";
import React from "react";
const BlogPostCenteredHeading = () => {
  return (
    <div className="post-heading">
      <div className="news-tags">
        <span className="tag-item" style={{ marginRight: "7px" }}>
          <a href="#">Guides</a>
        </span>
        <span className="tag-item">
          <a href="#">News</a>
        </span>
      </div>

      <h1>
        Here’s a quick guide about how to make money selling your artworks with
        Cryptoki!
      </h1>
      <div className="news-meta">
        <div className="post-author">
          by{" "}
          <Link href="/08-profile-page">
            <a>Marina Valentine</a>
          </Link>
          , March 13th, 2021
        </div>
        <ul className="social-icons-list">
          <li className="social-icon">
            {" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#facebook-icon" />
              </svg>
            </a>
          </li>
          <li className="social-icon">
            {" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#twitter-icon" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPostCenteredHeading;
