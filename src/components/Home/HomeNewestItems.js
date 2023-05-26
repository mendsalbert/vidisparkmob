import Link from "next/link";
import React from "react";
import Nft from "../Nft";
import { useVideo } from "../../services/videos";

const HomeNewestItems = () => {
  const { videoResults } = useVideo();

  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          <span className="gradient-text">Newest</span> Videos
        </div>
        <div className="all-items-link">
          {" "}
          <Link href="/explore">
            <a>Explore all Collections</a>
          </Link>{" "}
        </div>
      </div>
      <div className="featured-box">
        <div className="featured-box-wrapper grid-4-columns">
          {videoResults && videoResults.map((d, i) => <Nft data={d} key={i} />)}
        </div>
        <div className="more-section flex-center">
          {" "}
          <Link href="/explore">
            <a className="btn btn-normal btn-dark">View All Collection</a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeNewestItems;
