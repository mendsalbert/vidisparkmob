import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let body = document.querySelector("body");
    if (toggle) {
      body.classList.add("body-overlay");
    } else {
      body.classList.remove("body-overlay");
    }
  }, [toggle]);

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "show" : "");

  return (
    <Fragment>
      <div className={`mobile-nav-panel ${toggle ? "open" : ""}`} ref={domNode}>
        <div className="mobile-nav-header">
          {/*MOBILE LOGO*/}
          <div className="mobile-menu-logo logo">
            {" "}
            <Link href="/">
              <img src="/svg/logo.svg" alt="" />
            </Link>{" "}
          </div>
          {/*/MOBILE LOGO*/}
          {/*close button*/}
          <div className="close-icon" onClick={() => setToggle(false)}>
            <svg className="crumina-icon">
              <use xlinkHref="#cross-icon" />
            </svg>
          </div>
          {/*/close button*/}
        </div>
        {/*MOBILE MENU*/}
        <div className="mobile-menu-wrapper">
          <ul className="mobile-menu">
            <li className="menu-item">
              {" "}
              <Link href="/">
                <a className="menu-link">Home</a>
              </Link>{" "}
            </li>
            <li className="menu-item">
              {" "}
              <Link href="/explore">
                <a className="menu-link"> Explore</a>
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
                <a className="menu-link">Marketplace</a>
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
            </li>
          </ul>
        </div>
        {/*mobile menu bottom panel*/}
        <div className="mobile-nav-footer">
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
        {/*/mobbile menu bottom panel*/}
      </div>
      {/*/MOBILE NAVIGATION*/}
      {/*MOBILE NAVIGATION BUTTON*/}
      <div className="burger-icon" onClick={() => setToggle(true)}>
        <svg className="crumina-icon">
          <use xlinkHref="#menu-icon" />
        </svg>
      </div>
    </Fragment>
  );
};
export default MobileHeader;
