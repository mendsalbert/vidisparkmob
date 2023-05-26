import React from "react";
import BlogPostCenteredComments from "../src/components/Blog/Blog Post Centered/BlogPostCenteredComments";
import BlogPostCenteredHeading from "../src/components/Blog/Blog Post Centered/BlogPostCenteredHeading";
import BlogPostCenteredLeaveComment from "../src/components/Blog/Blog Post Centered/BlogPostCenteredLeaveComment";
import BlogPostCenteredPostContent from "../src/components/Blog/Blog Post Centered/BlogPostCenteredPostContent";
import Layouts from "../src/layouts/Layouts";

const BlogPost = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="single-post medium-section">
          {/*  Blog Post Centered Heading */}
          <BlogPostCenteredHeading />
          {/*  Blog Post Centered Heading */}
          <div className="post-featured-image">
            <img src="img/content/single-post/featured-image-1.png" alt="" />
          </div>
          {/*  Blog Post Centered Post Content */}
          <BlogPostCenteredPostContent />
          {/*  Blog Post Centered Post Content */}
          <div className="comments-section">
            {/*  Blog Post Centered Comments */}
            <BlogPostCenteredComments />
            {/*  Blog Post Centered Comments */}
            {/*  Blog Post Centered Leave Comment */}
            <BlogPostCenteredLeaveComment />
            {/*  Blog Post Centered Leave Comment */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default BlogPost;
