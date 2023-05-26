import Link from "next/link";
import CountDown from "./CountDown";
import { EyeIcon } from "@heroicons/react/24/outline";
import ReactPlayer from "react-player";
import { useVideo } from "../services/videos";

const Nft = ({ data }) => {
  const { updateCount } = useVideo();
  return (
    <div className="featured-item">
      <div className="featured-item-wrapper">
        <div className="featured-item-content">
          <div className="featured-item-image">
            <Link href={`/video/${data?.videoId}`}>
              {data?.videoData?.videoUrl ? (
                // <ReactPlayer
                //   url={data?.videoData?.videoUrl}
                //   controls
                //   width="100%"
                //   height="100%"
                //   playing={true}
                // />
                <Link href={`/video/${data?.videoId}`}>
                  <img src={data?.videoData?.thumbnailUrl} />
                </Link>
              ) : (
                <p>Loading video...</p>
              )}
              {/* <iframe
                src={data?.videoData?.videoUrl}
                border="0"
                width="100%"
                height="100%"
                allowfullscreen
                allow="autoplay; fullscreen"
                autoplay="false"
              /> */}
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
  );
};
export default Nft;
