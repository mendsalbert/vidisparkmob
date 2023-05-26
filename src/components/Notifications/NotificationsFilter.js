import React from "react";
const NotificationsFilter = () => {
  return (
    <aside>
      <div className="aside-wrapper">
        <div className="widget widget-filter-panel notifications">
          <div className="widget-title h6">Filters</div>
          <form className="cryptoki-form" id="filter-form">
            <div className="form-group">
              <div className="small-title">Show</div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="sales"
                  id="sales"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="sales">Sales</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="likes"
                  id="likes"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="likes">Likes</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="comments"
                  id="comments"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="comments">Comments</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="reviews"
                  id="reviews"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="reviews">Reviews</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="checkbox"
                  name="follows"
                  id="follows"
                  className="cryptoki-checkbox"
                />
                <label htmlFor="follows">Follows</label>
              </div>
            </div>
            <div className="form-group">
              <div className="small-title">Order by</div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="type"
                  id="newest"
                  className="cryptoki-radio"
                />
                <label htmlFor="newest">Newest</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="type"
                  id="oldest"
                  className="cryptoki-radio"
                />
                <label htmlFor="oldest">Oldest</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="type"
                  id="buy-now"
                  className="cryptoki-radio"
                />
                <label htmlFor="buy-now">Buy Now </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default NotificationsFilter;
