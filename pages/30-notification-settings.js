import Link from "next/link";
import React from "react";
import Layouts from "../src/layouts/Layouts";

const NotificationSettings = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        <aside>
          <div className="user-db-menu">
            <div className="user-db-header">
              <div className="user-db-cover-image profile-cover-image" />
              <div className="user-header-user-profile">
                <div className="avatar box-64">
                  <Link href="/08-profile-page">
                    <a>
                      <img src="img/avatar.png" alt="avatar" />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="title">
                  <Link href="/08-profile-page">
                    <a>Dexter Stark</a>
                  </Link>
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@DexterStark</span>
                </div>
              </div>
            </div>
            <div className="user-db-body">
              <ul className="profile-menu">
                <li className="profile">
                  <Link href="/23-profile-info">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#user-icon" />
                      </svg>
                      Profile Info
                    </a>
                  </Link>
                </li>
                <li className="account">
                  <Link href="/29-account-settings">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#settings-icon" />
                      </svg>
                      Account Settings
                    </a>
                  </Link>
                </li>
                <li className="notification">
                  <Link href="/30-notification-settings">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#slide-filter-icon" />
                      </svg>
                      Notification Settings
                    </a>
                  </Link>
                </li>
                <li className="artwork">
                  <Link href="/26-upload-artwork">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#picture-icon" />
                      </svg>
                      Create Artwork
                    </a>
                  </Link>
                </li>
                <li className="wallet">
                  <Link href="/18-connect-a-wallet">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#wallet-icon" />
                      </svg>
                      Wallet info
                    </a>
                  </Link>
                </li>
                <li className="verification">
                  <Link href="/31-get-verified">
                    <a>
                      <svg className="crumina-icon">
                        <use xlinkHref="#circle-checked-icon" />
                      </svg>
                      Get Verified
                    </a>
                  </Link>
                </li>
                <li className="logout">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#logout-icon" />
                    </svg>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Notification</span> Settings
            </h2>
          </div>
          <form className="cryptoki-form" id="notification-settings-form">
            <div className="user-db-title">Email Notifications</div>
            <div className="form-group">
              <div className="form-field form-field-row">
                <div className="label">
                  Send an email every time I get a notification
                </div>
                <label className="toggle-control">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="control" />
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-field form-field-row">
                <div className="label">
                  Weekly notifications highlights report
                </div>
                <label className="toggle-control">
                  <input type="checkbox" />
                  <span className="control" />
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <div className="label">
                  Choose notifications that you wanna receive via email
                </div>
                <div className="form-list-wrapper">
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="listings"
                      id="listings"
                      className="cryptoki-checkbox"
                      defaultChecked=""
                    />
                    <label htmlFor="listings">Listings</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="sales"
                      id="sales"
                      className="cryptoki-checkbox"
                      defaultChecked=""
                    />
                    <label htmlFor="sales">Sales</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="purchases"
                      id="purchases"
                      className="cryptoki-checkbox"
                    />
                    <label htmlFor="purchases">Purchases</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="bids"
                      id="bids"
                      className="cryptoki-checkbox"
                      defaultChecked=""
                    />
                    <label htmlFor="bids">Bids</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="likes"
                      id="likes"
                      className="cryptoki-checkbox"
                      defaultChecked=""
                    />
                    <label htmlFor="likes">Likes</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="checkbox"
                      name="follows"
                      id="follows"
                      className="cryptoki-checkbox"
                      defaultChecked=""
                    />
                    <label htmlFor="follows">Follows</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-wide btn-dark" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </Layouts>
  );
};
export default NotificationSettings;
