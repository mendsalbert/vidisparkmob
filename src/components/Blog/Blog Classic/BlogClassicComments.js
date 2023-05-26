import Link from "next/link";
import React from "react";
const BlogClassicComments = () => {
  return (
    <div className="widget-2 latest-comments-widget">
      <div className="widget-title h5">Comments</div>
      <div className="widget-body">
        <ul className="latest-comments-widget-list">
          <li className="comment-item">
            {" "}
            <Link href="/08-profile-page">
              <a className="colored comment-author">Jackie Jones</a>
            </Link>{" "}
            on{" "}
            <a className="comment-link" href="15-blog-post-sidebar">
              We explain with details everything you need to know about crypto
              art and cryptocurrencies!
            </a>
          </li>
          <li className="comment-item">
            {" "}
            <Link href="/08-profile-page">
              <a className="colored comment-author">Dexter Stark</a>
            </Link>{" "}
            on{" "}
            <a className="comment-link" href="15-blog-post-sidebar">
              We explain with details everything you need to know about crypto
              art and cryptocurrencies!
            </a>
          </li>
          <li className="comment-item">
            {" "}
            <Link href="/08-profile-page">
              <a className="colored comment-author">Crimson Ray</a>
            </Link>{" "}
            on{" "}
            <a className="comment-link" href="15-blog-post-sidebar">
              We explain with details everything you need to know about crypto
              art and cryptocurrencies!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogClassicComments;
