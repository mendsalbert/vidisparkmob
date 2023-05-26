import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../lib/auth";
const Nav = () => {
  return (
    <nav className="border-bottom sticky-header">
      <div className="navigation-wrapper container flex-space-between align-items-center">
        <ul className="navigation-menu">
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
          <li className="menu-item">
            {" "}
            <Link href="/marketplace">
              <a className="menu-link">Marketpalce</a>
            </Link>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <Link href="/leaderboard">
              <a className="menu-link">Leaderboard</a>
            </Link>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <Link href="/metaverse">
              <a className="menu-link">Metaverse</a>
            </Link>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <Link href="/vidis-ai">
              <a className="menu-link">VidisAI</a>
            </Link>{" "}
            <span className="highlighted-item gradient-background">
              <SparklesIcon />
            </span>
          </li>

          {/* <li className="menu-item menu-item-has-children">
            <a className="menu-link" href="#">
              Product
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg>
              </span>
            </a>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link href="/05-product-page">
                  <a className="menu-link">Product v1</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/06-product-page-v2">
                  <a className="menu-link">Product v2</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/07-product-page-v3">
                  <a className="menu-link">Product v3</a>
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-megamenu menu-item-has-children">
            <a className="menu-link" href="#">
              All pages
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg>
              </span>
            </a>
            <span className="highlighted-item gradient-background">NEW</span>
            <div className="megamenu">
              <div className="megamenu-wrapper">
                <div className="megamenu-column">
                  <div className="megamenu-title">Main Pages</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item">
                        {" "}
                        <Link href="/">
                          <a className="menu-link">Home</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/02-explore">
                          <a className="menu-link">Explore</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/03-explore-v2">
                          <a className="menu-link">Explore v2</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/04-item-versions">
                          <a className="menu-link">Item versions</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/16-spotlight">
                          <a className="menu-link">Spotlight</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/05-product-page">
                          <a className="menu-link">Product page</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a className="menu-link">Product page v2</a>
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item">
                        {" "}
                        <Link href="/07-product-page-v3">
                          <a className="menu-link">Product page v3</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/12-blog-grid">
                          <a className="menu-link">Blog grid</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/13-blog-classic">
                          <a className="menu-link">Blog classic</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/14-blog-post-centered">
                          <a className="menu-link">Blog post centered</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/15-blog-post-sidebar">
                          <a className="menu-link">Blog post sidebar</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/19-faq">
                          <a className="menu-link">FAQ</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/20-contact">
                          <a className="menu-link">Contact</a>
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="megamenu-column">
                  <div className="megamenu-title">User pages</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item">
                        {" "}
                        <Link href="/08-profile-page">
                          <a className="menu-link">Profile page</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/09-profile-page-about">
                          <a className="menu-link">Profile page about</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/23-profile-info">
                          <a className="menu-link">Profile info</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/26-upload-artwork">
                          <a className="menu-link">Upload artwork</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/25-notifications">
                          <a className="menu-link">Notifications</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/27-shopping-cart">
                          <a className="menu-link">Shopping cart</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/28-checkout">
                          <a className="menu-link">Checkout</a>
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item">
                        {" "}
                        <Link href="/17-activity">
                          <a className="menu-link">Activity</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/10-creators">
                          <a className="menu-link">Creators</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/11-collectors">
                          <a className="menu-link">Collectors</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/24-become-a-creator">
                          <a className="menu-link">Become a creator</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/18-connect-a-wallet">
                          <a className="menu-link">Connect a wallet</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/21-login">
                          <a className="menu-link">Login</a>
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <Link href="/22-register">
                          <a className="menu-link">Register</a>
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-has-children">
            <a className="menu-link" href="#">
              Blog
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg>
              </span>
            </a>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link href="/12-blog-grid">
                  <a className="menu-link">Blog grid</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/13-blog-classic">
                  <a className="menu-link">Blog classic</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/14-blog-post-centered">
                  <a className="menu-link">Blog post centered</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/15-blog-post-sidebar">
                  <a className="menu-link">Blog post sidebar</a>
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item hidden-menu">
            <a className="menu-link" href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#dots-icon" />
              </svg>
            </a>
            <ul className="hidden-menu-dropdown submenu">
              <li className="menu-item">
                {" "}
                <Link href="/19-faq">
                  <a className="menu-link">Frequently Asked Questions</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/24-become-a-creator">
                  <a className="menu-link">Become a Creator</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/20-contact">
                  <a className="menu-link">Contact Us</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/21-login">
                  <a className="menu-link">Login</a>
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/22-register">
                  <a className="menu-link">Register</a>
                </Link>{" "}
              </li>
            </ul>
          </li> */}
        </ul>
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
      </div>
    </nav>
  );
};
export default Nav;
