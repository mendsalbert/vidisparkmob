import React from "react";
const BlogClassicSearch = () => {
  return (
    <div className="widget-2 widget-search">
      <div className="widget-title h5">Search</div>
      <div className="widget-body">
        <form method="get" className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your search here..."
          />
          <button className="search-button">
            <svg className="crumina-icon">
              <use xlinkHref="#search-icon" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogClassicSearch;
