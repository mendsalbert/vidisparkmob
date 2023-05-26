import React, { useEffect } from "react";
import ProductV3Bids from "../src/components/Product/ProductV3/ProductV3Bids";
import ProductV3Info from "../src/components/Product/ProductV3/ProductV3Info";
import ProductV3Media from "../src/components/Product/ProductV3/ProductV3Media";
import ProductV3Meta from "../src/components/Product/ProductV3/ProductV3Meta";
import ProductV3RelatedItems from "../src/components/Product/ProductV3/ProductV3RelatedItems";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";

const Product07 = () => {
  useEffect(() => {
    countdown();
  }, []);
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="product-page product-version-3">
          {/*  PRODUCT HEADER AREA */}
          <div className="page-title-section">
            <div className="social-share-box">
              <div className="share-icons">
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
                </a>{" "}
                <a href="">
                  <svg className="crumina-icon">
                    <use xlinkHref="#instagram-icon" />
                  </svg>
                </a>{" "}
              </div>
            </div>
            <div className="product-title">
              <h1>The Kobra Kings</h1>
            </div>
            <div className="favourite-section">
              <div className="product-fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
                <span className="count">105</span>
              </div>
              <div className="more-link">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#dots-icon" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*  PRODUCT HEADER AREA */}
          {/*  PRODUCT MAIN INFO */}
          <div className="product-main-info">
            {/*  PRODUCT Info */}

            <ProductV3Info />
            {/*  PRODUCT Info */}
            {/*  PRODUCT Media */}
            <ProductV3Media />
            {/*  PRODUCT Media */}
            {/*  PRODUCT Meta */}
            <ProductV3Meta />
            {/*  PRODUCT Meta */}
          </div>
          {/*  PRODUCT MAIN INFO */}
          {/*  PRODUCT BIDS */}
          <ProductV3Bids />
          {/*  PRODUCT BIDS */}
          {/*  RELATED SECTION */}
          <ProductV3RelatedItems />
          {/*  RELATED SECTION */}
        </div>
      </div>
    </Layouts>
  );
};
export default Product07;
