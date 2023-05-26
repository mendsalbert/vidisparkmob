import Link from "next/link";
import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

import { useVideo } from "../../../services/videos";
const ProductTabs = ({ filteredVideos }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [description, setDescription] = useState("");
  const { updateCount } = useVideo();

  const activeTabNav = (value) => (value === activeTab ? "active" : ""),
    activeContent = (value) => (value === activeTab ? "active" : "");
  return (
    <div className="tabs-block">
      {/*TAB TITLE*/}
      <ul className="tabs-list">
        {/* <li
          className={activeTabNav("tab1")}
          onClick={() => setActiveTab("tab1")}
        >
          <a>Comments</a>
        </li> */}
        <li
          className={activeTabNav("tab2")}
          onClick={() => setActiveTab("tab2")}
        >
          <a>Other Videos from creators</a>
        </li>
      </ul>
      {/*/TAB TITLE*/}
      {/*TAB BIDS*/}

      {/*/TAB BIDS*/}
      {/*TAB DETAILS*/}
      <div id="tab2" className={`tab ${activeContent("tab2")}`}>
        {filteredVideos?.map((data) => (
          <div className="featured-item tw-my-4">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="featured-item-image">
                  <Link href={`/video/${data?.videoId}`}>
                    <iframe
                      src={data?.videoData?.videoUrl}
                      border="0"
                      width="100%"
                      height="100%"
                      allowfullscreen
                      allow="autoplay; fullscreen"
                      autoplay="false"
                    />
                  </Link>
                </div>
                <div className="featured-item-info">
                  <div
                    className="title"
                    onClick={() => {
                      updateCount(data?.videoId);
                    }}
                  >
                    {" "}
                    <Link href={`/video/${data?.videoId}`}>
                      <a>{data?.videoData?.title}</a>
                    </Link>{" "}
                  </div>
                  <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-w-full">
                    <span className="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                      <span className="avatar box-26">
                        {" "}
                        <Link href={`/profile-page/${data?.userId}`}>
                          <a>
                            <picture>
                              <source
                                type="image/avif"
                                srcSet={data?.user?.avatarUrl}
                              />
                              <img
                                src={data?.user?.avatarUrl}
                                alt="avatar"
                                loading="lazy"
                                width={100}
                                height={100}
                              />
                            </picture>
                          </a>
                        </Link>
                      </span>
                      <span>@{data?.user?.username}</span>
                    </span>
                    <span className="tw-flex tw-flex-row tw-items-center tw-space-x-1 ">
                      <span>{data?.videoData?.views}</span>
                      <EyeIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
