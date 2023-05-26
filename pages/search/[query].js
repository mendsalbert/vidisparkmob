import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Nft from "../../src/components/Nft";
import Paggination from "../../src/components/Paggination";
import { getData } from "../../src/redux/action/data";
import { useRouter } from "next/router";

import {
  catagoryfilter,
  creatorFilter,
  endingFilter,
  orderFilter,
  priceFilter,
  typeFilter,
} from "../../src/redux/action/filter";
import { dblock } from "../../src/utils";
import { useVideo } from "../../src/services/videos";
import Layouts from "../../src/layouts/Layouts";

const Explorev2 = ({
  catagoryfilter,
  data,
  filter,
  getData,
  orderFilter,
  typeFilter,
  creatorFilter,
  endingFilter,
  priceFilter,
  keyValueForQurey,
  value,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 100 });
  const { videoResults } = useVideo();
  const router = useRouter();
  const { query } = router.query;

  console.log("query----", query);
  const changePrice = (e) => {
    setPrice({ ...price, [e.target.name]: Number(e.target.value) });
  };
  useEffect(() => {
    setFilteredData(videoResults);
    const filteredVideos = [];
    for (let video of videoResults) {
      const videoTitle = video?.videoData?.title;

      if (
        videoTitle &&
        videoTitle.toLowerCase().includes(query.toLowerCase())
      ) {
        filteredVideos.push(video);
      }
    }

    setFilteredData(filteredVideos);
  }, [videoResults]);

  useEffect(() => {
    priceFilter(price);
  }, [price]);

  const onSubmit = (e) => {
    e.preventDefault();

    const filteredVideos = [];
    for (let category of filter?.category) {
      for (let video of videoResults) {
        if (video?.videoData?.category === category) {
          filteredVideos.push(video);
        }
      }
    }

    setFilteredData(filteredVideos);
    // console.log(filteredVideos);
    // setFilteredData(videoResults && getProductByFilter(videoResults, filter));
  };

  const [active, setActive] = useState(0);
  let sort = 6;

  return (
    <Layouts>
      <div className="primary-content-area container grid-aside-main-4-col content-padding">
        <aside>
          <div className="aside-wrapper">
            <div className="widget widget-filter-panel">
              <div className="widget-title h6">Filters</div>
              <form
                className="cryptoki-form"
                id="filter-form"
                onSubmit={(e) => onSubmit(e)}
              >
                <div className="form-group">
                  <div className="small-title">Categories</div>
                  <div className="is-two-col-element">
                    <div className="form-list-wrapper">
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="entertainment"
                          id="entertainment"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("entertainment")}
                        />
                        <label htmlFor="entertainment">🎭 Entertainment</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="music"
                          id="music"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("music")}
                        />
                        <label htmlFor="music"> 🎵 Music</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="sports"
                          id="sports"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("sports")}
                        />
                        <label htmlFor="sports">⚽ Sports</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="gaming"
                          id="gaming"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("gaming")}
                        />
                        <label htmlFor="gaming">🎮 Gaming</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="education"
                          id="education"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("education")}
                        />
                        <label htmlFor="education">📚 Education</label>
                      </div>

                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="health-and-fitness"
                          id="health-and-fitness"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("health-and-fitness")}
                        />
                        <label htmlFor="health-and-fitness">
                          💪 Health and Fitness
                        </label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="fashion-and-beauty"
                          id="fashion-and-beauty"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("fashion-and-beauty")}
                        />
                        <label htmlFor="fashion-and-beauty">
                          👗 Fashion and Beauty
                        </label>
                      </div>
                    </div>
                    <div className="form-list-wrapper">
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="News"
                          id="News"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("News")}
                        />
                        <label htmlFor="News">📰 News</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="Comedy"
                          id="Comedy"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("Comedy")}
                        />
                        <label htmlFor="Comedy">😄 Comedy</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="lifestyle"
                          id="lifestyle"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("lifestyle")}
                        />
                        <label htmlFor="lifestyle">🌴 Lifestyle</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="travel"
                          id="travel"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("travel")}
                        />
                        <label htmlFor="travel">✈️ Travel</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="science-and-technology"
                          id="science-and-technology"
                          className="cryptoki-checkbox"
                          onClick={(e) =>
                            catagoryfilter("science-and-technology")
                          }
                        />
                        <label htmlFor="science-and-technology">
                          🔬 Science
                        </label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="food-and-cooking"
                          id="food-and-cooking"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("food-and-cooking")}
                        />
                        <label htmlFor="food-and-cooking">🍔 Food</label>
                      </div>{" "}
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="business-and-finance"
                          id="business-and-finance"
                          className="cryptoki-checkbox"
                          onClick={(e) =>
                            catagoryfilter("business-and-finance")
                          }
                        />
                        <label htmlFor="business-and-finance">
                          💼 Business
                        </label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="art-and-design"
                          id="art-and-design"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("art-and-design")}
                        />
                        <label htmlFor="art-and-design">
                          🎨 Art and Design
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Order By</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      onClick={() => orderFilter("newest")}
                      id="newest"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="newest">Newest</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      onClick={() => orderFilter("oldest")}
                      id="oldest"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="oldest">Oldest</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      id="trending"
                      className="cryptoki-radio"
                      onClick={() => orderFilter("trending")}
                    />
                    <label htmlFor="trending">Trending</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="small-title">Creators</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="creator-type"
                      id="all-creators"
                      className="cryptoki-radio"
                      onClick={() => creatorFilter("")}
                    />
                    <label htmlFor="all-creators">All Creators</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="creator-type"
                      id="verified-only"
                      className="cryptoki-radio"
                      onClick={() => creatorFilter(true)}
                    />
                    <label htmlFor="verified-only">Verified Only</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Ending</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="ending"
                      id="anytime"
                      className="cryptoki-radio"
                      onClick={() => endingFilter("")}
                    />
                    <label htmlFor="anytime">Anytime</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="ending"
                      id="soon"
                      className="cryptoki-radio"
                      onClick={() => endingFilter(true)}
                    />
                    <label htmlFor="soon">Soon</label>
                  </div>
                </div>

                <input type="submit" defaultValue="Apply Filters" />
              </form>
            </div>
          </div>
        </aside>
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Explore</span> Artworks
            </h2>
          </div>

          {/* FEATURED ITEMS */}
          <div className="featured-box grid-4-columns">
            {filteredData && filteredData?.length > 0 ? (
              filteredData?.map((data, i) => (
                <div key={data.id} className={`${dblock(active, i, sort)}`}>
                  <Nft data={data} />
                </div>
              ))
            ) : (
              <h2 className="text-center">
                No<span className="gradient-text"> Videos </span> Found
              </h2>
            )}
          </div>

          <Paggination
            active={active}
            setActive={setActive}
            sort={sort}
            length={videoResults && videoResults.length}
          />
          {/* PAGINATION */}
        </div>
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  data: state.data.nfts,
  filter: state.filter,
});
export default connect(mapStateToProps, {
  catagoryfilter,
  getData,
  orderFilter,
  typeFilter,
  creatorFilter,
  endingFilter,
  priceFilter,
})(Explorev2);
