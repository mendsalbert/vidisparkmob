import Link from "next/link";
import React from "react";
const ProfilePageTabsFollow = ({ Tab }) => {
  return (
    <Tab.Pane eventKey={"tab4"} id="tab4" className="tab">
      <div className="creators-box grid-4-columns">
        <div className="creator-item">
          <div className="creator-cover">
            <img src="img/content/creators/creator-cover-1.png" alt="" />
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <div className="avatar box-64">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar.png" alt="avatar" />
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
                    <a>Dexter Stark</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@DexterStark</span>
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
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my...
              </p>
            </div>
            <div className="projects-previews">
              <div className="preview-box">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-1.png"
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
                      src="img/content/previews/project-thumb-2.png"
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
                      src="img/content/previews/project-thumb-21.png"
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
            <img src="img/content/creators/creator-cover-2.png" alt="" />
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <div className="avatar box-64">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar-2.png" alt="avatar" />
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
                    <a>Jackie Jones</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@JackieJ</span>
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
                      src="img/content/previews/project-thumb-5.png"
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
                      src="img/content/previews/project-thumb-9.png"
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
                      src="img/content/previews/project-thumb-10.png"
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
              <div className="number">16</div>
            </div>
          </div>
        </div>
        <div className="creator-item">
          <div className="creator-cover">
            <img src="img/content/creators/creator-cover-3.png" alt="" />
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <div className="avatar box-64">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar-3.png" alt="avatar" />
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
                    <a>The Green Goo</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@daGreenGoo</span>
                </div>
              </div>
              <div className="follow-me">
                <button className="btn btn-small btn-fuchsia">Unfollow</button>
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
                    <use xlinkHref="#twitch-icon" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="about-creator">
              <p>
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my...
              </p>
            </div>
            <div className="projects-previews">
              <div className="preview-box">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-13.png"
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
                      src="img/content/previews/project-thumb-14.png"
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
                      src="img/content/previews/project-thumb-8.png"
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
              <div className="number">3</div>
            </div>
          </div>
        </div>
        <div className="creator-item">
          <div className="creator-cover">
            <img src="img/content/creators/creator-cover-4.png" alt="" />
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <div className="avatar box-64">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar-4.png" alt="avatar" />
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
                    <a>3dB0utik</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@3db0utikart</span>
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
                      src="img/content/previews/project-thumb-23.png"
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
                      src="img/content/previews/project-thumb-24.png"
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
                      src="img/content/previews/project-thumb-25.png"
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
              <div className="number">7</div>
            </div>
          </div>
        </div>
        <div className="creator-item">
          <div className="creator-cover">
            <img src="img/content/creators/creator-cover-5.png" alt="" />
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <div className="avatar box-64">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar-5.png" alt="avatar" />
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
                    <a>Noir Artworks</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@noirArtks</span>
                </div>
              </div>
              <div className="follow-me">
                <button className="btn btn-small btn-fuchsia">Unfollow</button>
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
              <li className="social-icon icon-border">
                {" "}
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitch-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon icon-border">
                {" "}
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#pinterest-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon icon-border">
                {" "}
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#reddit-icon" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="about-creator">
              <p>
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my...
              </p>
            </div>
            <div className="projects-previews">
              <div className="preview-box">
                {" "}
                <Link href="/07-product-page-v3">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-4.png"
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
                      src="img/content/previews/project-thumb-11.png"
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
                      src="img/content/previews/project-thumb-12.png"
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
              <div className="number">7</div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Pane>
  );
};

export default ProfilePageTabsFollow;
