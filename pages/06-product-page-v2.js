import React, { useEffect } from "react";
import ProductV2Info from "../src/components/Product/ProductV2/ProductV2Info";
import ProductV2RelatedItems from "../src/components/Product/ProductV2/ProductV2RelatedItems";
import ProductV2Tabs from "../src/components/Product/ProductV2/ProductV2Tabs";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";
import ReactPlayer from "react-player";

const Product06 = () => {
  useEffect(() => {
    countdown();
  }, []);
  return (
    <Layouts>
      <div className="product-page product-version-2">
        <div className="product-media">
          <div className="product-img">
            <a
              className="expand-icon"
              data-fslightbox="lightbox"
              href="img/content/product-img/product-1-large.png"
            >
              <svg className="crumina-icon">
                <use xlinkHref="#maximize-icon" />
              </svg>
            </a>
            {/* <img
              src="img/content/product-img/product-1-large.png"
              width={1742}
              height={980}
              alt=""
            /> */}
            <ReactPlayer
              url="https://media.thetavideoapi.com/video_u3d9u6gy1pmxfrscd9j5csmiam/master.m3u8"
              controls
              width="100%"
              height={980}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-wrapper">
            {/* / Products V2 Info */}
            <ProductV2Info />
            {/* / Products V2 Tabs */}
            {/* <ProductV2Tabs /> */}
          </div>
        </div>

        {/* / Products V2 Related Items */}
        <ProductV2RelatedItems />
      </div>
    </Layouts>
  );
};
export default Product06;
