import Link from "next/link";
import React from "react";
const HomeFeaturedCreators = () => {
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          <span className="gradient-text">Featured</span> Creators
        </div>
        <div className="all-items-link">
          {" "}
          <Link href="/10-creators">
            <a>Explore all Creators</a>
          </Link>{" "}
        </div>
      </div>
      <div className="featured-creators-box grid-2-columns">
        <div className="featured-creators-item">
          <img
            src="img/content/subtle-images/subtle-image-1.png"
            width={470}
            height={640}
            alt=""
            loading="lazy"
          />
          <div className="featured-creators-wrapper">
            <div className="featured-creators-info-wrapper">
              <div className="featured-creators-info">
                <div className="title h4">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>Dexter Stark</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img
                          src="img/avatar.png"
                          height={100}
                          width={100}
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
              <div className="follow-me gradient-border_white-bg">
                <button className="btn btn-normal">Follow!</button>
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
                I’m a graphic designer and illustrator from Mexico City. Since 2
                years ago I specialize on big mural pieces and street art that
                you can find in countries all around the world!
              </p>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="number title">12.3K</div>
                <div className="label">Followers</div>
              </div>
              <div className="stats-item">
                <div className="number title">7.2K</div>
                <div className="label">Following</div>
              </div>
              <div className="stats-item">
                <div className="number title">135</div>
                <div className="label">Created</div>
              </div>
              <div className="stats-item">
                <div className="number title">9</div>
                <div className="label">On Sale</div>
              </div>
            </div>
            <div className="projects-previews">
              <div className="preview-box">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-1.png"
                      width={68}
                      height={68}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="preview-box">
                {" "}
                <Link href="/06-product-page-v3">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-2.png"
                      height={66}
                      width={66}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="preview-box">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-3.png"
                      width={68}
                      height={68}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="preview-box">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-21.png"
                      height={50}
                      width={50}
                      alt=""
                      loading="lazy"
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
        </div>
        <div className="featured-creators-item">
          <img
            src="img/content/subtle-images/subtle-image-2.png"
            width={470}
            height={640}
            alt=""
            loading="lazy"
          />
          <div className="featured-creators-wrapper">
            <div className="featured-creators-info-wrapper">
              <div className="featured-creators-info">
                <div className="title h4">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>Noir Artworks</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img
                          src="img/avatar-5.png"
                          height={52}
                          width={52}
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @noirArtks
                </div>
              </div>
              <div className="follow-me gradient-border_white-bg">
                <button className="btn btn-normal">Follow!</button>
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
                motion graphics. Most of my works are inspired by nature and
                bio-mechanic themes, but I also create the occasional character.
              </p>
            </div>
            <div className="creator-stats">
              <div className="stats-item">
                <div className="number title">8.3K</div>
                <div className="label">Followers</div>
              </div>
              <div className="stats-item">
                <div className="number title">5.6K</div>
                <div className="label">Following</div>
              </div>
              <div className="stats-item">
                <div className="number title">54</div>
                <div className="label">Created</div>
              </div>
              <div className="stats-item">
                <div className="number title">5</div>
                <div className="label">On Sale</div>
              </div>
            </div>
            <div className="projects-previews">
              <div className="preview-box">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-4.png"
                      width={68}
                      height={68}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="preview-box">
                {" "}
                <Link href="/06-product-page-v3">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-11.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
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
                      width={68}
                      height={68}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="preview-box">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-22.png"
                      height={50}
                      width={50}
                      alt=""
                      loading="lazy"
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
        </div>
      </div>
      <div className="call-to-action-box">
        <div className="animated-img" />
        <div className="call-to-action-text">
          <div className="subtitle">COME AND JOIN THEM!</div>
          <div className="h2">Become a Creator!</div>
        </div>
        <div className="subscribe-form">
          {" "}
          <Link href="/24-become-a-creator">
            <a className="btn btn-normal btn-dark">Start Selling!</a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCreators;
