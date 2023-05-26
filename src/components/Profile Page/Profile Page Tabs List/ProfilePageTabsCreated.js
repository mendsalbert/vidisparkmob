import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/outline";

const ProfilePageTabsCreated = ({ Tab, filteredVideos }) => {
  return (
    <Tab.Pane eventKey={"tab1"} id="tab1" className="tab">
      <div className="featured-box grid-4-columns">
        {filteredVideos.map((data) => (
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
    </Tab.Pane>
  );
};

export default ProfilePageTabsCreated;
