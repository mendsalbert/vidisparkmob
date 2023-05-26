import React from "react";
const BlogClassicArchives = () => {
  return (
    <div className="widget-2 archives-widget">
      <div className="widget-title h5">Archives</div>
      <div className="widget-body">
        <ul className="archives-widget-list">
          <li className="archive-item">
            {" "}
            <a href="#">March 2021</a>
            <span className="colored">(5)</span>
          </li>
          <li className="archive-item">
            {" "}
            <a href="#">February 2021</a>
            <span className="colored">(3)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogClassicArchives;
