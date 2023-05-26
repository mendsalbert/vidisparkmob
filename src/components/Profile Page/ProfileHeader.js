import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useUser } from "../../services/user";
const ProfileHeader = ({ user, id }) => {
  const [followerState, setFollowerState] = useState("");
  const { users, followUser, userInfo } = useUser();

  console.log(userInfo[0]?.id);
  console.log(user?.followers);
  console.log(user?.following?.includes(userInfo[0]?.id));
  return (
    <div className="profile-header-section">
      <div className="cover-image">
        <img src={user?.avatarCover} alt="" className="tw-w-full tw-h-28" />
      </div>
      <div className="about-author-section container">
        <div className="profile-header-user-profile">
          <div className="avatar box-152">
            {" "}
            <Link href="/08-profile-page">
              <a>
                <img src={user?.avatarUrl} alt="" />
              </a>
            </Link>{" "}
            <span className="verified">
              <svg className="crumina-icon">
                <use xlinkHref="#check-icon" />
              </svg>
            </span>
          </div>
          <div className="follow-box">
            <div className="follow-box">
              {user?.following?.includes(userInfo[0]?.id) ? (
                <button type="button" className="btn btn-wide btn-dark ">
                  Following
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setFollowerState("nf");
                    followUser(id);
                  }}
                  className="btn btn-wide btn-dark "
                >
                  {followerState == "nf" ? "Following" : " Follow"}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="author-primary-info">
          <div className="activity-meta">
            <div className="followers-number"></div>
            <div className="following-number"></div>
          </div>
          <div className="profile-author-info">
            <h3 className="author-name gradient-text">
              {" "}
              <Link href="/">
                <a>{user?.fullname}</a>
              </Link>{" "}
            </h3>
            <div className="author-meta">@{user?.username}</div>
            <div className=" tw-flex tw-w-full tw-space-x-2 tw-items-center ">
              {user?.user_address?.slice(0, 6) +
                "..." +
                user?.user_address?.slice(-4)}

              <svg className="crumina-icon tw-ml-2">
                <use xlinkHref="#copy-icon" />
              </svg>
            </div>
            {/*  */}

            <div className="tw-flex tw-flex-row tw-space-x-2">
              <div>
                <div className="number ">
                  {user?.followers?.length < 1 ? 0 : user?.followers?.length}
                </div>
                <div className="label">Following</div>
              </div>
              <div>
                <div className="number">
                  {" "}
                  {user?.following?.length < 1 ? 0 : user?.following?.length}
                </div>
                <div className="label">Followers</div>
              </div>
            </div>
          </div>

          <div className="projects-meta">
            {/* <div className="projects-number">
              <div className="number">135</div>
              <div className="label">Content Created</div>
            </div>
            <div className="onsale-number">
              <div className="number">12</div>
              <div className="label"></div>
            </div> */}
          </div>
        </div>
        <div className="author-description">
          <p>{user?.bio}</p>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              {" "}
              <a
                href={`https://www.facebook.com/${user?.facebook}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a
                href={`https://www.twitter.com/${user?.twitter}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a
                href={`https://www.instagram.com/${user?.facebook}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a
                href={`https://www.twitch.com/${user?.twitch}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
