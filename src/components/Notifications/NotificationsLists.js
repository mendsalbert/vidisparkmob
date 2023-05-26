import Link from "next/link";
import React from "react";
const NotificationsLists = () => {
  return (
    <>
      <div className="notifications-list">
        <div className="command-line">
          <button className="command select-all">Select All</button>
          <button className="command">Mark as Read</button>
          <button className="command delete">Delete</button>
        </div>
        <div className="notifications-list-wrapper">
          <div className="notification">
            <div className="notification-body">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img
                      src="img/content/notifications/notif-thumb-4.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
                <span className="bid-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#annotation-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@JackieJ</a>
                  </Link>{" "}
                  just commented on{" "}
                  <Link href="/06-product-page-v2">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">2 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={1}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={1} />
              </form>
            </div>
          </div>
          <div className="notification">
            <div className="notification-body">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img
                      src="img/content/notifications/notif-thumb-4.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
                <span className="purchase-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#wallet-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just purchased{" "}
                  <Link href="/06-product-page-v2">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">10 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={2}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={2} />
              </form>
            </div>
          </div>
          <div className="notification">
            <div className="notification-body">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img
                      src="img/content/notifications/notif-thumb-5.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
                <span className="like-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@NoirArtks</a>
                  </Link>{" "}
                  just liked{" "}
                  <Link href="/06-product-page-v2">
                    <a className="bold">Twitter Gaming Headers Pack 04</a>
                  </Link>{" "}
                </div>
                <div className="publish-date">37 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={3}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={3} />
              </form>
            </div>
          </div>
          <div className="notification">
            <div className="notification-body">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img
                      src="img/content/notifications/notif-thumb-4.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
                <span className="review-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just reviewed{" "}
                  <Link href="/06-product-page-v2">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">49 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={4}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={4} />
              </form>
            </div>
          </div>
          <div className="notification">
            <div className="notification-body">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <a>
                    <img
                      src="img/content/notifications/notif-thumb-4.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
                <span className="comment-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#annotation-dots-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@beardedwndr</a>
                  </Link>{" "}
                  just commented{" "}
                  <Link href="/06-product-page-v2">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">51 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={5}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={5} />
              </form>
            </div>
          </div>
          <div className="notification">
            <div className="notification-body">
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
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@JackieJ</a>
                  </Link>{" "}
                  just started following you
                </div>
                <div className="publish-date">55 minutes ago</div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
              <form className="cryptoki-form checkbox">
                <input
                  type="checkbox"
                  name="notif-select"
                  id={6}
                  className="cryptoki-checkbox"
                />
                <label htmlFor={6} />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* / Notifications Loader */}
      <div className="load-more_bars">
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
        <div className="load-more_bar" />
      </div>
      {/* / Notifications Loader */}
    </>
  );
};

export default NotificationsLists;
