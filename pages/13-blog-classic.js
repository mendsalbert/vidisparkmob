import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import BlogClassicArchives from "../src/components/Blog/Blog Classic/BlogClassicArchives";
import BlogClassicCalendar from "../src/components/Blog/Blog Classic/BlogClassicCalendar";
import BlogClassicCategory from "../src/components/Blog/Blog Classic/BlogClassicCategory";
import BlogClassicComments from "../src/components/Blog/Blog Classic/BlogClassicComments";
import BlogClassicFilter from "../src/components/Blog/Blog Classic/BlogClassicFilter";
import BlogClassicPostList from "../src/components/Blog/Blog Classic/BlogClassicPostList";
import BlogClassicRecentPosts from "../src/components/Blog/Blog Classic/BlogClassicRecentPosts";
import BlogClassicSearch from "../src/components/Blog/Blog Classic/BlogClassicSearch";
import Paggination from "../src/components/Paggination";
import Layouts from "../src/layouts/Layouts";

const BlogClassic = ({ blogs }) => {
  const [filterData, setFilterData] = useState(blogs);
  useEffect(() => {
    setFilterData(blogs);
  }, [blogs]);

  // Paggination
  const [active, setActive] = useState(0);
  let sort = 5;

  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Our <span className="gradient-text">Blog Classic</span>
          </h2>
        </div>
        {/* FILTERABLE BAR */}
        <BlogClassicFilter
          setFilterData={setFilterData}
          blogs={blogs}
          setActive={setActive}
        />
        {/* FILTERABLE BAR */}
        {/* BLOG AREA */}
        <div className="blog-classic-area grid-right-sidebar-large">
          {/* POSTS LIST */}
          <div className="blog-list">
            <BlogClassicPostList
              blogs={filterData}
              active={active}
              sort={sort}
            />
            {/* POSTS LIST */}
            {/*   PAGINATION */}
            <Paggination
              active={active}
              setActive={setActive}
              sort={sort}
              length={filterData && filterData.length}
              className={"flex-left"}
            />
            {/*   PAGINATION */}
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
        {/* BLOG AREA */}
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  blogs: state.blog.data,
});

export default connect(mapStateToProps, {})(BlogClassic);
