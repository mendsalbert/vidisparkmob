import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProfileHeader from "../../src/components/Profile Page/ProfileHeader";
import ProfilePageTabs from "../../src/components/Profile Page/ProfilePageTabs";
import Layouts from "../../src/layouts/Layouts";
import { countdown } from "../../src/utils";
import { useRouter } from "next/router";
import { useUser } from "../../src/services/user";

const Profile = () => {
  const [followerState, setFollowerState] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const { users, followUser } = useUser();
  const user = users?.filter((item) => item?.id == id);
  useEffect(() => {
    countdown();
  }, []);

  return (
    <Layouts>
      <div className="primary-content-area profile-page">
        {/*  PROFILE HEADER SECTION */}
        <ProfileHeader user={user[0]?.data} id={user[0]?.id} />
        {/*  PROFILE HEADER SECTION */}
        {/*  MOBILE PROFILE HEADER SECTION */}
        <div className="profile-header-mobile">
          <div className="cover-image">
            <img src={user[0]?.data?.avatarCover} alt="" />
          </div>
          <div className="about-author-section container">
            <div className="profile-header-user-profile">
              <div className="avatar box-64 bordered">
                <Link href="">
                  <a>
                    <img src={user[0]?.data?.avatarUrl} alt="" />
                  </a>
                </Link>
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </div>
              <div className="profile-author-info">
                <h5 className="author-name gradient-text">
                  <Link href="/08-profile-page">
                    <a>{user[0]?.data?.fullname}</a>
                  </Link>
                </h5>
                <div className="author-meta">@{user[0]?.data?.fullname}</div>
                <div className="download-file">
                  {user[0]?.data?.user_address?.slice(0, 6) +
                    "..." +
                    user[0]?.data?.user_address?.slice(-4)}
                  <svg className="crumina-icon">
                    <use xlinkHref="#copy-icon" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="follow-container">
              <div className="more-link-wrapper"></div>
              <div className="follow-box">
                <button
                  type="button"
                  onClick={() => {
                    setFollowerState("nf");
                    followUser(singleVid?.videoData?.uploaderId);
                  }}
                  className="btn btn-wide btn-dark tw-bg-blue-500"
                >
                  {followerState == "nf" ? "Following" : " Follow"}
                </button>
              </div>
            </div>
          </div>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              <a
                href={`https://www.facebook.com/${user[0]?.data?.facebook}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a
                href={`https://www.twitter.com/${user[0]?.data?.twitter}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a
                href={`https://www.instagram.com/${user[0]?.data?.facebook}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a
                href={`https://www.twitch.com/${user[0]?.data?.twitch}`}
                target="_blank"
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="author-primary-info">
            <div className="activity-meta">
              <div>
                <div className="number ">
                  {user[0]?.data?.followers?.length < 1
                    ? 0
                    : user[0]?.data?.followers?.length}
                </div>
                <div className="label">Following</div>
              </div>
              <div>
                <div className="number">
                  {" "}
                  {user[0]?.data?.following?.length < 1
                    ? 0
                    : user[0]?.data?.following?.length}
                </div>
                <div className="label">Followers</div>
              </div>
            </div>
          </div>
        </div>
        {/*  MOBILE PROFILE HEADER SECTION */}
        {/*  TABS BLOCK */}
        <ProfilePageTabs id={id} />
        {/*  TABS BLOCK */}
      </div>
    </Layouts>
  );
};
export default Profile;
