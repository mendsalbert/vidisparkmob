import React from "react";
import BlogClassicArchives from "../src/components/Blog/Blog Classic/BlogClassicArchives";
import BlogClassicCalendar from "../src/components/Blog/Blog Classic/BlogClassicCalendar";
import BlogClassicCategory from "../src/components/Blog/Blog Classic/BlogClassicCategory";
import BlogClassicComments from "../src/components/Blog/Blog Classic/BlogClassicComments";
import BlogClassicRecentPosts from "../src/components/Blog/Blog Classic/BlogClassicRecentPosts";
import BlogClassicSearch from "../src/components/Blog/Blog Classic/BlogClassicSearch";
import BlogPostCenteredComments from "../src/components/Blog/Blog Post Centered/BlogPostCenteredComments";
import BlogPostCenteredHeading from "../src/components/Blog/Blog Post Centered/BlogPostCenteredHeading";
import BlogPostCenteredLeaveComment from "../src/components/Blog/Blog Post Centered/BlogPostCenteredLeaveComment";
import BlogPostCenteredPostContent from "../src/components/Blog/Blog Post Centered/BlogPostCenteredPostContent";
import Layouts from "../src/layouts/Layouts";

const BlogSidebar = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        {/* blog post area */}
        <div className="single-post single-post-sidebar">
          <div className="single-post-body">
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
          {/*  ASIDE */}
          <aside>
            <div className="widgets-list">
              {/*  RECENT POSTS WIDGET */}
              <BlogClassicRecentPosts />
              {/*  RECENT POSTS WIDGET */}
              {/*  SEARCH WIDGET */}
              <BlogClassicSearch />
              {/*  SEARCH WIDGET */}
              {/*  CATEGORIES WIDGET */}
              <BlogClassicCategory />
              {/*  CATEGORIES WIDGET */}
              {/*  ARCHIVES WIDGET */}
              <BlogClassicArchives />
              {/*  ARCHIVES WIDGET */}
              {/*  COMMENTS WIDGET */}
              <BlogClassicComments />
              {/*  COMMENTS WIDGET */}
              {/*  CALENDAR WIDGET */}
              <BlogClassicCalendar />
              {/*  CALENDAR WIDGET */}
            </div>
          </aside>
          {/*  ASIDE */}
        </div>
      </div>
    </Layouts>
  );
};
export default BlogSidebar;
