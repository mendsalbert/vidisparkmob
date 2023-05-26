import React, { useEffect, useState } from "react";
import BlogGridList from "../src/components/Blog/Blog Grid/BlogGridList";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const BlogGrid = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".news-item", sort, active);
    let list = document.querySelectorAll(".news-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Our<span className="gradient-text"> Blog</span>
          </h2>
        </div>
        {/*  POSTS GRID */}
        <BlogGridList />
        {/*  POSTS GRID */}
        {/*  PAGINATION */}
        <PagginationFuntion
          setActive={setActive}
          active={active}
          state={state}
        />
        {/*  PAGINATION */}
      </div>
    </Layouts>
  );
};
export default BlogGrid;
