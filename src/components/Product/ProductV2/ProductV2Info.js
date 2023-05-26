import React from "react";
const ProductV2Info = () => {
  return (
    <>
      <div className="page-title-section">
        <h1>Breathing Nature</h1>
      </div>
      <div className="product-author avatar-block">
        <div className="avatar box-42">
          <img src="img/avatar.png" alt="avatar" />
          <span className="verified">
            <svg className="crumina-icon">
              <use xlinkHref="#check-icon" />
            </svg>
          </span>
        </div>
        <div className="avatar-meta">
          <div className="avatar-title">
            <span className="gradient-text">Dexter Stark</span>
          </div>
          <div className="avatar-meta">@DexterStark</div>
        </div>
      </div>
      <div className="product-meta-section">
        <div className="product-meta-item">
          <div className="label">Current bid</div>
          <div className="value">2.31 ETH</div>
          <div className="caption">125.230 U$D</div>
        </div>
        <div className="product-meta-item">
          <div className="label">Edition</div>
          <div className="value">01/40</div>
          <div className="caption">Tokens</div>
        </div>
      </div>
      <div className="place-bid">
        <button className="btn btn-wide btn-dark">Place a Bid!</button>
      </div>
      <div className="bidding-section">
        <div className="product-fav-counter">
          <svg className="crumina-icon">
            <use xlinkHref="#heart-icon" />
          </svg>
          <span className="count">105</span>
        </div>
        <div className="more-link">
          {" "}
          <a href="#">
            <svg className="crumina-icon">
              <use xlinkHref="#dots-icon" />
            </svg>
          </a>
        </div>
        <div className="social-share-box">
          <div className="share-icons">
            {" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#link-icon" />
              </svg>
            </a>{" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#facebook-icon" />
              </svg>
            </a>{" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#twitter-icon" />
              </svg>
            </a>
            <a href="">
              <svg className="crumina-icon">
                <use xlinkHref="#instagram-icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductV2Info;
