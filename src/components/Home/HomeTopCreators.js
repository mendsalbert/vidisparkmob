import Link from "next/link";
import React from "react";
import { useUser } from "../../services/user";
const HomeTopCreators = () => {
  const { users, userInfo, unfollowUser, followUser } = useUser();
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Top <span className="gradient-text">Creators</span>
        </div>
      </div>
      <div className="top-creators-box grid-2-columns">
        <div className="top-creator-item">
          <div className="creator-number">01</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href={`profile-page/${users[0]?.id}`}>
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={users[0]?.data?.avatarUrl}
                    />
                    <img
                      src={users[0]?.data?.avatarUrl}
                      alt="avatar"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </picture>
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href={`profile-page/${users[0]?.id}`}>
                  <a>{users[0]?.data?.fullname}</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@{users[0]?.data?.username}</div>
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">02</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href={`profile-page/${users[1]?.id}`}>
                <a>
                  <img
                    src={users[1]?.data?.avatarUrl}
                    width={52}
                    height={52}
                    alt="avatar"
                    loading="lazy"
                  />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href={`profile-page/${users[1]?.id}`}>
                  <a>{users[1]?.data?.fullname}</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@{users[1]?.data?.username}</div>
            </div>
          </div>
        </div>
        {/* <div className="top-creator-item">
              <div className="creator-number">03</div>
              <div className="creator-box">
                <div className="avatar box-64">
                  {" "}
                  <Link href={`profile-page/${users[2]?.id}`}>
                    <a>
                      <img
                        src={users[2]?.data?.avatarUrl}
                        height={52}
                        width={52}
                        alt="avatar"
                        loading="lazy"
                      />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </a>
                  </Link>{" "}
                </div>
                <div className="creator-meta">
                  <div className="title">
                    {" "}
                    <Link href={`profile-page/${users[2]?.id}`}>
                      <a>{users[2]?.data?.fullname}</a>
                    </Link>{" "}
                  </div>
                  <div className="creator-meta">@{users[2]?.data?.username}</div>
                </div>
              </div>
            </div>
            <div className="top-creator-item">
              <div className="creator-number">04</div>
              <div className="creator-box">
                <div className="avatar box-64">
                  {" "}
                  <Link href={`profile-page/${users[3]?.id}`}>
                    <a>
                      <img
                        src={users[3]?.data?.avatarUrl}
                        height={52}
                        width={52}
                        alt="avatar"
                        loading="lazy"
                      />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </a>
                  </Link>{" "}
                </div>
                <div className="creator-meta">
                  <div className="title">
                    {" "}
                    <Link href={`profile-page/${users[3]?.id}`}>
                      <a>{users[3]?.data?.fullname}</a>
                    </Link>{" "}
                  </div>
                  <div className="creator-meta">@{users[3]?.data?.username}</div>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default HomeTopCreators;
