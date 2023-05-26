import Link from "next/link";
import React from "react";
import { dblock } from "../../../utils";
const BlogClassicPostList = ({ blogs, active, sort }) => {
  return (
    <>
      {blogs &&
        blogs.map((blog, i) => (
          <div
            className={`news-item-classic ${!blog.img ? "no-thumb" : ""} ${
              blog.audio ? "audio-post-format" : ""
            } ${dblock(active, i, sort, "class")}`}
            key={i}
          >
            {!blog.audio && blog.img && (
              <div className="news-thumb">
                {" "}
                <Link href="/15-blog-post-sidebar">
                  <a>
                    <img src={blog.img} alt="" />
                  </a>
                </Link>{" "}
              </div>
            )}
            {blog.audio && (
              <div className="news-thumb">
                <a
                  className="post-format-icon"
                  data-fslightbox="lightbox"
                  href={blog.audio}
                >
                  <svg className="crumina-icon">
                    <use xlinkHref="#music-icon" />
                  </svg>
                </a>
                <Link href="/15-blog-post-sidebar">
                  <a>
                    <img src={blog.img} alt="" />
                  </a>
                </Link>{" "}
              </div>
            )}
            <div className="news-content">
              <div className="news-tags">
                {blog.tags &&
                  blog.tags.map((tag, t) => (
                    <a className="tag-item" href="#" key={t}>
                      {tag}
                    </a>
                  ))}
              </div>
              <div className="news-title h5">
                {" "}
                <Link href="/15-blog-post-sidebar">
                  <a>{blog.title}</a>
                </Link>{" "}
              </div>
              <div className="news-excerpt">{blog.sortDec}...</div>
              <div className="news-meta">
                by{" "}
                <Link href="/08-profile-page">
                  <a>{blog.creator}</a>
                </Link>{" "}
                , {blog.date}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogClassicPostList;
