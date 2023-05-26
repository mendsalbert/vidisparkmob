import Link from "next/link";
import React from "react";
const ProfilePageTabsFollowing = ({ Tab }) => {
  return (
    <Tab.Pane eventKey={"tab5"} id="tab5" className="tab">
      <div className="creators-box grid-4-columns">
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-6.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-6.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>BeemBoxArt</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@beemb</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#link-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  This is an example for the bio text space of the creator’s
                  profile boxes. Only an extract will...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-26.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-27.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">2</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-7.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-7.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Marina Valentine</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@mvalentine</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#youtube-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitch-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-28.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-29.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-30.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">135</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-8.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-8.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Bearded Wonder</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@beardedwndr</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#link-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#patreon-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-18.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-19.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-20.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">15</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-9.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-9.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Pixel Stitches</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@pixstitch</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#link-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitch-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  This is an example for the bio text space of the creator’s
                  profile boxes. Only an extract will...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-31.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-32.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-33.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">135</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-10.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-10.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Nicholas Stevens</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@nickstevens</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <div className="social-swiper-nav">
                <div className="swiper-button-next">
                  <svg className="crumina-icon next-button">
                    <use xlinkHref="#arrow-right2-icon" />
                  </svg>
                </div>
                <div className="swiper-button-prev">
                  <svg className="crumina-icon prev-button">
                    <use xlinkHref="#arrow-left2-icon" />
                  </svg>
                </div>
              </div>
              <div className="social-icons-carousel">
                <ul className="social-icons-list swiper-wrapper">
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#link-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#facebook-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitter-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#pinterest-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#instagram-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitch-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#youtube-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-icon icon-border swiper-slide">
                    {" "}
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#dribbble-icon" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-creator">
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-15.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-16.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-17.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">4</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-11.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-11.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Rosie Sakura</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@rosiesaku</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  This is an example for the bio text space of the creator’s
                  profile boxes. Only an extract will...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-34.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">1</div>
              </div>
            </div>
          </div>
          <div className="creator-item">
            <div className="creator-cover">
              <img src="img/content/creators/creator-cover-12.png" alt="" />
            </div>
            <div className="creator-wrapper">
              <div className="creator-info-wrapper">
                <div className="creator-info">
                  <div className="avatar box-64">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-12.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="title">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Angel Mannequin</a>
                    </Link>{" "}
                  </div>
                  <div className="item-meta">
                    <span className="gradient-text">@angelmnnq</span>
                  </div>
                </div>
                <div className="follow-me">
                  <button className="btn btn-small btn-dark">Follow!</button>
                </div>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#link-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dribbble-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="about-creator">
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my...
                </p>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-35.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box">
                  {" "}
                  <Link href="/07-product-page-v3">
                    <a>
                      <img
                        src="img/content/previews/project-thumb-36.png"
                        alt=""
                      />
                    </a>
                  </Link>{" "}
                </div>
                <div className="preview-box more-projects">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#dots-icon" />
                      </svg>
                    </a>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
              </div>
              <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
              </div>
              <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">2</div>
              </div>
            </div>
          </div>
        </div>
    </Tab.Pane>
  );
};

export default ProfilePageTabsFollowing;
