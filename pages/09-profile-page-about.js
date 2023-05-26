import Link from "next/link";
import React, { useEffect } from "react";
import ProfileHeader from "../src/components/Profile Page/ProfileHeader";
import ProfilePageTabs from "../src/components/Profile Page/ProfilePageTabs";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";

const ProfileAbout = () => {
  useEffect(() => {
    countdown();
  }, []);
  return (
    <Layouts>
      <div className="primary-content-area profile-page">
        {/*  PROFILE HEADER SECTION */}
        <ProfileHeader />
        {/*  PROFILE HEADER SECTION */}
        {/*  MOBILE PROFILE HEADER SECTION */}
        <div className="profile-header-mobile">
          <div className="cover-image">
            <img src="img/content/profile/profile-cover-1.png" alt="" />
          </div>
          <div className="about-author-section container">
            <div className="profile-header-user-profile">
              <div className="avatar box-64 bordered">
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="" />
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
                    <a>Dexter Stark</a>
                  </Link>
                </h5>
                <div className="author-meta">@DexterStark</div>
                <div className="download-file">
                  Ox465d53...d9c6
                  <svg className="crumina-icon">
                    <use xlinkHref="#copy-icon" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="follow-container">
              <div className="more-link-wrapper">
                <div className="more-link">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dots-icon" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="follow-box">
                <button className="btn btn-wide btn-dark">Follow!</button>
              </div>
            </div>
          </div>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#link-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="author-primary-info">
            <div className="activity-meta">
              <div className="followers-number">
                <div className="number">903</div>
                <div className="label">Followers</div>
              </div>
              <div className="following-number">
                <div className="number">56</div>
                <div className="label">Following</div>
              </div>
              <div className="projects-number">
                <div className="number">135</div>
                <div className="label">Created</div>
              </div>
            </div>
          </div>
        </div>
        {/*  MOBILE PROFILE HEADER SECTION */}
        {/*  TABS BLOCK */}
        <ProfilePageTabs />
        {/*  TABS BLOCK */}
      </div>
    </Layouts>
  );
};
export default ProfileAbout;
