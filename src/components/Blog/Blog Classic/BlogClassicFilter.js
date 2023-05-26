import React, { useState } from "react";
import { getProductByFilter } from "../../../filter";
import NiceSelect from "../../NiceSelect";
const BlogClassicFilter = ({ blogs, setFilterData, setActive }) => {
  const [filter, setFilter] = useState({});
  const onChnage = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFilterData(getProductByFilter(blogs, filter));
    setActive(0);
  };
  return (
    <div className="filterable-bar">
      <form id="artworks-filter-form" onSubmit={(e) => onSubmit(e)}>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { value: "newest", name: "Newest to Oldest" },
              { value: "oldest", name: "Oldest to Newest" },
              { value: "popular", name: "Most Popular" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="order"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { value: "", name: "All Artworks" },
              { value: "buy", name: "Buy Now" },
              { value: "auctions", name: "Auctions Only" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="type"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { value: "", name: "All Artworks" },
              { value: true, name: "Verified Creators" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="verified"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { value: "", name: "Anytime" },
              { value: true, name: "Ending Soon" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="ending"
          />
        </div>
        <div className="filter-item">
          <select className="select-nice">
            <option value="lowest-to-highest" selected="">
              Lowest to Highest $
            </option>
            <option value="highest-to-lowest">Highest to Lowest $</option>
          </select>
        </div>
        <div className="filter-button">
          <button className="btn btn-normal btn-dark">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default BlogClassicFilter;
