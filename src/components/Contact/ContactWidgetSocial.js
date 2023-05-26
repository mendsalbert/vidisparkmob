import React from "react";
const ContactWidgetSocial = () => {
  return (
    <div className="widget widget-social">
      <div className="widget-title h5">Social Accounts</div>
      <div className="widget-body">
        <ul className="social-styled-list">
          <li>
            {" "}
            <a href="#">
              <span className="marker">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </span>
              @cryptoki
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <span className="marker">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </span>
              @cryptoki
              <span className="verified">
                <svg className="crumina-icon">
                  <use xlinkHref="#check-icon" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <span className="marker">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </span>
              @cryptoki_art
              <span className="verified">
                <svg className="crumina-icon">
                  <use xlinkHref="#check-icon" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <span className="marker">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </span>
              @cryptokilive
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <span className="marker">
                <svg className="crumina-icon">
                  <use xlinkHref="#discord-icon" />
                </svg>
              </span>
              @cryptoki
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactWidgetSocial;
