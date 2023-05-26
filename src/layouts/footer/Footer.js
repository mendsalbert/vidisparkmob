import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer-content flex-space-between">
          <div className="footer-column footer-column-large">
            <div className="footer-widget">
              <div className="logo">
                {" "}
                <Link href="/">
                  <a className="logo-link">
                    <div className="logo-img">
                      <img src="/svg/logo.svg" alt="logo" />
                    </div>
                    <div className="logo-text">Cryptoki</div>
                  </a>
                </Link>{" "}
              </div>
              <div className="footer-text">
                <p>
                  We provide a vibrant platform where artists can showcase and
                  sell their creations, whether it be visual art, music, videos,
                  or other mediums, directly to their passionate supporters
                </p>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitch-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#discord-icon" />
                    </svg>
                  </a>
                </li>
              </ul>
              {/* <div className="subscribe-widget">
                <form
                  className="cryptoki-subscribe-form subscribe-form"
                  action="forms/submit.php"
                >
                  <div className="subscribe-form-content">
                    <input
                      className="subscribe-input"
                      type="email"
                      name="email"
                      id="subscribe-email"
                      placeholder="Subscribe to our newsletter"
                    />
                    <button className="subscribe-submit" type="submit">
                      <svg className="crumina-icon">
                        <use xlinkHref="#arrow-right-icon" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Vidispark </div>
              <div className="is-two-col-element">
                <ul className="footer-menu">
                  <li className="menu-item">
                    {" "}
                    <Link href="/">
                      <a className="menu-link">Home</a>
                    </Link>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <Link href="/explore">
                      <a className="menu-link">Explore</a>
                    </Link>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <Link href="/creators">
                      <a className="menu-link">Creators</a>
                    </Link>{" "}
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li className="menu-item">
                    {" "}
                    <Link href="/upload-artwork">
                      <a className="menu-link">Profile Page</a>
                    </Link>{" "}
                  </li>

                  <li className="menu-item">
                    {" "}
                    <Link href="/upload-artwork">
                      <a className="menu-link">Upload Art</a>
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Explore</div>
              <ul className="footer-menu">
                <li className="menu-item">
                  {" "}
                  <Link href="explore">
                    <a className="menu-link">🎭 Entertainment</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/explore">
                    <a className="menu-link">🎵 Music</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/explore">
                    <a className="menu-link">⚽ Sports</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/explore">
                    <a className="menu-link">🎮 Gaming</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/explore">
                    <a className="menu-link">📚 Education</a>
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Helpful Links</div>
              <ul className="footer-menu">
                <li className="menu-item">
                  {" "}
                  <Link href="/white-paper">
                    <a className="menu-link">White Paper</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/upload-artwork">
                    <a className="menu-link">Become a Creator</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="/faq">
                    <a className="menu-link">FAQs</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  <Link href={"/about"}>
                    <a className="menu-link" href="#">
                      About Us
                    </a>
                  </Link>
                </li>
                {/* <li className="menu-item">
                  {" "}
                  <Link href="/20-contact">
                    <a className="menu-link">Contact</a>
                  </Link>{" "}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex-space-between">
          <span className="copyright-text">
            Vidispark 2023 - All Rights Reserved
          </span>
          <ul className="sub-footer-menu">
            <li className="menu-item">
              <a className="menu-link" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
